import React from 'react';
import { NavLink } from 'react-router-dom';
import Resume from './Resume/Resume.pdf';
//import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
            <nav>  
                <div class="discountBanner">
                    Believe in yourself and you will be unstoppable
                </div>
                <ul>
                    <li><NavLink exact ={true} to ="/">Home</NavLink></li>
                    <li><NavLink exact ={true} to ="/Products">Projects</NavLink></li>
                    <li><NavLink exact ={true} to ="/ContactUs">Contact Me</NavLink></li>
                    <li><a href={Resume} target="_blank" rel="noreferrer">Resume</a></li>
                    
                </ul>
            </nav>
        </>
    );
}

export default Navbar;