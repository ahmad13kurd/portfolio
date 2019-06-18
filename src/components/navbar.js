import React, { Component } from 'react';
import {Link} from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
class NaveBar extends Component {

    
    render() {  
        return (
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="navbar-collapse collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="home" spy={true} smooth={true} duration={1000}>HOME</Link>
                            </li>
                            <li className="nav-item ">
                            <Link activeClass="active" className="nav-link" to="works" spy={true} smooth={true} duration={1000}>WORKS</Link>
                            </li>
                            <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="contact" spy={true} smooth={true} duration={1000}>CONTACT</Link>
                            </li>
                        </ul>
                        <ul className="nav icons">
                            <li><a href="#" className="nav-link fab fa-twitter" /></li>
                            <li><a href="#" className="nav-link fas fa-envelope" /></li>
                            <li><a href="#" className="nav-link fab fa-linkedin-in" /></li>
                            <li><a href="#" className="nav-link fab fa-github" /></li>
                        </ul>
                    </div>
                </nav>
        );
    }
}
 
export default NaveBar;



