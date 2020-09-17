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
        fontSize: '28px',
        lineHeight: '44px',
        fontFamily: 'Josefin Sans',
        // Desktop up
        [theme.breakpoints.up('md')]: {
            fontSize: '28px',
            lineHeight: '44px',
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
        fontSize: '18px',
        lineHeight: '31px',
        fontFamily: 'Poppins',

        // Desktop up
        [theme.breakpoints.up('md')]: {
            padding: '0 300px 50px 300px',
            fontSize: '16px',
            lineHeight: '27px',
        },

        // Tablet Above to Laptop/ Desktop
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0 200px 50px 200px',
            fontSize: '16px',
            lineHeight: '27px',
        },

        // Tablet below to Mobile
        [theme.breakpoints.down('sm')]: {
            padding: '0 50px 50px 50px',
            fontSize: '14px',
            lineHeight: '24px',
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