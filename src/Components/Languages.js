import React from "react";

function Languages(){
    return(
        <div className="languages">
            <div className="container">
                <div className="languages__box">
                    <p className="language__title">Languages</p>
                    <p className="language__item"><span className="bold">Ukrainian</span> - Native</p>
                    <p className="language__item"><span className="bold">English</span> - Upper intermediate</p>
                    <p className="language__item"><span className="bold">Polish</span> - Elementary</p>
                    <p className="language__item"><span className="bold">German</span> - Elementary</p>
                </div>
            </div>
        </div>
    )
}

export default Languages;