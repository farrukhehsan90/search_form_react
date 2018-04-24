import React from 'react';
import classes from './Button.scss';

const button = (props) => {
    return (

        <button
            disabled={props.disabled}
            style={props.style}
            type={props.type}
            className={`${props.className} ${classes.Button}`}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default button;