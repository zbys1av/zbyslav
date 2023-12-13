import React from "react";

function Work(){
    return(
        <div className="work">
            <div className="container">
                <div className="work__box">
                    <p className="work__title section-title bold">Work expirience</p>
                    <div className="work__section item">
                        <p className="work__item work__item--years bold">04.2021 - 12.2023</p>
                        <p className="work__item work__item--position">Customer Support Representative</p>
                        <p className="work__item work__item--respon">chats/emails/calls</p>
                        <p className="work__item work__item--company">Boosta</p>
                    </div>
                    <div className="work__section item">
                        <p className="work__item work__item--years bold">06.2020 - 09.2020</p>
                        <p className="work__item work__item--position">Call-center agent</p>
                        <p className="work__item work__item--respon">calls</p>
                        <p className="work__item work__item--company">Century Medical and Dental Center</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;