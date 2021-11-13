import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';


const STYLES = ['btn--blue', 'btn--red'];

const SIZES = ['btn--medium'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return( 
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
            onClick={onClick} 
            type={type}>
                {children}
            </button> 
    )
};