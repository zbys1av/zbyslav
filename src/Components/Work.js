import React, {useState} from "react";

function Work(){

    const [isOpen, setIsOpen] = useState(false);
    
    function toggleAccordion(){
        setIsOpen(!isOpen);
    }

    return(
        <div className="work">
            <div className="container">
                <div className="work__box">
                    <p className="work__title section-title bold">Work expirience</p>
                    <div className="work__section work__section--accordion item" onClick={toggleAccordion}>
                        <div className="work__main-info-sec">
                            <p className="work__item work__item--years bold">04.2021 - 12.2023</p>
                            <p className="work__item work__item--position">Customer Support Representative</p>
                            <p className="work__item work__item--respon">chats/emails/calls</p>
                            <p className="work__item work__item--company">Boosta</p>
                        </div>
                        <div className="work__additional-info-sec">
                            {isOpen && (
                                <p className="work__additional-info">
                                    As a Support Agent, my responsibilities included 
                                    live chats, which were the primary source of 
                                    inquiries (100-150 chats/day), emails were fewer in 
                                    number (40-70/day), and there were also around 5-7 
                                    calls per day, along with additional tasks directly 
                                    related to customer orders. Inquiries were not specifically 
                                    assigned by channel, so in chats, calls, and emails, clients 
                                    could ask general questions about the service, seek assistance 
                                    with technical issues, or address problems with their orders. 
                                    I assisted clients with almost all the questions they had. 
                                    Additionally, there were different clients with varying moods, 
                                    different issues, and varying levels of understanding of our service. 
                                    Most often, I dealt with clients who were very unpleased with something.
                                </p>
                            )}
                        </div>
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