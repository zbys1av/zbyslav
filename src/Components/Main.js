import React from "react";
import photo from "./img/photo.png"; 

function Main(){

    let birthdate = "2001-12-09";
    let birthDate = new Date(birthdate);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    return(
        <div className="main">
            <div className="container">
                <div className="main__box">
                    <a className="main__image-link" href="https://www.instagram.com/zbys1av/" target="_blank">
                        <img className="main__image" width={300} src={photo}></img>
                    </a>
                    <p className="main__title">Zbyslav Ostapiak</p>
                    <p className="main__item">born in <span className="bold">Lviv </span>/ Ukraine around <span className="bold">{age}</span> years ago</p>
                </div>
            </div>
        </div>
    )
}

export default Main;