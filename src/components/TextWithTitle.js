import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    divStyle: {
        textAlign: 'center',
        width: '684px',
        margin: '0 auto',
        [theme.breakpoints.down('md')]: {
            width: '80%',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '10px 15px',
        },
    },
    title: {
        fontFamily: 'Josefin Sans',
        fontSize: '28px',
        color: 'white'
    },
    contents: {
        fontFamily: 'Poppins',
        fontSize: '18px',
        color: 'white',
        marginTop: '15px',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            marginTop: '8px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            marginTop: '8px',
        },
    }
}));

export default function TextWithTitle() {
    const classes = useStyles();

    return (
        <div className={classes.divStyle}>
            <p className={classes.title}>How are we different?</p>
            <p className={classes.contents}>The Accelerator Project has a unique approach to education and upskilling. In our core program, we pair young people with tech mentors in the Toronto area to empower them to reach their own goals.</p>
        </div>
    );
}