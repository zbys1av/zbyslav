import React, {useState} from "react";

function Languages(){

    const [isUkr, setIsUkr] = useState(false);
    const [isEng, setIsEng] = useState(false);
    const [isPol, setIsPol] = useState(false);
    const [isGer, setIsGer] = useState(false);
    
    function toogleUkr(){
        setIsUkr(!isUkr);
    }

    function toogleEng(){
        setIsEng(!isEng);
    }

    function tooglePol(){
        setIsPol(!isPol);
    }

    function toogleGer(){
        setIsGer(!isGer);
    }

    return(
        <div className="languages">
            <div className="container">
                <div className="languages__box">
                    <p className="language__title section-title bold">Languages</p>
                    <div className="language__section item" onClick={toogleUkr}>
                        <div className="language__section language__section--main">
                            <p className="language__item language__item--language">Ukrainian</p>
                            <p className="language__item language__item--level">Native</p>
                        </div>
                        <div className="language__section language__section--additional">
                                {isUkr && (
                                    <p className="language__additional-info">
                                        Можу розказати все, що завгодно. Головне не питайтеся нічого сильно наукового,
                                        бо тут я посиплюся. Все інше - знаю і можу підтримати розмову. Можливо, не самий
                                        грамотний знавець своєї мови, але що тут вже зробиш...
                                    </p>
                                )}
                        </div>
                    </div>
                    <div className="language__section item" onClick={toogleEng}>
                        <div className="language__section language__section--main">
                            <p className="language__item language__item--language">English</p>
                            <p className="language__item language__item--level">Upper intermediate</p>
                        </div>
                        <div className="language__section language__section--additional">
                                {isEng && (
                                    <p className="language__additional-info">
                                        English is my second language (right after Ukrainian and German -__- )
                                        English is second most common language in my life. 
                                    </p>
                                )}
                        </div>
                    </div>
                    <div className="language__section item" onClick={tooglePol}>
                        <div className="language__section language__section--main">
                            <p className="language__item language__item--language">Polish</p>
                            <p className="language__item language__item--level">Elementary</p>
                        </div>
                        <div className="language__section language__section--additional">
                                {isPol && (
                                    <p className="language__additional-info">
                                        Nie jestem Poliakom
                                    </p>
                                )}
                        </div>
                    </div>
                    <div className="language__section item" onClick={toogleGer}>
                        <div className="language__section language__section--main">
                            <p className="language__item language__item--language">German</p>
                            <p className="language__item language__item--level">Elementary</p>
                        </div>
                        <div className="language__section language__section--additional">
                                {isGer && (
                                    <p className="language__additional-info">
                                        Wie heißt du? Ich heiße Zbyslav 
                                    </p>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Languages;