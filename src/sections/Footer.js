import React, { Component } from 'react';
import {Link, animateScroll as scroll } from "react-scroll";
import './footer.css';

export default class Footer extends Component {
    scrollToTop = () => {
        scroll.scrollToTop(); 
    };
    render() {        
        return (
            <div className="footer_section" id="footer">
                <div className="back_to_top">
                    <Link onClick={this.scrollToTop} className="back_to_top">MAIN</Link>
                </div>
                <div className='footer_content'>Designed by XegoTech<br />Copyright &copy; 20120 Aurelius LLC<br />All Rights Reserved</div> 
            </div>
        )
    }
}
