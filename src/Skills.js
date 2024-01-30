import React from "react";
import './Skills.css';
import responsive from './icons8-responsive-50 (1).png'
import visual from './visual-studio_906324.png'
import css3 from './css_5538520.png'
import html5 from './html-5_919827.png'
import saas from './sass_5968358.png'
import bootstrap from './bold_10700968.png'
import react from './atom_471902.png'
import github from './atom_471902.png'
import JavaScript from './js_5968292.png'


const Skills = () => {
    return (
        <div className="skills " id="skills">
            <div className="container">
       <div className="row justify-content-start ">
            <div className="col-4 text-center mx-5 mb-4 ">
                        <h2 className=" mtitle fs-3 mx-5 "> MySkills</h2>
                    </div>
      <div className="highlight"></div>
                </div>
                    {/* first row */}
                    <div className="row justify-content-center  firstrow pt-3 mb-3">
                        <div className="col-lg-3 col-sm-6 text-center">
                        <h1> <img src={html5} /> </h1>
                        <span className="fs-4"> HTML5</span>
                        </div>
                        <div className="col-lg-3 col-sm-6 text-center">
                        <h1><img src={css3} /></h1>
                        <span className="fs-4"> CSS3 </span>                      

                        </div>
                        <div className="col-lg-3 col-sm-6 text-center ">
                        <h1><img src={saas} /></h1>
                        <span className="fs-4"> SAAS</span>

                        </div>
                        <div className="col-lg-3 col-sm-6 text-center">
                        <h1><img className="w-25" src={bootstrap} /></h1>
                        <span className="fs-4 "> Bootstrap5 </span>

                        </div>
                    </div>

 {/* second row */}
   {/* first row */}
   <div className="row justify-content-center secondrow  pt-3 mb-3">
                        <div className="col-lg-3 col-sm-6 text-center ">
                        <h1><img src={JavaScript} /> </h1>
                        <span className="fs-4"> JavaScript</span>

                        </div>
                        <div className="col-lg-3 col-sm-6 text-center">
                        <h1> <img src={react} /></h1>
                        <span className="fs-4"> React.js </span>                      

                        </div>
                        <div className="col-lg-3 col-sm-6 text-center ">
                        <h1><img src={visual} /></h1>
                        <span className="fs-4"> VS </span>

                        </div>
                        <div className="col-lg-3 col-sm-6 text-center">
                        <h1><img src={github} /></h1>
                        <span className="fs-4 ">  GitHub </span>

                        </div>
                        <div className="col-lg-3 col-sm-6 text-center">
                            <h1> <img className="responsive" src={responsive} /></h1>
                            <span className="fs-4"> Responsive Design</span>
    
                    </div>
                    </div>
                  

                        </div>
                    </div>
   
   

    
    )
}
export default Skills