import React from "react";
import { makeStyles } from '@material-ui/core';


export default function ImageCard(props) {
    console.log(props)
    const useStyles = makeStyles(
        props.cardObject.style,
);
    const classes = useStyles();
    return (
        <div className={classes.cardContainer}>
            <img src={props.cardObject.image} className={classes.image}  alt={ props.cardObject.text} />
            <div> {props.cardObject.text} </div>
        </div>   
    )
    };