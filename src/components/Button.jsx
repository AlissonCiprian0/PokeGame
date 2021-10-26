import React from 'react';
import "./Button.css";

const Button = ({ handleButtonClick, children, color }) => {
    return (
        <button
            className="buttonNext"
            onClick={handleButtonClick}
            style={{backgroundColor: color}}
            >
            { children }
        </button>
    );
}
 
export default Button;