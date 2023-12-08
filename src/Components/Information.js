import React from "react";

function Information(){

    let birthdate = "2001-12-09";
    let birthDate = new Date(birthdate);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

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
                </div>
            </div>
        </div>
    )
}

export default Information;