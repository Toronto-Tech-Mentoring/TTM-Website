import React from "react";
import { makeStyles } from '@material-ui/core';const useStyles = makeStyles((theme) => ({

     container: {
        height: 'calc(-3.4vw + 830px)',
        width: '100%',
        maxHeight: '1144px',
        backgroundColor:'#4529AE',
        [theme.breakpoints.down('sm')]: {
            height: 'calc(-83.33vw + 1444px)',
        },
    }, 
}));


export default function TheBottomLineSection() {
    const classes = useStyles();
    const title = "Donate Today"
    const content = "Help us continue to give young people a chance to access tech skills and change their lives."
    const buttonText = "Donate"

    return (
        <div className={classes.container}>
        </div>
    )
};