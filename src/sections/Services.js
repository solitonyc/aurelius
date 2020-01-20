import React, { Component } from 'react';
import './services.css';
import mainBgImage from './images-sections/bg-img2.jpg';
import philBoxImg01 from './images-sections/bg-img4.jpg';
import philBoxImg02 from './images-sections/bg-img8.jpg';
import philBoxImg03 from './images-sections/bg-img5.jpg';
import philBoxImg04 from './images-sections/bg-img6.jpg';

export default class Page2 extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div>
                <div className="services_page_section" id="services">
                <div style={style} className='services_section_background'>
                    <div className="services_content_container"> 
                    <div className="services_headline">Our Services</div>
                        <div className="services_paragraph_01">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    <div className="services_columns_container">
                        <div className='services_column_box'>
                            <img className='services_box_image' alt='' src={philBoxImg01} />
                            <div className="services_column_box_title">Service One</div>                            
                            <p className='services_paragraph_box'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat. 
                            </p>	                            
                        </div>                    
                        <div className="services_column_box">
                            <img className='services_box_image' alt='' src={philBoxImg02} />
                            <div className="services_column_box_title">Service Two</div>
                            <p className='services_paragraph_box'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat. 
                            </p>
                        </div>
                        <div className="services_column_box">
                            <img className='services_box_image' alt='' src={philBoxImg03} />
                            <div className="services_column_box_title">Service Three</div>
                            <p className='services_paragraph_box'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat. 
                            </p>
                        </div>
                        <div className="services_column_box">
                            <img className='services_box_image' alt='' src={philBoxImg04} />
                            <div className="services_column_box_title">Service Four</div>
                            <p className='services_paragraph_box'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat. 
                            </p>
                        </div>
                    </div>             
                       
            
                    </div>   
                </div>             
            </div>
            </div>
        )
    }
}
