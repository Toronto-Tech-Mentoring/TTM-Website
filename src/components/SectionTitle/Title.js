import React from "react";
import Hidden from '@material-ui/core/Hidden';

import { useStyles } from './TitleStyle.js';
import TitleRight from '../../images/about-us/bottom-line/titleRight.svg';
import TitleLeft from '../../images/about-us/bottom-line/titleLeft.svg';

export default function Title(props){
    const classes = useStyles();

    return(
        <div style={props.style}>
            <Hidden only={props.hideCheetohs}>
                <TitleLeft className={classes.title} alt="title decoration left"/>
            </Hidden>
            <span className={classes.title}  >{props.title}</span>
            <Hidden only={props.hideCheetohs}>
                <TitleRight className={classes.title} alt="title decoration right"/>
            </Hidden>
        </div>
    )
}