import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

import Hands from '../Sponsors/ThankYouHands'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '1200px',
        margin: 'auto',
    },
    blobStyle: {
        position: 'relative',
    },
    headerText: {
        fontFamily: 'Josefin Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '28px',
        lineHeight: '44px',
        display: 'flex',
        alignItems: 'center',
        color: '#000000',
    },
    bodyText: {
        fontFamily: 'poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '31px',
        display: 'flex',
        alignItems: 'center',
        color: '#404040'
    },
}));

export default function ThankYou() {

    const classes = useStyles();

    return (

        <div className={classes.container}>

            <svg className={classes.blobStyle} viewBox="0 0 1113 1023" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M734.553 646.274C876.991 539.805 1109.12 558.273 1097.09 468.72C1086.7 391.453 424.413 345.528 301.28 393.584C186.282 438.464 124.509 455.695 62.5313 557.331C6.80869 648.709 79.0658 673.949 141.367 695.635C217.328 722.075 608.737 740.318 734.553 646.274Z" fill="#E8D1FF" fill-opacity="0.4"/>
            
                <foreignObject x="450" y="400" width="140" height="44" className={classes.headerText}> 
                    Thank You!
                </foreignObject>

                <foreignObject className={classes.bodyText} x="250" y="450" width="672" height="180">
                    We are exceedingly grateful to our sponsors, who allow us to continue to offer life-changing tech mentoring through our program.
                </foreignObject>

                <foreignObject className={classes.bodyText} x="250" y="525" width="600" height="180">
                    Our work would not have been possible without the overwhelming positive and creative community of Civictech Toronto. Thank you to the amazing volunteers, sponsors, and community partners who help make this space a reality so projects like ours can begin.
                </foreignObject>

            </svg>

            <Hands />

        </div>

    )
};