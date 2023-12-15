import React from "react";

function Skills(){

    const skills = ["teamwork", "problem-solving", "adaptability", "organization", "willingness to learn", "advanced computer user", "Adobe knowledge", 
                    "Office programs knowledge", "HTML", "CSS", "JavaScript", "React.js", "C#", "C++", "Java",
                    "Git", "Intercom", "Ticket systems", "Zendesk", "CRM", "Jira", "Slack"]

    return(
        <div className="skills">
            <div className="container">
                <div className="skills__box">
                    <p className="skills__title section-title bold">Skills</p>
                    {/* <p className="skills__items item">{skills.join(" ")}</p> */}
                    <div className="skills__section item">
                        <div className="skills__row">
                            <p className="skills__item info">{skills[0]}</p>
                            <p className="skills__item info">{skills[1]}</p>
                            <p className="skills__item info">{skills[2]}</p>
                            <p className="skills__item info">{skills[3]}</p>
                            <p className="skills__item info">{skills[4]}</p>
                            <p className="skills__item info">{skills[5]}</p>
                            <p className="skills__item info">{skills[6]}</p>
                            <p className="skills__item info">{skills[7]}</p>
                            <p className="skills__item info">{skills[8]}</p>
                            <p className="skills__item info">{skills[9]}</p>
                            <p className="skills__item info">{skills[10]}</p>
                        </div>
                        <div className="skills__row">
                            <p className="skills__item info">{skills[11]}</p>
                            <p className="skills__item info">{skills[12]}</p>
                            <p className="skills__item info">{skills[13]}</p>
                            <p className="skills__item info">{skills[14]}</p>
                            <p className="skills__item info">{skills[15]}</p>
                            <p className="skills__item info">{skills[16]}</p>
                            <p className="skills__item info">{skills[17]}</p>
                            <p className="skills__item info">{skills[18]}</p>
                            <p className="skills__item info">{skills[19]}</p>
                            <p className="skills__item info">{skills[20]}</p>
                            <p className="skills__item info">{skills[21]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;