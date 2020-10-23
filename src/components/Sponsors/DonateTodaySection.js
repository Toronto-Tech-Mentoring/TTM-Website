import React from "react";
import { Box, Container, makeStyles } from '@material-ui/core';

import DonateIconsGroup from './DonateIconsGroup';
import DonateButton from '../shared/AnimatedPurpleButton'

const useStyles = makeStyles((theme) => ({

     container: {
        height: 'calc(40vw + 134px)',
        padding: '0',
        margin: '0'
       
    },
    textBox: {
        float: 'left',
        marginTop: 'calc(7vw + 94px)',
        marginLeft: 'calc(19vw - 50px)',
        width: 'calc(27vw + 198px)',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 'calc(19.6% - 55px)',
        },
           [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
       
    },

    title: {
        fontFamily: 'Josefin Sans',
        color: 'black',
        fontSize: '28px',
        lineHeight: '44px',
        fontWeight: '600',
        marginBottom: '16px',
        textDecoration: 'underline',
        textDecorationColor: '#FF7500',
        textUnderlinePosition: 'under',
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
             marginBottom: '8px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
             marginBottom: '8px',
        },
    },
    
    text: {
      fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '27px',
        fontWeight: '400',
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
            lineHeight: '24px',
        }   
    },

    DonateButton: {
        marginTop: 'calc(2.4vw - 2px)',
    },

    
}));


export default function TheBottomLineSection() {
    const classes = useStyles();
    const title = "Donate Today"
    const content = "Help us continue to give young people a chance to access tech skills and change their lives."
    const buttonText = "Donate"

    return (
        <Container className={classes.container}>
            <Box className={classes.textBox}>
                <Box className={classes.title}>{title}</Box>
                <Box className={classes.text}>{content}</Box>
                <Box className={classes.DonateButton}>
                    <DonateButton
                        buttonText = {buttonText}
                    />
                </Box>
            </Box>
            <DonateIconsGroup />
        </Container>
    )
};

