import React, {Component} from 'react';
import classes from './MyButton.module.css';

export default function MyButton(props) {
    const onClick = (e) => {
        props.onClick(e);
    };

    return (
        <button onClick={onClick} className={classes.myBtn}>
            {props.children}
        </button>
    );
};
