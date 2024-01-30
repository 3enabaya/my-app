import React, { Component , } from "react";
import './contact.css';
import Formz from "../form/form";
import coffe from '../coffee-cup_924514.png'
import coffe1 from '../coffee-1.png'
import { faFacebook , faLinkedin , faGithub ,faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const  Contact =()=> {

        return (
   
        <div className="contact mt-5 position-relative" id="contact">
            <div className="container">
                <div className="row justify-content-lg-start  justify-content-md-start justify-content-center  ">
                        <div className="col-lg-6 col-sm-12 text-center text-lg-start text-md-start "> <h3 className="mtitle  mt-5 fw-bold  ">  Contact  </h3>  <h1 className="fw-bold ct"> Let's have a Chat </h1> </div>
                        
                        <div className="row justify-content-lg-start  justify-content-md-start justify-content-center ">
                          <div className="col-8 col-md-6 col-lg-6 mt-5 mb-5   "> <Formz />      </div>                    
                        <div className="col-6 col-md-4 col-lg-6  mt-5 mb-5 text-center ">
                                <div className="social p-2 ">
                            <a href="https://www.facebook.com/3enabaya"> <FontAwesomeIcon className="fontawesome fs-1     m-3 " icon={faFacebook} /></a>
                            <a href="https://github.com/3enabaya"> <FontAwesomeIcon className="fontawesome fs-1  m-3" icon={faGithub} /></a>
                            <a href="https://wa.me/qr/WK5QPGIQ67HVG1"> <FontAwesomeIcon className="fontawesome fs-1  m-3" icon={faWhatsapp} /></a>
                            <a href="https://www.linkedin.com/in/sarrah-dawod-4a77042b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FontAwesomeIcon className="fs-1 m-3 fontawesome " icon={faLinkedin} /></a>
                                                        
                                </div> 
                                 <div className=" fs-4 ">   <h1 className="mail text-dark">Sarrahdawod@gmail.com</h1> </div>              
                                <div>
                                  
 <img  className="col-5 coff  mt-5" src={coffe}/> </div><img  className="dance col-5" src={coffe1}/> </div> 
 </div>
                </div>
            </div>


        </div>
        
    )
    }

export default Contact