import React from 'react'
import {Element} from 'react-scroll'
import Topcontent from '../Topcontent/topcontent'
import './topcontainer.css'

const topcontainer = () => {
    return (
        <Element name="about" className="topcontainer">
            <Topcontent/>
        </Element>
    )
}

export default topcontainer
