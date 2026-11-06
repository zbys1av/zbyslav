/* CV facts are sourced from the supplied CV.pdf.
 * Structure note for future updates:
 * - date: visible in the left column only when known (MM-YY or YYYY)
 * - group: visible through the "Тип" filter (робота / життя / хобі)
 * - preview: optional hover image for the dot column
 * - facts: expanded row content
 * - subsections: optional nested rows, each with its own title/date/description
 * - dateISO: optional precise calendar date when display uses MM-YY
 */
window.PORTFOLIO_ENTRIES = [
  {
    id:'upstars', group:'робота', date:'01-25', title:'UPSTARS', preview:'assets/upstars-2025.png',
    facts:[
      ['Тип','Робота'],
      ['Посада','VIP Customer Success Manager'],
      ['Сфера','iGaming'],
      ['Канали комунікації','Email, дзвінки'],
      ['Робоча мова','Англійська'],
      ['Період','Січень 2025 — дотепер']
    ]
  },
  {
    id:'ciklum-bandcamp', group:'робота', date:'01-24', title:'CIKLUM / BANDCAMP', preview:'assets/ciklum-desk.jpg',
    facts:[
      ['Тип','Робота'],
      ['Посада','Support Engineer'],
      ['Компанія','Ciklum / Bandcamp'],
      ['Сфера','Американський маркетплейс, пов’язаний із музикою'],
      ['Канали комунікації','Тікети, email'],
      ['Робоча мова','Англійська'],
      ['Період','Січень 2024 — січень 2025']
    ]
  },
  {
    id:'boosta', group:'робота', date:'04-21', title:'BOOSTA', preview:'assets/boosta-office.jpg',
    facts:[
      ['Тип','Робота'],
      ['Посада','Senior Support Representative'],
      ['Сфера','IT-компанія'],
      ['Канали комунікації','Чати, email, телефонні дзвінки'],
      ['Робоча мова','Англійська'],
      ['Період','Квітень 2021 — грудень 2023']
    ]
  },
  {
    id:'hospital', group:'робота', date:'06-20', title:'American Hospital', preview:'assets/american-hospital-map.png',
    facts:[
      ['Тип','Робота'],
      ['Посада','Call-center Agent'],
      ['Сфера','Американська лікарня'],
      ['Робочі мови','Англійська, російська'],
      ['Період','Червень 2020 — жовтень 2020']
    ]
  },

  {
    id:'bachelor-degree', group:'життя', date:'09-20', title:'Бакалавр',
    facts:[
      ['Тип','Життя'],
      ['Категорія','Освіта'],
      ['Ступінь','Бакалавр'],
      ['Спеціальність','Комп’ютерні науки'],
      ['Період','Вересень 2020 — червень 2023']
    ]
  },
  {
    id:'bachelor-university', group:'життя', date:'09-20', title:'Львівська політехніка',
    facts:[
      ['Тип','Життя'],
      ['Категорія','Освіта'],
      ['Заклад','Національний університет «Львівська політехніка»'],
      ['Напрям','Комп’ютерні науки'],
      ['Період','Вересень 2020 — червень 2023']
    ]
  },
  {
    id:'junior-degree', group:'життя', date:'09-16', title:'Молодший спеціаліст',
    facts:[
      ['Тип','Життя'],
      ['Категорія','Освіта'],
      ['Ступінь','Молодший спеціаліст'],
      ['Період','Вересень 2016 — червень 2020']
    ]
  },
  {
    id:'junior-college', group:'життя', date:'09-16', title:'Коледж харчової і переробної промисловості',
    facts:[
      ['Тип','Життя'],
      ['Категорія','Освіта'],
      ['Заклад','Львівський державний коледж харчової і переробної промисловості'],
      ['Напрям','Комп’ютерні науки та інформаційні технології'],
      ['Період','Вересень 2016 — червень 2020']
    ]
  },

  {
    id:'course-softserve-html', group:'життя', date:'08-20', dateISO:'2020-08-07', title:'SoftServe JS / CSS / HTML',
    facts:[
      ['Тип','Життя'],
      ['Категорія','Курси'],
      ['Організація','SoftServe IT Academy'],
      ['Курс','JS / CSS / HTML Course'],
      ['Дата','07.08.2020']
    ]
  },
  {
    id:'course-softserve-react', group:'життя', date:'10-20', title:'SoftServe React Marathon',
    facts:[
      ['Тип','Життя'],
      ['Категорія','Курси'],
      ['Організація','SoftServe IT Academy'],
      ['Курс','React Marathon'],
      ['Період','10.2020 — 12.2020']
    ]
  },
  {
    id:'course-js-react', group:'життя', date:'03-21', title:'JS та React курси',
    facts:[
      ['Тип','Життя'],
      ['Категорія','Курси'],
      ['Опис','Курси з JavaScript та React'],
      ['Дата','03.2021']
    ]
  },
  {
    id:'course-layout', group:'життя', date:'2021', title:'Тренінги з верстки',
    facts:[
      ['Тип','Життя'],
      ['Категорія','Курси'],
      ['Опис','Тренінги з верстки вебсторінок'],
      ['Дата','2021']
    ]
  },

  {
    id:'skill-soft', group:'життя', date:'', title:'Soft skills',
    facts:[
      ['Тип','Життя'],
      ['Категорія','Навички'],
      ['Навички','Командна робота, вирішення проблем, адаптивність, організованість, готовність навчатися']
    ]
  },
  {
    id:'skill-support-stack', group:'життя', date:'', title:'Інструменти підтримки',
    facts:[
      ['Тип','Життя'],
      ['Категорія','Навички'],
      ['Підтримка','Intercom, Zendesk, HelpScout, FreshDesk'],
      ['CRM та задачі','CRM, Jira, FreshSales']
    ]
  },
  {
    id:'software', group:'життя', date:'', title:'Програми',
    facts:[
      ['Тип','Життя'],
      ['Категорія','Навички'],
      ['Adobe','Програми Adobe'],
      ['Microsoft','Microsoft Office']
    ]
  },
  {
    id:'programming', group:'життя', date:'', title:'Програмування',
    facts:[
      ['Тип','Життя'],
      ['Категорія','Навички'],
      ['Веб','HTML, CSS, JavaScript'],
      ['Фреймворки','React.js'],
      ['Інші мови','C#, Java, C++']
    ]
  },
  {
    id:'languages', group:'життя', date:'', title:'Мови',
    facts:[
      ['Українська','Рідна'],
      ['Англійська','Upper-intermediate'],
      ['Німецька','Elementary'],
      ['Польська','Elementary']
    ]
  },
  {
    id:'hobbies', group:'хобі', date:'', title:'Захоплення',
    // All hobby dates belong to individual subsections, never to the parent row.
    subsections:[
      { title:'Art', date:'2010', description:'Малювання' },
      { title:'Digital art', date:'2020', description:'Цифрове малювання та ілюстрація' },
      { title:'Фотографія', date:'2016' },
      { title:'Гітара', date:'2019' },
      { title:'Відеоігри', date:'2007' },
      { title:'Обробка фото, відео й аудіо', date:'' }
    ]
  },
  {
    id:'contact', group:'життя', date:'', title:'Контакти',
    facts:[
      ['Email',{text:'zbyslav13@gmail.com',href:'mailto:zbyslav13@gmail.com'}],
      ['Телефон',{text:'+380 63 198 40 73',href:'tel:+380631984073'}],
      ['Telegram',{text:'@zbyslav',href:'https://t.me/zbyslav'}]
    ]
  }
];
