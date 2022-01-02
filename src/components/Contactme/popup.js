import React from 'react'
import "./popup.css"

export default function popup({msg,resetfrom}) {
    return (
        <div className="popup">
            <div className="popup_content">
                <span className="popmessage">{msg}</span>
                <span className="close" onClick = {resetfrom}>x</span>
            </div>
        </div>
    )
}
