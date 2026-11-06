(() => {
  'use strict';
  const BIRTH_DATE = [2001, 9, 12];
  const INTRO_COUNT_MS = 1750;
  const INTRO_HOLD_MS = 450;
  const IDLE_AFTER_MS = 60_000;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const source = Array.isArray(window.PORTFOLIO_ENTRIES) ? window.PORTFOLIO_ENTRIES : [];
  const entriesEl = document.getElementById('entries');
  const previewEl = document.getElementById('image-backdrop');
  const previewImage = document.getElementById('preview-image');
  const brand = document.getElementById('brand-trigger');
  const intro = document.getElementById('intro');
  const lifeDays = document.getElementById('life-days');
  const idleClock = document.getElementById('idle-clock');
  const clockTime = document.getElementById('clock-time');
  const filterButtons = Array.from(document.querySelectorAll('[data-sort]'));

  let expanded = null;
  let introFinished = false;
  let inactivityTimer = null;
  let activePreviewId = null;
  let previewPinned = false;
  let activeSort = null;
  let sortDirection = 1;

  const GROUP_ORDER = ['робота', 'життя', 'хобі'];
  const getGroup = item => {
    const value = String(item.group || '').trim().toLowerCase();
    return GROUP_ORDER.includes(value) ? value : 'життя';
  };
  const make = (tag, cls, value) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (value !== undefined) node.textContent = String(value);
    return node;
  };
  const dateKey = date => {
    if (!date) return null;
    const mmYY = /^(\d{2})-(\d{2})$/.exec(date);
    if (mmYY) return (2000 + Number(mmYY[2])) * 100 + Number(mmYY[1]);
    if (/^\d{4}$/.test(date)) return Number(date) * 100;
    return null;
  };
  const itemDateKey = item => {
    if (item.dateISO && /^\d{4}-\d{2}-\d{2}$/.test(item.dateISO)) {
      return Number(item.dateISO.replace(/-/g, ''));
    }
    const generalKey = dateKey(item.date);
    return generalKey === null ? null : generalKey * 100;
  };
  const dateLabel = item => {
    if (!item.date) return '';
    if (!item.period) return item.date;
    return item.period.replace(/\b(\d{2})\.(20\d{2})\b/g, (_match, month, year) => `${month}-${year.slice(2)}`);
  };
  const appendValue = (target, value) => {
    if (value && typeof value === 'object' && typeof value.href === 'string') {
      const link = make('a', 'detail-link', value.text || value.href);
      link.href = value.href;
      if (/^https?:\/\//.test(value.href)) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      target.appendChild(link);
    } else if (value !== undefined && value !== null) {
      target.textContent = String(value);
    }
  };

  const closeRow = article => {
    article.classList.remove('is-open');
    const details = article.querySelector('.entry-details');
    article.querySelector('.entry-title').setAttribute('aria-expanded', 'false');
    details.classList.remove('is-open');
    details.setAttribute('aria-hidden', 'true');
    details.inert = true;
    if (expanded === article) expanded = null;
  };
  const openRow = article => {
    if (expanded && expanded !== article) closeRow(expanded);
    closePreview();
    article.classList.add('is-open');
    const details = article.querySelector('.entry-details');
    article.querySelector('.entry-title').setAttribute('aria-expanded', 'true');
    details.classList.add('is-open');
    details.setAttribute('aria-hidden', 'false');
    details.inert = false;
    expanded = article;
  };
  const toggleRow = article => expanded === article ? closeRow(article) : openRow(article);

  const showPreview = (src, id, pin = false) => {
    if (!src) return;
    if (activePreviewId !== id) previewImage.src = src;
    activePreviewId = id;
    previewPinned = pin;
    previewEl.classList.add('is-visible');
  };
  function closePreview() {
    previewEl.classList.remove('is-visible');
    activePreviewId = null;
    previewPinned = false;
  }

  // The uploaded original photo is deliberately used unchanged, with no generative replacement.
  const profileImage = 'assets/zbyslav.jpg';
  brand.addEventListener('pointerenter', e => {
    if (e.pointerType !== 'touch') showPreview(profileImage, 'profile');
  });
  brand.addEventListener('pointerleave', () => { if (!previewPinned) closePreview(); });
  brand.addEventListener('focus', () => showPreview(profileImage, 'profile'));
  brand.addEventListener('blur', () => { if (!previewPinned) closePreview(); });
  brand.addEventListener('click', e => {
    e.stopPropagation();
    if (previewPinned && activePreviewId === 'profile') closePreview();
    else showPreview(profileImage, 'profile', true);
  });

  // Construct each entry only once, so sorting preserves event handlers and open states.
  const records = source.map((item, index) => {
    const article = make('article', 'entry');
    article.dataset.id = item.id || `entry-${index}`;
    article.dataset.group = getGroup(item);
    const line = make('div', 'entry-line');
    line.appendChild(make('span', 'entry-date', item.date || ''));
    const toggle = make('button', 'entry-title', item.title || '');
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', `detail-${article.dataset.id}`);
    toggle.addEventListener('click', () => toggleRow(article));
    line.appendChild(toggle);
    const metadata = make('span', 'entry-meta', '');
    line.appendChild(metadata);
    if (item.preview) {
      const dot = make('button', 'preview-dot');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Зображення: ${item.title}`);
      dot.addEventListener('pointerenter', e => { if (e.pointerType !== 'touch') showPreview(item.preview, item.id); });
      dot.addEventListener('pointerleave', () => { if (!previewPinned) closePreview(); });
      dot.addEventListener('focus', () => showPreview(item.preview, item.id));
      dot.addEventListener('blur', () => { if (!previewPinned) closePreview(); });
      dot.addEventListener('click', e => {
        e.stopPropagation();
        if (previewPinned && activePreviewId === item.id) closePreview();
        else showPreview(item.preview, item.id, true);
      });
      line.appendChild(dot);
    }
    const details = make('div', 'entry-details');
    details.id = `detail-${article.dataset.id}`;
    details.setAttribute('aria-hidden', 'true');
    details.inert = true;
    const clip = make('div', 'entry-details-clip');
    const content = make('div', 'entry-details-content');
    const facts = Array.isArray(item.facts) ? item.facts : [];
    facts.forEach(([label, val]) => {
      // Category/type remain in the data for sorting, but are not shown in expanded details.
      if (['тип', 'категорія'].includes(String(label).trim().toLocaleLowerCase('uk-UA'))) return;
      const pair = make('div', 'detail-pair');
      pair.appendChild(make('div', 'detail-label', label));
      const value = make('div', 'detail-value');
      appendValue(value, val);
      pair.appendChild(value);
      content.appendChild(pair);
    });
    // Some records (such as hobbies) contain several independently dated
    // subsections. Dates are displayed in the same left column as main rows.
    if (Array.isArray(item.subsections) && item.subsections.length) {
      const sublist = make('div', 'entry-subsections');
      item.subsections.forEach(section => {
        const subrow = make('div', 'entry-subsection');
        subrow.appendChild(make('span', 'subsection-date', section.date || ''));
        subrow.appendChild(make('span', 'subsection-title', section.title || ''));
        const note = make('span', 'subsection-description');
        appendValue(note, section.description);
        subrow.appendChild(note);
        sublist.appendChild(subrow);
      });
      content.appendChild(sublist);
    }
    clip.appendChild(content);
    details.appendChild(clip);
    article.appendChild(line);
    article.appendChild(details);
    entriesEl.appendChild(article);
    return {item, index, article, metadata, dateValue:itemDateKey(item), group:getGroup(item)};
  });

  function renderSort() {
    const sorted = records.slice();
    if (activeSort === 'type') {
      sorted.sort((a,b) => sortDirection * (GROUP_ORDER.indexOf(a.group) - GROUP_ORDER.indexOf(b.group)) || a.index - b.index);
    } else if (activeSort === 'date') {
      sorted.sort((a,b) => {
        // Unknown dates are always below known dates; never fabricate missing dates.
        if (a.dateValue === null && b.dateValue !== null) return 1;
        if (b.dateValue === null && a.dateValue !== null) return -1;
        if (a.dateValue === null && b.dateValue === null) return a.index - b.index;
        return sortDirection * (b.dateValue - a.dateValue) || a.index - b.index;
      });
    }
    sorted.forEach(record => {
      record.metadata.textContent = activeSort === 'type' ? record.group
        : activeSort === 'date' ? dateLabel(record.item)
        : '';
      entriesEl.appendChild(record.article);
    });
    filterButtons.forEach(button => {
      const selected = button.dataset.sort === activeSort;
      button.setAttribute('aria-pressed', String(selected));
      button.setAttribute('aria-label', selected
        ? `${button.textContent}, сортування ${sortDirection === 1 ? (activeSort === 'date' ? 'від нових до старих' : 'за категорією') : 'у зворотному порядку'}`
        : `Сортувати за полем ${button.textContent}`);
    });
  }
  filterButtons.forEach(button => button.addEventListener('click', () => {
    if (activeSort === button.dataset.sort) sortDirection *= -1;
    else { activeSort = button.dataset.sort; sortDirection = 1; }
    renderSort();
  }));
  renderSort();

  document.addEventListener('pointerdown', event => {
    if (previewPinned && !event.target.closest('.preview-dot, .brand-trigger')) closePreview();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (activePreviewId) closePreview();
      else if (expanded) {
        const current = expanded;
        closeRow(current);
        current.querySelector('.entry-title').focus();
      }
    }
  });
  window.addEventListener('scroll', () => {if (!previewPinned) closePreview();}, {passive:true});
  window.addEventListener('resize', closePreview);

  const clockFormat = new Intl.DateTimeFormat('uk-UA', {hour:'2-digit', minute:'2-digit', hourCycle:'h23'});
  function updateClock() {
    const now = new Date();
    clockTime.textContent = clockFormat.format(now);
    clockTime.setAttribute('datetime', now.toISOString());
  }
  updateClock();
  setInterval(updateClock, 1000);
  function hideClock() {
    idleClock.classList.remove('is-visible');
    idleClock.setAttribute('aria-hidden', 'true');
    idleClock.inert = true;
  }
  function showClock() {
    if (!introFinished || document.hidden) return;
    closePreview();
    updateClock();
    idleClock.classList.add('is-visible');
    idleClock.setAttribute('aria-hidden', 'false');
    idleClock.inert = false;
  }
  function resetIdle() {
    hideClock();
    clearTimeout(inactivityTimer);
    if (!document.hidden && introFinished) inactivityTimer = setTimeout(showClock, IDLE_AFTER_MS);
  }
  ['pointermove','pointerdown','keydown','wheel','touchstart','scroll'].forEach(name => window.addEventListener(name, resetIdle, {passive:true}));
  document.addEventListener('visibilitychange', resetIdle);

  function endIntro() {
    if (introFinished) return;
    introFinished = true;
    intro.classList.add('is-gone');
    setTimeout(() => intro.remove(), reducedMotion ? 0 : 740);
    resetIdle();
  }
  // Local-date calendar subtraction prevents DST from shifting the day counter.
  function getDaysLived() {
    const today = new Date();
    const todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    const birthUTC = Date.UTC(BIRTH_DATE[0], BIRTH_DATE[1] - 1, BIRTH_DATE[2]);
    return Math.max(1, Math.floor((todayUTC - birthUTC) / 86400000));
  }
  function playIntroCount() {
    const finalDay = getDaysLived();
    lifeDays.textContent = '1';
    if (reducedMotion) {lifeDays.textContent = String(finalDay); endIntro(); return;}
    let start = null;
    function frame(now) {
      if (start === null) start = now;
      const t = Math.min((now - start) / INTRO_COUNT_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      lifeDays.textContent = String(Math.max(1, Math.floor(1 + (finalDay - 1) * eased)));
      if (t < 1) requestAnimationFrame(frame);
      else {lifeDays.textContent = String(finalDay); setTimeout(endIntro, INTRO_HOLD_MS);}
    }
    requestAnimationFrame(frame);
  }
  playIntroCount();
})();
