import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import StarsSVG from '../../images/sponsors/thankyou/stars.svg'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '1200px',
        margin: 'auto',
    },
    image: {
        position: 'relative',
},
  
}));

export default function Stars() {
    const classes = useStyles();
    return (
        <div className={classes.container}> 
            <img src={StarsSVG} className = { classes.image} alt="Stars icon" />
        </div>
    )
};