import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

import SVGLoad from '../SVGLoad/SVG'
import Hands from '../../images/sponsors/thankyou/hands.svg'
import Stars from '../../images/sponsors/thankyou/stars.svg'

const useStyles = makeStyles((theme) => ({
    blobStyle: {
        marginTop: '78px',
        width:"1056px", 
        height:"344px", 
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            width:"849px", 
            height:"276px",
          },
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
    handsStyle: {
        // position: 'relative',
        [theme.breakpoints.down('xl')]: {
            margin: '-300px 0px 0px 700px',
            // marginTop: '89px',
            // backgroundColor: 'blue'
        },
        [theme.breakpoints.down('1000')]: {
            margin: '-300px 0px 0px 600px',
            width: "406", 
            height: "511"
            // marginTop: '89px',
            // backgroundColor: 'blue'
        },
        [theme.breakpoints.down('769')]: {
            margin: '-400px 0px 0px 500px',
            // marginTop: '89px',
            // backgroundColor: 'blue'
        },
    },
    starsStyle: {
        position: 'relative',
        width: "406", 
        height: "511",
        [theme.breakpoints.down('xl')]: {
            margin: '-435px 0px 0px 60px',
        },
        [theme.breakpoints.down('960')]: {
            margin: '-370px 0px 0px -50px',
            width: "361", 
            height: "454",
        },
        [theme.breakpoints.down('768')]: {
            width: "361", 
            height: "454",
            [theme.breakpoints.down('600')]: {
                margin: '-300px 0px 0px 60px',
            },
            [theme.breakpoints.down('426')]: {
                margin: '-320px 0px 0px 0px',
            }
        },
    }
}));

export default function ThankYou() {

    const classes = useStyles();

    return (

        <Grid container alignItems="center" justify="center">

            <Grid className={classes.blobStyle}>
                <svg viewBox="0 0 1056 344" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            </Grid>

            <Grid container alignItems="center" justify="center">
            
                <Grid className={classes.starsStyle}>
                    <SVGLoad image={Stars} alt="sponsorStars" />
                </Grid>

            </Grid>

            <Grid container alignItems="center" justify="center">
            
                <Grid className={classes.handsStyle}>
                    <SVGLoad image={Hands} alt="sponsorHands" />
                </Grid>

            </Grid>

        </Grid>

    )
};