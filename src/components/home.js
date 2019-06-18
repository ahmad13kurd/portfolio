import React, { Component } from 'react';
import { Link } from "react-scroll";

import "bootstrap/dist/css/bootstrap.min.css";

import CardBody from "./cardBody";
import "../CSS/cardBody.css";

import Contact from "./contact";
import "../CSS/contact.css";

class Home extends Component {
   
    render() { 

        return (
            <div id="home">
              <img src={require("../images/me4.jpg")} alt="alt" className="myImg"/>
              <h1 className="myName">AHMAD MALLA</h1>
              <p className="p1">
                Hello! my name is Ahmad. My goal in life is to always
                love what I'm doing.This includes my work and my future
                 - I want to love it all. I'm currently visiting a
                programming course in Düsseldorf city.I'm discovering
                the programming world.I'm looking for practical
                instruction as an intership.
              </p>
              <ul className="actions">
                    <i><Link to='works' className="fas fa-arrow-circle-down fa-4x arrow" spy={true} smooth={true} duration={1000}></Link></i>
              </ul>
                <CardBody/>
                <Contact/>
            </div>
        );
    }
}
 
export default Home;