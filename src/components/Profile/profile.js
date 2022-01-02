import React from 'react';
import {Element} from'react-scroll';
import Typical from 'react-typical';
import "./profile.css" 

function profile() {
    return (
        <Element className="profile" id="profile">
                <h1 className="pro_head">My Profile</h1>
                <h4 className="pro_line">who i am</h4>
                <div className="profile_photo">
                </div>
                <div className="pro_content">
                    <h4>I'm shakila and i am a
                    <div class="pro_content_position">
                    <Typical
                            loop={Infinity}
                            steps={[
                                "Proof reader ",
                                1000,
                                "Technical copyeditor ",
                                1000,
                                "Web developer ",
                                1000,
                            ]}
                            />
                    </div>
                    
                    </h4>
                    
                    <p>Exeter Premedia Services with <b>3 years</b> of rich combined expertise in Technical 
                    copyediting, scaling new heights of success with key focus on profitability & optimal 
                    utilization of resources. Extensive experience in performing typesetting to ensure that written text 
                    is concise, consistent, grammatically & factually correct
                    and also ensure that each sentence is easy to read and that concepts expressed are in a 
                    logical, sequential manner</p>
                    <a href="Resume.pdf" download='Shakila Resume.pdf'>
                    <button className="topContent_downloadButton">Download CV</button>
                    </a>
                </div> 
                

                
        </Element>
        
    )
}

export default profile
