import React from "react";

function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="footer__contact">
                    <p className="footer__title">Contact me</p>
                    <div className="footer__contact-sections">
                        <p className="footer__contact-title">Email:</p>
                        <a href="mailto:zbyslav13@gmail.com" className="footer__item footer__item--email">zbyslav13@gmail.com</a>
                    </div>
                    <div className="footer__contact-sections">
                        <p className="footer__contact-title">Telegram:</p>
                        <p className="footer__item">@zbyslav</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;