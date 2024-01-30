import React, { Component } from "react";
import './Nav.css';
import '/Users/sara/Downloads/myapp/src/bootstrap.min.css';
import '/Users/sara/Downloads/myapp/src/bootstrap/js/dist/offcanvas'
import '/Users/sara/Downloads/myapp/src/bootstrap/js/dist/dropdown'

const Nav =() =>{

  return (
    <div class="navbar navbar-expand-lg navbar-expand-md fixed-top ">
    <a class="navbar-brand fs-3 text-black mx-5"  href="#">Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas " tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li class="nav-item">
              <a class="nav-link fs-3 mx-3 text-black " href="#">Home</a>
            </li>
         
            <li class="nav-item">
              <a class="nav-link fs-3 mx-3 text-black" href="#About">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-3 mx-3 text-black " href="#skills">Skills</a>
            </li> 
            <li class="nav-item">
              <a class="nav-link fs-3 mx-3 text-black " href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-3 mx-3 text-black" href="#contact">Contact</a>
              </li>
          </ul>
    
        </div>
      </div>
    </div>

  )
}

export default Nav