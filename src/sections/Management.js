import React, { Component } from 'react';
import './management.css';
import mainBgImage from './images-sections/bg-img4.jpg';
import philBoxImg01 from './images-sections/headshot1.jpg';
import philBoxImg02 from './images-sections/headshot2.jpg';

export default class Page4 extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div>
                <div className="mgmt_page_section" id="management">
                <div style={style} className='mgmt_section_background'>
                    <div className="mgmt_content_container">  
                        <div className="mgmt_headline">Management</div>
                        <div className="mgmt_paragraph_01">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div className="mgmt_columns_container">
                        <div className='mgmt_column_box'>
                            <img className='mgmt_box_image' alt='' src={philBoxImg01} />
                            <div className="mgmt_column_box_title">John Doe, CEO</div>                            
                            <p className='mgmt_paragraph_box'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat. 
                            </p>	                            
                        </div>                    
                        <div className="mgmt_column_box">
                            <img className='mgmt_box_image' alt='' src={philBoxImg02} />
                            <div className="mgmt_column_box_title">Jane Doe, COO</div>
                            <p className='mgmt_paragraph_box'>
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
