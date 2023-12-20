import React from "react";

function Study(){
    return(
        <div className="study">
            <div className="container">
                <div className="study__box">
                    <p className="study__title section-title bold">Education</p>
                    <div className="study__where item">
                        <p className="study__item study__item--year bold">09.2020 - 06.2023</p>
                        <p className="study__item study__item--uni ">Lviv Polytechnic National University</p>
                        <p className="study__item study__item--degree " >Bachelor's degree</p>
                        <p className="study__item study__item--location ">Lviv/Ukraine</p>
                    </div>
                    <div className="study__where item">
                        <p className="study__item study__item--year bold">09.2016 - 06.2020</p>
                        <p className="study__item study__item--uni ">Lviv State College of Food and Processing Industry</p>
                        <p className="study__item study__item--degree " >Junior specialist</p>
                        <p className="study__item study__item--location ">Lviv/Ukraine</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Study;