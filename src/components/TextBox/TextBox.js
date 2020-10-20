import React from 'react';

import { useStyles } from './TextBoxStyle'

export default function TextBox(props){
    const classes = useStyles();

    return(
        <div className={classes.textBox}>
            {props.children}
        </div>
    )
}