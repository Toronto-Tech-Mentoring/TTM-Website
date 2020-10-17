import React from "react";
import Grid from '@material-ui/core/Grid';

import { useStyles } from './styles/GridContainerStyle';

export default function GridContainer(props) {
    const classes = useStyles();

    return(
        <Grid container
            className={classes.root}
            direction={props.direction}
            justify="center"
            alignItems="center">
            {props.children}
        </Grid>
    )
}
