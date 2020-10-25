import React from "react";
import { makeStyles } from '@material-ui/core';

import Cheetoh from '../../images/cheetohs/cheetoLeft.svg'

const useStyles = makeStyles((theme) => ({

     container: {
        height: 'calc(-3.4vw + 830px)',
        width: '100%',
        maxHeight: '1144px',
        backgroundColor:'#4529AE',
        [theme.breakpoints.down('sm')]: {
            height: 'calc(-83.33vw + 1444px)',
        },
    }, 

      textBox: {
          width: 'calc(14.7vw + 527px)',
          margin: '0px auto 16px auto',
          paddingTop:'96px',
           [theme.breakpoints.down('sm')]: {
               width: 'calc(73vw + 77px)',
        }, 
    },

    title: {
        color: '#FFFFFF',
        marginBottom: '16px',
        fontFamily: 'Josefin Sans',
        fontWeight: 600,
        fontSize: '28px',
        lineHeight: '44px',
        textAlign:'center',

        // Tablet 
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
            lineHeight: '38px',
        },

        // Mobile
        [theme.breakpoints.down('360')]: {
            fontSize: '20px',
            lineHeight: '32px',
        },
    },
    
    text: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '31px',
        width: 'calc(3.6vw + 50px)',
        textAlign: 'center',

        // Tablet 
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            lineHeight: '27px',
            width: 'calc(51vw + 142px)',
        },

        // Mobile 
        [theme.breakpoints.down('360')]: {
            fontSize: '14px',
            lineHeight: '24px',
        },
        
    },
      cheetohLeft: {
             width: 'calc(1.39vw + 13px)',
            marginTop: '-6px'
        },

    cheetohRight: {
            float:'right',
             width: 'calc(1.39vw + 13px)',
        }

}));


export default function TheBottomLineSection() {
    const classes = useStyles();
    const title = "Partner with Us"
    const content = "The Accelerator Project has a need for essential resources that will help us offer our program which inturn contributes to helping the LGBTQ homeless youth community."
    const buttonText = "Donate"

    return (
        <div className={classes.container}>
             <div  className={classes.textBox}>
                <Cheetoh className={classes.cheetohRight}/>
                <div className={classes.title}>{title}</div>
                <div className={classes.text}>{content}</div>
                {/* <div className={classes.DonateButton}>
                </div> */}
                <Cheetoh className={classes.cheetohLeft}/>
            </div>
        </div>
    )
};