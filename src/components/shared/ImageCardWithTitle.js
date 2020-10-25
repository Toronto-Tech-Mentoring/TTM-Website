import React from "react";
import { makeStyles } from '@material-ui/core';


export default function ImageCard(props) {
    const useStyles = makeStyles((theme) => ({
        cardContainer: {
            width: props.cardObject.width,
            height: '100%',
        },
        image: {
            width: '95%',
            height: 'auto'
        },
        // imageText:props.cardObject.textStyle
    }));
    const classes = useStyles();
    return (
        
        <div className={classes.cardContainer}>
            <img src={props.cardObject.image} className={classes.image}  alt={ props.cardObject.text} />
            <div> {props.cardObject.text} </div>
        </div>   
    )
    };