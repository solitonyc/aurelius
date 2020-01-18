import React, { Component } from 'react';
import './about.css';
import mainBgImage from './images-sections/bg-img3.jpg';

export default class Page3 extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div>
                <div className="main_page_section" id="about">
                <div style={style} className='main_section_background'>
                    <div className="main_content_container">  
                        <div className="main_headline">About Aurelius</div>
                        <div className="main_paragraph_01">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
            
                    </div>   
                </div>             
            </div>
            </div>
        )
    }
}
