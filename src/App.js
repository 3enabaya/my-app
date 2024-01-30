import './App.css';
import Nav from './Nav';
import Contact from './views/contact';
import Footer from './Footer'
import About from './views/Aboutme';
import React, { Component } from 'react';
import Intro from './intro';
import Projects from '../src/views/projects';
import Skills from './Skills';
import "./index.css"
 class App  extends Component {
    render(){
        return (
            <div>
            <Nav />
            <Intro />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer/>
                </div>
        )
    }
}
export default App;