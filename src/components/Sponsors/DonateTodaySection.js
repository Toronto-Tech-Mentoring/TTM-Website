import React from "react";
import {makeStyles } from '@material-ui/core';

import DonateIconsGroup from './DonateIconsGroup';
import DonateButton from '../shared/AnimatedPurpleButton'

import CheetohLeft from '../../images/cheetohs/cheetoLeft.svg'
import CheetohRight from '../../images/cheetohs/cheetoRight.svg'

const useStyles = makeStyles((theme) => ({

     container: {
        height: 'calc(40vw + 134px)',
        width: '100%',
        maxWidth: '100%',
        padding: '0',
        margin: '0', 
        [theme.breakpoints.down('sm')]: {
            height: 'calc(5.6vw + 405px)',
        },
    },
  
    textBox: {
        position: 'relative',
        top: 'calc(7vw + 90px)',
        left: 'calc(19vw - 41px)',
        width: 'calc(27vw + 190px)',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 'calc(19% - 55px)',
        },
        [theme.breakpoints.down('sm')]: {
            width: 'calc(27vw + 105px)',
        },
           [theme.breakpoints.down('542')]: {
               width: 'calc(71vw + 35px)',
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
        },
        
       
    },

    DonateButton: {
        marginTop: 'calc(2.4vw - 2px)',
        marginLeft: '0px',
        width: 'calc(4vw + 122px)',
        minWidth: '120px',
        height: 'calc(1.5vw + 28px)',
        minHeight: '24px',
        fontSize: '18px',
        fontFamily: 'Poppins',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            width: '120px',
        },
    },

     cheetohLeft: {
            width: '50px',
         transform: 'rotate(-45deg)',
         marginLeft: 'calc(-1.5vw - 20px)',
            marginTop: '-4px'
        },

    cheetohRight: {
            float:'right',
            width: '50px',
            transform: 'rotate(-45deg)',
            marginRight: 'calc(-1.5vw - 20px)',
        }

    
}));


export default function TheBottomLineSection() {
    const classes = useStyles();
    const title = "Donate Today"
    const content = "Help us continue to give young people a chance to access tech skills and change their lives."
    const buttonText = "Donate"

    return (
        <div className={classes.container}>
            <div  className={classes.textBox}>
                <CheetohRight className={classes.cheetohRight}/>
                <div className={classes.title}>{title}</div>
                <div className={classes.text}>{content}</div>
                <div className={classes.DonateButton}>
                    <DonateButton buttonText = {buttonText}/>
                </div>
                <CheetohLeft className={classes.cheetohLeft}/>
            </div>
            <DonateIconsGroup />
        </div>
    )
};

