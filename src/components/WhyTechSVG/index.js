import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import ComputerSVG from './ComputerSVG';
import WhyTech from './WhyTech';
import HandsSVG from './HandsSVG';
import ValuesDriven from './ValuesDriven';


export default function WhyTechAndValuesDrivenSection() {
    return (
        <Grid container justify="center" alignItems="center">
            <Grid item lg={1} xl={1}></Grid>
            <Grid item xs={12} md={6} lg={7} xl={7}>
                <WhyTech />
            </Grid>
            <Hidden smUp>
                <Grid item xs={'auto'} sm={3}></Grid>
            </Hidden>
            <Grid item xs={5} sm={6} md={4} lg={3} xl={3}>
                <ComputerSVG />
            </Grid> 
            <Hidden smUp>
                <Grid item xs={'auto'} sm={3}></Grid>
            </Hidden>
            <Grid item lg={1} xl={1}></Grid>
            <Grid item lg={1} xl={1}></Grid>
            <Hidden smDown>
                <Grid item xs={12} md={4} lg={3} xl={3}>
                    <HandsSVG />
                </Grid>
            </Hidden>
            <Grid item xs={12} md={6} lg={7} xl={7}>
                <ValuesDriven />
            </Grid>
            <Hidden mdUp>
                <Grid item xs={2} sm='auto'></Grid>
                <Grid item xs={4} sm={5}>
                    <HandsSVG />
                </Grid>
                <Grid item xs={2} sm='auto'></Grid>
            </Hidden>
            <Grid item lg={1} xl={1}></Grid>
        </Grid>
    )
}