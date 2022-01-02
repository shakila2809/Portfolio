import React from 'react'
import Typical from 'react-typical';
import './topcontent.css'

const topcontent = () => {
    return (
        <div className="topContent">
            
            <div className="topContent_container"> 
                <h1>Ms. Shakila Sekar</h1>
                <div>And i'm a</div> 
                <h4>
                
                            {" "}
                            
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
                    </h4>
                <button className="topContent_workButton">Hire me</button>
            </div>
            
        </div>
    )
}

export default topcontent
