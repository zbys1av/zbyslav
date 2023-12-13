import React from "react";

function Courses(){
    return(
        <div className="courses">
            <div className="container">
                <div className="courses__box">
                    <p className="courses__title section-title bold">Courses / trainings</p>
                    <div className="courses__list">
                        <div className="courses__section item">
                            <p className="courses__item courses__item--name">JS/CSS/HTML Course</p>
                            <p className="courses__item courses__item--time">2 months</p>
                            <p className="courses__item courses__item--where">SoftServe IT Academy</p>
                        </div>
                        <div className="courses__section item">
                            <p className="courses__item courses__item--name">React.js Marathon</p>
                            <p className="courses__item courses__item--time">3 months</p>
                            <p className="courses__item courses__item--where">SoftServe IT Academy</p>
                        </div>
                        <div className="courses__section item">
                            <p className="courses__item courses__item--name">Web-page layout trainings</p>
                            <p className="courses__item courses__item--time">3 months</p>
                            <p className="courses__item courses__item--where">Boosta</p>
                        </div>
                        <div className="courses__section item">
                            <p className="courses__item courses__item--name">JS + React courses</p>
                            <p className="courses__item courses__item--time">no exact time</p>
                            <p className="courses__item courses__item--where">Online</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;