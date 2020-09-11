import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    divStyle:{
        textAlign: 'center',
        width:'684px',
    },
    title: {
        fontFamily: 'Josefin Sans',
        fontSize: '28px',
        color: 'white'
    },
    contents: {
        fontFamily: 'Poppins',
        fontSize: '18px',
        color: 'white'
    }
});

export default function TextWithTitle() {
    const classes = useStyles();

    return (
        <div className={classes.divStyle}>
            <p className={classes.title}>How are we different?</p>
            <p className={classes.contents}>The Accelerator Project has a unique approach to education and upskilling. In our core program, we pair young people with tech mentors in the Toronto area to empower them to reach their own goals.</p>
        </div>
    );
}