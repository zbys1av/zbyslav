import React from "react";

function Information(){

    let birthdate = "2001-12-09";
    let birthDate = new Date(birthdate);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    const skills = ["teamwork", "problem-solving", "adaptability", "organization", "willingness to learn", "advanced computer user", "Adobe knowledge", 
                    "Office programs knowledge", "HTML", "CSS", "JavaScript", "React.js", "C#", "C++", "Java",
                    "Git", "Intercom", "Ticket systems", "Zendesk", "CRM", "Jira", "Slack"]

    return(
        <div className="information">
            <div className="container">
                <div className="information__box">
                    <div className="information__main">
                        <p className="information__title">Who am I? </p>
                        <p className="information__item"><span className="bold">Name:</span> Zbyslav Ostapiak</p>
                        <p className="information__item"><span className="bold">Age: </span> around {age} y.o.</p>
                        <p className="information__item"><span className="bold">Born:</span> Lviv, Ukraine</p>
                    </div>
                    <div className="information__work">
                        <p className="information__title">Work expirience</p>
                        <div className="information__work-section">
                            <p className="information__work-years">04.2021 - 12.2023</p>
                            <p className="information__text">More than 2.5 years worked as support representative at <span className="bold">Boosta</span></p>
                        </div>
                        <div className="information__work-section">
                            <p className="information__work-years">06.2020 - 09.2020</p>
                            <p className="information__text">Call-center for american hospital</p>
                        </div>
                    </div>
                    <div className="information__study">
                        <p className="information__title">Education</p>
                        <div className="information__study-where">
                            <p className="information__item">Lviv Polytechnic National University <span className="bold">09.2020 - 06.2023</span></p>
                            <p className="information__item">Bachelor's degree</p>
                        </div>
                        <div className="information__study-where">
                            <p className="information__item">Lviv State College of Food and Processing Industry <span className="bold">09.2016 - 06.2020</span></p>
                            <p className="information__item">Junior specialist</p>
                        </div>
                    </div>
                    <div className="information__skills">
                        <p className="information__title">Skills</p>
                        <p className="information__skills-items">{skills.join(" ")}</p>
                    </div>
                    <div className="information__courses">
                        <p className="information__title">Courses, training</p>
                        <div className="information__courses-list">
                            <p className="information__courses-item">SoftServe IT Academy JS/CSS/HTML Course</p>
                            <p className="information__courses-item">SoftServe IT Academy React Marathon</p>
                            <p className="information__courses-item">Several JS and React courses</p>
                            <p className="information__courses-item">Participated in web page layout trainings</p>
                        </div>
                    </div>
                    <div className="information__languages">
                        <p className="information__title">Languages</p>
                        <p className="information__item"><span className="bold">Ukrainian</span> - Native</p>
                        <p className="information__item"><span className="bold">English</span> - Upper intermediate</p>
                        <p className="information__item"><span className="bold">Polish</span> - Elementary</p>
                        <p className="information__item"><span className="bold">German</span> - Elementary</p>
                    </div>
                    <div className="information__contact">
                        <p className="information__title">Contact me</p>
                        <div className="information__contact-sections">
                            <p className="information__contact-title">Email:</p>
                            <a href="mailto:zbyslav13@gmail.com" className="information__item information__item--email">zbyslav13@gmail.com</a>
                        </div>
                        <div className="information__contact-sections">
                            <p className="information__contact-title">Telegram:</p>
                            <p className="information__item">@zbyslav</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;