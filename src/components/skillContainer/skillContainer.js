import React from 'react'
import {Element} from'react-scroll';
import skillimage from '../../assets/skill.jpg'
import LinerProgress from "@material-ui/core/LinearProgress";
import "./skillContainer.css";

const skillContainer = () => {
    return (
        <Element className="skillcontainer" name="skills">
            <div className="skillcontainer_image">
                <img src={skillimage} alt="missing" />
            </div>
            <div className="skillcontainer_text">
                <h2>SKILLSET </h2>
                <div className="skillcontainer_skillset">
                    <h5>Proof Reading</h5>
                    <div className="skillcontainer_silder skillcontainer_slider1">
                        <LinerProgress variant="determinate" value={95} />
                    </div>
                </div>
                <div className="skillcontainer_skillset">
                    <h5>C Program</h5>
                    <div className="skillcontainer_silder skillcontainer_slider2">
                        <LinerProgress variant="determinate" value={50} />
                    </div>
                </div>
                <div className="skillcontainer_skillset">
                    <h5>React</h5>
                    <div className="skillcontainer_silder skillcontainer_slider3">
                        <LinerProgress variant="determinate" value={70} />
                    </div>
                </div>
                <div className="skillcontainer_skillset">
                    <h5>Css & Bootstap</h5>
                    <div className="skillcontainer_silder skillcontainer_slider4">
                        <LinerProgress variant="determinate" value={60} />
                    </div>
                </div>

            </div>

        </Element>
    )
}

export default skillContainer
