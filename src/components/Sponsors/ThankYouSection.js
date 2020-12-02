import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

import SVGLoad from '../SVGLoad/SVG'
import Hands from '../../images/sponsors/thankyou/hands.svg'
import Stars from '../../images/sponsors/thankyou/stars.svg'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '648px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('769')]: {
            height: '614px'
        },
        [theme.breakpoints.down('426')]: {
            height: '627px'
        },
    },
    starsStyle: {
        position: 'relative',
        marginTop: 'calc(2vw - 100px)',
        [theme.breakpoints.down('1300')]: {
            marginTop: 'calc(5vw - 150px)'
        },
        [theme.breakpoints.down('1025')]: {
            marginTop: 'calc(10vw - 200px)'
        },
        [theme.breakpoints.down('769')]: {
            marginTop: 'calc(6vw - 200px)'
        },
        [theme.breakpoints.down('700')]: {
            marginTop: 'calc(10vw - 300px)'
        },
        [theme.breakpoints.down('426')]: {
            marginTop: 'calc(10vw - 185px)',
            marginRight: 'calc(2vw - 50px)'
        },
    },
    blobStyle: {
        position: 'absolute',
        width:"1056px", 
        height:"344px",
        marginTop: 'calc(2vw - 150px)',
        [theme.breakpoints.down('1300')]: {
            marginTop: 'calc(2vw - 150px)'
        },
        [theme.breakpoints.down('1025')]: {
            marginTop: 'calc(2vw - 150px)'
        },
        [theme.breakpoints.down('550')]: {
            marginTop: 'calc(2vw - 100px)',
        },
        [theme.breakpoints.down('426')]: {
            visibility: 'hidden'
        },
    },
    mobileBlobStyle: {
        visibility: 'hidden',
        [theme.breakpoints.down('426')]: {
            marginTop: 'calc(2vw - 180px)',
            visibility: 'visible',
            width: '100%',
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
        [theme.breakpoints.down('426')]: {
            fontSize: '20px',
            lineHeight: '32px'
        },
    },
    bodyText: {
        fontFamily: 'poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '31px',
        display: 'flex',
        align: 'center',
        color: '#000000',
        [theme.breakpoints.down('426')]: {
            position: 'absolute',
            fontSize: '14px',
            lineHeight: '24px'
        },
    },
    handsStyle: {
        position: 'absolute',
        right: 'calc(10vw + 50px)',
        marginTop: 'calc(10vw + 150px)',
        [theme.breakpoints.down('1300')]: {
            marginTop: 'calc(20vw + 50px)',
            right: 'calc(2vw + 10px)'
        },
        [theme.breakpoints.down('1025')]: {
            marginTop: 'calc(25vw + 50px)',
            marginRight: 'calc(8vw - 100px)'
        },
        [theme.breakpoints.down('769')]: {
            marginTop: 'calc(40vw - 100px)',
            marginRight: 'calc(20vw - 100px)'
        },
        [theme.breakpoints.down('426')]: {
            marginTop: 'calc(40vw + 200px) ',
            left: 'calc(20vw + 50px)',
        },
    },
}));

export default function ThankYou() {

    const classes = useStyles();

    return (

        <Grid className={classes.container} alignItems="center" justify="center">

            <Grid item xs={12} sm={6} lg={8} xl={12} className={classes.starsStyle}>
                <SVGLoad image={Stars} alt="sponsorStars" />
            </Grid>

            <Grid item xs={5} sm={4} lg={8} xl={12} className={classes.handsStyle}>
                <SVGLoad image={Hands} alt="sponsorStars" />
            </Grid>

            <Grid item xs={12} sm={12} lg={8} xl={10} className={classes.blobStyle}>

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

                <svg className={classes.mobileBlobStyle} height="360" viewBox="0 0 360 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M281.222 146.894C358.047 89.4647 483.251 99.4261 476.757 51.1214C471.154 9.44378 113.946 -15.328 47.5323 10.593C-14.4929 34.8012 -47.8104 44.096 -81.2387 98.9181C-111.293 148.207 -72.3207 161.822 -38.7179 173.519C2.25214 187.78 213.362 197.621 281.222 146.894Z" fill="#E8D1FF" fill-opacity="0.4"/>
                
                    <foreignObject x='120' y='-60' width="140" height="44" className={classes.headerText}> 
                        Thank you!
                    </foreignObject>

                    <foreignObject x='20' y='-15' className={classes.bodyText} width="330" height="66">
                        We are exceedingly grateful to our sponsors, who allow us to continue to offer life-changing tech mentoring through our program.
                    </foreignObject>

                    <foreignObject x='20' y='65' className={classes.bodyText} width="330" height="300">
                        Our work would not have been possible without the overwhelming positive and creative community of Civictech Toronto. Thank you to the amazing volunteers, sponsors, and community partners who help make this space a reality so projects like ours can begin.
                    </foreignObject>
                
                </svg>

            </Grid>

        </Grid>
        
    )
};