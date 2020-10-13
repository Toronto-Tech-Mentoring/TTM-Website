import React from "react";
import Grid from '@material-ui/core/Grid';

import { useStyles } from '../../shared/styles/BottomLineVitalRole';
import DataAnalyse from '../../images/partners/vital-role/data_analyse.svg';
import TitleRight from '../../images/about-us/bottom-line/titleRight.svg';
import TitleLeft from '../../images/about-us/bottom-line/titleLeft.svg';


export default function VitalRoleSection() {
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
                        <span className={classes.title}>The Vital role out partners play:</span>
                        <TitleRight className={classes.hideTitleStyle} alt="title decoration right"/>
                    </div>
                    <span className={classes.contents}>A learning environment requires safety, and stability.
Each client that comes through our program has faced, and often still is facing, significant adversity. Our delivery partners provide a safe and stable environment, so that our clients are able to focus on learning a new skill, and planning for a better future.

Currently, some of the wrap-around supports that our delivery partners provide are shelter & transitional housing, access to transport, and health and well-being support. </span>
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <DataAnalyse className={classes.dataAnalyse} alt="data_analyse" />
            </Grid>
        </Grid>
    )
};

