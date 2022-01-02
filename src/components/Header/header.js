import React from 'react';
import {Link} from 'react-scroll';
import './header.css';

const header = () => { 
    return (
        <div className="header">
            <div className="header_left">
                <h2>
                    Develop<span>er</span> 
                </h2>
            </div>
            <div className="header_right">
                <Link to="about" smooth={true} duration={500}>
                    <h4>
                        About Me
                    </h4>
                </Link>
                <Link to="profile" smooth={true} duration={500}>
                    <h4>
                        Profile
                    </h4>
                </Link>
                <Link to="skills" smooth={true} duration={500}>
                    <h4>
                        Skills
                    </h4>
                </Link>
                <Link to="experence" smooth={true} duration={500}>
                    <h4>
                        Experence
                    </h4>
                </Link>
                <Link to="t-skill" smooth={true} duration={500}>
                    <h4>
                        Technical skill
                    </h4>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                    <h4>
                        Contact
                    </h4>
                </Link>
                <h4 className="header_rightButton">Join with me</h4>
            </div>
        </div>
    )
}

export default header
