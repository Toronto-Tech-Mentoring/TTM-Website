import React from "react";
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#873FE2',
        borderRadius: '300px',
        color: 'white',
        borderStyle: 'none',
        width: '100%',
        height: '100%',

        '&:hover, &:focus': {
            background: '#ffff',
            borderStyle: 'solid',
            borderWidth: 'medium',
            borderColor: '#873fe2',
            color: '#873fe2',
        },
    },


}));


export default function AnimatedPurpleButton(props) {
    const classes = useStyles();
    return ( <Button className = { classes.button } > { props.buttonText } </Button>)
    };