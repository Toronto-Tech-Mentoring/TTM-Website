import React from "react";
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

import { useStyles } from '../../shared/styles/BottomLineVitalRole';
import People from '../../images/about-us/bottom-line/people.svg';
import TitleRight from '../../images/about-us/bottom-line/titleRight.svg';
import TitleLeft from '../../images/about-us/bottom-line/titleLeft.svg';
import ContentLeft from '../../images/about-us/bottom-line/contentLeft.svg';
import ContentRight from '../../images/about-us/bottom-line/contentRight.svg';


export default function TheBottomLineSection() {
    const classes = useStyles();

    return (
        <Grid container
            className={classes.root}
            justify="center"
            alignItems="center">
            <Grid item xs={12} md={6}>
                <div className={classes.textBox}>
                    <div>
                        <TitleLeft className={classes.hideTitleStyle} alt="title decoration left"/>
                        <span className={classes.title}>The bottom line</span>
                        <TitleRight className={classes.hideTitleStyle} alt="title decoration right"/>
                    </div>
                    <ContentRight className={classes.contentRight} alt="content decoration right"/>
                    <span className={classes.contents}>If you’re facing housing precarity in Toronto and want to learn 'tech' skills, we want to help you. Free of charge. </span>
                    <ContentLeft className={classes.contentLeft} alt="content decoration left"/>
                    <Hidden smDown>
                        <p className={classes.question}>Not sure if you qualify?</p>
                        <button className={classes.contactButton}>Contact us</button>
                    </Hidden>
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <People className={classes.people} alt="people" />
                <Hidden mdUp>
                    <p className={classes.question}>Not sure if you qualify?</p>
                    <button className={classes.contactButton}>Contact us</button>
                </Hidden>
            </Grid>
        </Grid>
    )
};

