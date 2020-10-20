import React from 'react';

import { useStyles } from './styles/ContactButtonStyle'


export default function ContactButton(props){
    const classes = useStyles();

    return(
        <button className={classes.contactButton}>{props.buttonText}</button>
    )
}