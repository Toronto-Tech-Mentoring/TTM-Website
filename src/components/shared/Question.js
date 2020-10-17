import React from 'react';

import { useStyles } from './styles/QuestionStyle'

export default function QuestionText(props){
    const classes = useStyles();

    return (
        <p className={classes.question}>{props.question}</p>
    )
}