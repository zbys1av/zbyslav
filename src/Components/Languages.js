import React from "react";

function Languages(){
    return(
        <div className="languages">
            <div className="container">
                <div className="languages__box">
                    <p className="language__title section-title bold">Languages</p>
                    <div className="language__section item">
                        <p className="language__item language__item--language">Ukrainian</p>
                        <p className="language__item language__item--level">Native</p>
                    </div>
                    <div className="language__section item">
                        <p className="language__item language__item--language">English</p>
                        <p className="language__item language__item--level">Upper intermediate</p>
                    </div>
                    <div className="language__section item">
                        <p className="language__item language__item--language">Polish</p>
                        <p className="language__item language__item--level">Elementary</p>
                    </div>
                    <div className="language__section item">
                        <p className="language__item language__item--language">German</p>
                        <p className="language__item language__item--level">Elementary</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Languages;