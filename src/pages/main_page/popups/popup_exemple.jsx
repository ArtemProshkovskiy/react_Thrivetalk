import React from 'react';
import './popup_example.css'
import {usePopup} from "../header/header_components/menu";

function PopupExemple(props) {
    return (
            <div className={`popup ${props.isAnimating ? 'hide' : ''}`}>
                <div className='popup_inner'>
                    <h2>{props.title}</h2>
                    <p>Here is the contact form or any content you want to display.</p>
                    <button onClick={props.togglePopup}>Close</button>
                </div>
            </div>
    )
}

export default PopupExemple;