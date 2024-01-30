import React from "react";
import './About.css';
import sara from '../form/form.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileWink } from "@fortawesome/free-regular-svg-icons";
const About = () => {
    return (
        <div className="About  " id="About">
            <div className="container">
                <div className=" row  ">
                    <div className="row justify-content-sm-center ">
                        
                        <div className="col-lg-8 col-sm-12 text-start p-4">
                        <h4 className="mtitle  "> About </h4>
                            <p className="title fs-1 ">
                                Hello I'm Sarrah, Front-End Developer </p> 
                                <h4 className=" text-info fw-bold">Passion</h4>
                            <h4>I've been having a great passion for computers and technology ever since I was a little kid.
                                My family and neighbours would always call for my help whenever an error would pop up on their screens and that's where my journey started.
                                </h4><h4>
                                I've been curious eversince to learn more about how web development really works
                                and from day one I insisted to learn it all by myself, 
                                I always get jealous seeing other people's work and I can't rest until I know how to do it myself.
                                <FontAwesomeIcon className="text-info" icon={faFaceSmileWink} />
                                
                            </h4>                                <h4 className="do fw-bold">What I'm Doing Now?</h4>
                            <h4>Currently upskilling in vue.js and React </h4>




   

                        </div>
                        <div className="col-lg-3  col-sm-4">
                            <img className="sara" src={sara} />
                        </div>
                    </div>
        </div>
           </div></div>
    
    
    )
}
export default About