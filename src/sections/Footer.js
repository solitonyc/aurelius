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
                <div className='footer_content'>Copyright &copy; 2020 Aurelius LLC<br />All Rights Reserved<br />Designed by XegoTech<br /></div> 
            </div>
        )
    }
}
