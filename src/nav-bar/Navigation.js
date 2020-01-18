import React, { Component } from 'react';
import {Link, animateScroll as scroll } from "react-scroll";
import './navigation.css';

export default class Navigation extends Component {
    state = {};
    scrollToTop = () => {
        scroll.scrollToTop(); 
    };
    render() {
        return (
            <div className="nav-bar">
                {/* <img src={logo} 
                    alt="Logo" 
                    className='nav_logo'
                    onClick={this.scrollToTop}
                    /> */}
                <Link
                    className="nav-links"
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                    >Main</Link>
                
                <Link
                    className="nav-links"
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >Services</Link>
                
                <Link
                    className="nav-links"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >About</Link>
                
                <Link
                    className="nav-links"
                    activeClass="active"
                    to="management"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >Management</Link>

                <Link
                    className="nav-links"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >Contact</Link>


            


                
             </div>   
                
                
               
        )
    }
}
