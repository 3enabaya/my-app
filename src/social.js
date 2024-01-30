import React, { Component , } from "react";
import { faFacebook , faLinkedin , faGithub ,faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import './social.css';
const Social = () => {

        return (
   
                <div className=" justify-content-lg-start  justify-content-md-start justify-content-center ">
                        <div className="col-6 col-md-4 col-lg-6  mt-5 mb-5 text-center ">
                                <div className="social p-2 ">
                            <a href="https://www.facebook.com/3enabaya"> <FontAwesomeIcon className=" fontawesome fs-1 mb-3 mx-3 " icon={faFacebook} /></a>
                            <a href="https://github.com/3enabaya"> <FontAwesomeIcon className="fontawesome fs-1 mb-3   mx-3 " icon={faGithub} /></a>
                            <a href="https://wa.me/qr/WK5QPGIQ67HVG1"> <FontAwesomeIcon className="fontawesome fs-1  mb-3 mx-3  " icon={faWhatsapp} /></a>
                                        <a href="https://www.linkedin.com/in/sarrah-dawod-4a77042b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon className="fontawesome fs-1 mx-3 mb-3" icon={faLinkedin} /></a>
                            <a href="https://docs.google.com/document/d/1l62aXnX6ftqD17daohGwN5DS3NiaI8KP188PDqMGKLg/edit?usp=sharing" download></a>
                            <a  className="resume btn btn-light mx-3  mb-5 " href="https://docs.google.com/document/d/1l62aXnX6ftqD17daohGwN5DS3NiaI8KP188PDqMGKLg/edit?usp=sharing">Resume </a>
                      

                                
                                  
 </div> 

                        
                </div>   </div>  
           

    
        
    )
    }

export default Social