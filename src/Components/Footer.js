import React,{useState, useEffect} from "react";

function Footer(){

    const [details, setDetails] = useState();

    let date = new Date(details);
    const months = [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ];

    let dateString = ("00" + date.getDate()).slice(-2) + '/' + months[date.getMonth()] + '/' + date.getFullYear() + ' at ' + ("00" + date.getHours()).slice(-2) + ':' + ("00" + date.getMinutes()).slice(-2) + ':' + ("00" + date.getSeconds()).slice(-2);


    useEffect(function(){
        fetch(`https://api.github.com/repos/zbys1av/zbyslav`)
            .then(res => res.json())
            .then(data => setDetails(data.pushed_at));
    }, []); 

    return(
        <div className="footer">
            <div className="container">
                <div className="footer__contact">
                    {/* <p className="footer__title">Contact me</p> */}
                    <div className="footer__contact-sections">
                        {/* <p className="footer__contact-title">Telegram:</p> */}
                        <a className="footer__item footer__item--telegram bold" target="none" href="https://t.me/zbyslav">@zbyslav</a>
                    </div>
                    <div className="footer__contact-sections">
                        {/* <p className="footer__contact-title">Email:</p> */}
                        <a href="mailto:zbyslav13@gmail.com" className="footer__item footer__item--email">zbyslav13@gmail.com</a>
                    </div>
                    <div className="footer__contact-sections">
                        <a href="tel:+380631984073" className="footer__item footer__item--phone">+380 63 198 40 73</a>
                    </div>
                    <p className="footer__info">made by zbys1av</p>
                    <p className="footer__info footer__info--date">updated {dateString}</p>
                    {/* https://api.github.com/repos/zbys1av/zbyslav */}
                </div>
            </div>
        </div>
    )
}

export default Footer;