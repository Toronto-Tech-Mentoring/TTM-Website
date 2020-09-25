import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    divStyle: { 
        backgroundColor: '#4529AE', 
        textAlign: 'center', 
    },
    h1: {
        color: '#FFFFFF',
        paddingTop: '40px',
        fontWeight: '600',
        lineHeight: '60px',
        fontFamily: 'Josefin Sans',

        // Large screen
        [theme.breakpoints.up('xl')]: {
            fontSize: '50px',
            // lineHeight: '27px',
        },
 
        // Tablet Above to Laptop/ Desktop
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '24px',
            lineHeight: '41px',
        },

        // Tablet below to Mobile
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            lineHeight: '32px',
        },
    },
    p: {
        color: '#FFFFFF',
        marginBottom: '50px',
        fontWeight: 'normal',
        lineHeight: '30px',
        fontFamily: 'Poppins',
        marginTop: '-20px', 
   
        // Large screen up
        [theme.breakpoints.up(2560)]: {
            padding: '0 800px 50px 800px',
            fontSize: '25px',
        }, 
 
        // Tablet Above to Desktop to large screen
        [theme.breakpoints.between("lg", 2560)]: {
            padding: '0 550px 50px 550px',
            fontSize: '20px', 
        },       
        
        // Tablet to Desktop
        [theme.breakpoints.between('md', 'lg')]: {
            padding: '0 350px 50px 350px',
            fontSize: '18px',  
        },   
        // // Mobile to Tablet 
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0 200px 50px 200px',
            fontSize: '16px',
        },  
  
        // Small mobile to large mobile
        [theme.breakpoints.between('xs', 'sm')]: {
            padding: '0 100px 50px 100px',
            fontSize: '14px',
            // lineHeight: '24px',
        },  
        // [theme.breakpoints.down('xs')]: {
        //     padding: '0 20px 50px 20px',
        //     fontSize: '12px',
        //     // lineHeight: '24px',
        // },
    }
}));

export default function OurRootsSection(){
    const classes = useStyles();

    return (
        <div className={classes.divStyle}>
            <h1 className={classes.h1}>Our roots</h1>
            <p className={classes.p}>Toronto Tech Mentoring was born out of the Civic Tech Toronto space. Civic Tech is a movement that focuses on developing and harnessing technology for the betterment of civic life.</p>
        </div>
    )
};