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
        imageText: {
            
        fontFamily: props.imageTextStyle.fontFamily,
        fontWeight: props.imageTextStyle.fontWeight,
        fontSize: props.imageTextStyle.fontSize,
        color: props.imageTextStyle.color,
        lineHeight: props.imageTextStyle.lineHeight,
        [theme.breakpoints.down('sm')]: props.imageTextStyle.sm,
        [theme.breakpoints.down('360')]:props.imageTextStyle.xs
        }
    }));
    const classes = useStyles();
    return (
        
        <div className={classes.cardContainer}>
            <img src={props.cardObject.image} className={classes.image}  alt={ props.cardObject.text} />
            <div className={classes.imageText}> {props.cardObject.text} </div>
        </div>   
    )
    };