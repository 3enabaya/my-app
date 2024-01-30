import React from "react";
import './intro.css';
import coffee from "./R.png";
import Social from "./social";
const Intro = () => {
    return (
        <div className="intro position-relative mt-5">
            <div className="container">
                <div className="row justify-content-center m-auto pt-5 pb-5 ">
                    <div className=" col-md-10 col-sm-12  m-auto pt-5 pb-5 " >
                        <h1 className=" display-1 bold">Hello I'm Sarrah , </h1>
                        <h1 className="display-1 "> A Front-End Developer</h1>
                        <h3 className=" text-cream

">I Love Exploring And Teaching Myself New Things And I Love Coffee
                            <img className="coffee" src={coffee} />
                        
                             <Social/>  

</h3>
                    </div>
                </div>
          
            </div></div>
    )
    
}

export default Intro