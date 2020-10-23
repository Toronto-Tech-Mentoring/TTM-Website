import React from "react";
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#873FE2',
        borderRadius: '300px',
        width: 'calc(4vw + 122px)',
        minWidth: '116px',
        height: 'calc(1.5vw + 28px)',
        minHeight: '24px',
        fontSize: '18px',
        color: 'white',
        borderStyle: 'none',
        fontFamily: 'Poppins',

        '&:hover, &:focus': {
            background: '#ffff',
            borderStyle: 'solid',
            borderWidth: 'medium',
            borderColor: '#873fe2',
            color: '#873fe2'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            width: '120px',
        },
    },


}));


export default function AnimatedPurpleButton(props) {
    const classes = useStyles();
    return ( <Button className = { classes.button } > { props.buttonText } </Button>)
    };