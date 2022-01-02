import React from 'react'
import {Element} from'react-scroll';
import './Academic.css'

const Academic = () => {
    return (
        <Element className="Academic_container" name="academic">
                <div className="Academic_head">
                    <h2>Academic</h2>
                </div>
                <div className="Academic_content1">
                    <i class="fa fa-graduation-cap"></i>
                    <p>
                        BCA (University)<br/>
                        Madras University DistanceEducation
                    </p>
                    <p className="align_item">
                        6.7% <br/>
                        (2018-2020)
                    </p>
                </div >
                <div className="Academic_content2">
                    <i class="fa fa-graduation-cap"></i>
                    <p>
                        Diploma in Computer Engineering(DCT)<br/>
                        Murugappa Polytechnic college. 
                    </p>
                    <p className="align_item">
                        89%<br/>
                        (2014-2017)
                    </p>
                </div>
                
            

        </Element>
    )
}

export default Academic
