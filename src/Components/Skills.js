import React from "react";

function Skills(){

    const skills = ["teamwork", "problem-solving", "adaptability", "organization", "willingness to learn", "advanced computer user", "Adobe knowledge", 
                    "Office programs knowledge", "HTML", "CSS", "JavaScript", "React.js", "C#", "C++", "Java",
                    "Git", "Intercom", "Ticket systems", "Zendesk", "CRM", "Jira", "Slack"]

    return(
        <div className="skills">
            <div className="container">
                <div className="skills__box">
                    <p className="skills__title">Skills</p>
                    <p className="skills__items">{skills.join(" ")}</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;