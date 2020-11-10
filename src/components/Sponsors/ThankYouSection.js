import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Hands from '../Sponsors/ThankYouHands'
import Stars from '../Sponsors/ThankYouStars'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '1200px',
        marginTop: '78px',
        marginLeft: '215px'
        // margin: 'auto',
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
        color: '#000000'
    },
}));

export default function ThankYou() {

    const classes = useStyles();

    return (

        <div className={classes.container}>

            <svg width="1056" height="344" viewBox="0 0 1056 344" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M692.553 273.274C834.991 166.805 1067.12 185.273 1055.09 95.7201C1044.7 18.4531 382.414 -27.4718 259.28 20.5836C144.282 65.4637 82.5093 82.6956 20.5314 184.331C-35.1913 275.709 37.0658 300.949 99.3671 322.635C175.328 349.075 566.737 367.318 692.553 273.274Z" fill="#E8D1FF" fill-opacity="0.4"/>
            
                <foreignObject x='434' y='17' width="140" height="44" className={classes.headerText}> 
                    Thank you!
                </foreignObject>

                <foreignObject x='168' y='76' className={classes.bodyText} width="672" height="70">
                    We are exceedingly grateful to our sponsors, who allow us to continue to offer life-changing tech mentoring through our program.
                </foreignObject>

                <foreignObject x='168' y='155' className={classes.bodyText} width="719" height="120">
                    Our work would not have been possible without the overwhelming positive and creative community of Civictech Toronto. Thank you to the amazing volunteers, sponsors, and community partners who help make this space a reality so projects like ours can begin.
                </foreignObject>
            
            </svg>

            <Hands />
            <Stars />

        </div>

    )
};