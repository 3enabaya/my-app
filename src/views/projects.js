import React from "react";
import './projects.css';
import emoji3 from '../3.png';
import emoji4 from '../4.png';
import emoji1 from '../1_25_2024 6_37_27 5.png';
import emoji5 from '../1_25_2024 6_52_47 PM.png';



const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="container">
            <div className="row  mt-5 ">
            <div className="col-2  mx-5">
            <h2 className=" mtitle fs-3 mx-2"> Projects</h2></div>
        </div>
        <div className="row pro m-5 justify-content-start ">
        <div className="col-lg-6 col-md-6  col-9 mt-2 mb-2">
        <h2 className="first  pb-3">First Project</h2>
        <h2 className="text-info">Emoji quiz</h2>
        <h5> Emoji quiz Is A Game In Which You Guess Words Using Emojis </h5>
        <h5 className="fw-bold"> Here I have used </h5>
                        <span className="orange text-white">JavaScript </span>
                        <span className="orange text-white">HTML5 </span>
                        <span className="orange text-white">CSS3</span>
                        <span className="orange text-white">jSON </span>
                        <span className="orange text-white">Bootstrap5 </span>
                        <div className="view"> <a href="https://3enabaya.github.io/emojiquiz/" className="btn btn-info m-2 fw-bold px-5">View It Here</a> </div>
                        </div>
                        <div className="col-6">
        <span><img className="w-100" src={emoji3} /> </span>
        </div> 
        </div>
                
        <div className="row pro  m-5 pb-5 ">
        <div className="col-lg-6 col-md-6  col-9 mt-2 mb-2">
        <h2 className="second op fw-bold pt-5 pb-3">Second Project</h2>
        <h2 className="text-info ">To Do List</h2>
        <h5> I've Created The To-Do List Web Application To Help Me Accomplish My Daily Goals</h5>
        <h5 className="fw-bold"> Here I Have Used </h5>
                        <span className="green text-white">JavaScript </span>
                        <span className="green text-white">HTML5 </span>
                        <span className="green text-white">Sass</span>
                        <div className="view"> <a href="https://3enabaya.github.io/todolist/" className="btn btn-info  m-2 fw-bold px-5">View It Here</a> </div>
                        </div>

             <div className="col-6">
        <span><img className="w-100" src={emoji4} /> </span>
        </div> 
        </div>
                   
            
                
        <div className="row pro m-5 pt-5 ">
        <div className="col-lg-6 col-md-6  col-9  mt-2 mb-2">
        <h2 className="forth pt-5 fw-bold pb-3">Third Project</h2>
        <h2 className="text-info ">Elzero Webschool</h2>
        <h5> This Project Has Helped Me A Lot In Understanding CSS, Discovering Its Features And Understanding What A Responsive Design Is.  </h5>
        
        <h5 className="fw-bold"> Here I have used </h5>
                        <span className="purple text-white">JavaScript </span>
                        <span className="purple text-white">HTML5 </span>
                        <span className="purple text-white">CSS</span>
                        <div className="view"> <a href="https://3enabaya.github.io/Elzero/" className="btn btn-info  m-2 fw-bold px-5">View It Here</a> </div>
                        </div>
             <div className="col-6">
        <span><img className="w-100" src={emoji5} /> </span>
        </div> 
        </div>
                   
        </div>
        </div>
    )
}
export default Projects;
