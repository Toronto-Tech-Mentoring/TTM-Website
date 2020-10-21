import React from 'react';

import { useStyles } from './TextBoxStyle'

export default function TextBox(props){
    const classes = useStyles();

    return(
        <div className={classes.textBox} style={props.style}>
            {props.children}
        </div>
    )
}