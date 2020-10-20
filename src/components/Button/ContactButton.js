import React from 'react';

import { useStyles } from './ContactButtonStyle'


export default function ContactButton(props){
    const classes = useStyles();

    return(
        <button className={classes.contactButton}>{props.buttonText}</button>
    )
}