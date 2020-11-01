import React from "react";

import { useStyles } from './TitleStyle.js';

export default function Title(props){
    const classes = useStyles();

    return(
        <div style={props.style}>
            <p className={classes.title}  >{props.title}</p>
        </div>
    )
}