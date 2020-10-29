import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    divStyle: { 
        backgroundColor: '#4529AE', 
        textAlign: 'center', 
    },
    h1: {
        color: '#FFFFFF',
        paddingTop: '96px',
        fontWeight: '600',
        lineHeight: '44px',
        fontFamily: 'Josefin Sans',

        // Large screen
        [theme.breakpoints.up('xl')]: {
            fontSize: '50px',
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
        marginBottom: '0px',
        fontWeight: 'normal',
        lineHeight: '30px',
        fontFamily: 'Poppins',
        marginTop: '-20px', 
   
        // Large screen up
        [theme.breakpoints.up(2560)]: {
            padding: '0 800px 96px 800px',
            fontSize: '25px',
        }, 
 
        // Tablet Above to Desktop to large screen
        [theme.breakpoints.between("lg", 2560)]: {
            padding: '0 550px 96px 550px',
            fontSize: '20px', 
        },       
        
        // Tablet to Desktop
        [theme.breakpoints.between('md', 'lg')]: {
            padding: '0 500px 96px 500px',
            fontSize: '18px',  
        },   
        // // Mobile to Tablet 
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0 300px 96px 300px',
            fontSize: '16px',
        },  
  
        // Small mobile to large mobile
        [theme.breakpoints.between('xs', 'sm')]: {
            padding: '0 27px 96px 27px',
            fontSize: '14px',
        },  
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