import React from "react";
import photo from "./img/photo.jpg"; 

function Main(){

    let birthdate = "2001-12-09";
    let birthDate = new Date(birthdate);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    return(
        <div className="main">
            <div className="container">
                <div className="main__box">
                    <img className="main__image" src={photo}></img>
                    <p className="main__title">Zbyslav Ostapiak</p>
                    <p className="main__item">born in <span className="bold">Lviv </span>/ Ukraine around <span className="bold">{age}</span> years ago</p>
                </div>
            </div>
        </div>
    )
}

export default Main;