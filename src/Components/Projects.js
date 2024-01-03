import React from "react";

function Projects(){
    return(
        <div className="projects">
            <div className="container">
                <div className="projects__box">
                <p className="projects__title section-title bold">My projects</p>
                    <a  href="https://zbys1av.github.io/how-long-you-alive/" target="_blank" className="projects__section item">
                        <p  className="projects__name">How long do I live?</p>
                        <p className="projects__created-date">2020</p>
                    </a>

                    <a  href="https://zbys1av.github.io/timer/" target="_blank" className="projects__section item">
                        <p className="projects__name">Just a simple timer</p>
                        <p className="projects__created-date">2020</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;