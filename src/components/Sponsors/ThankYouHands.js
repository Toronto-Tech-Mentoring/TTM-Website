import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import HandsSVG from '../../images/sponsors/thankyou/hands.svg'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '1200px',
        margin: 'auto',
    },
    image: {
        position: 'relative',
},
  
}));

export default function Hands() {
    const classes = useStyles();
    return (
        <div className={classes.container}> 
            <img src={HandsSVG} className = { classes.image} alt="Hands icons" />
        </div>
    )
};