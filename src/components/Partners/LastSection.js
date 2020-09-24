import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Logo from '../../images/delivery-partner/our-partner/logo.svg';
import Logo2 from '../../images/delivery-partner/our-partner/logo2.svg';

const useStyles = makeStyles((theme) => ({ 
    root: {
      flexGrow: 1,
      paddingBottom: '100px',
    //   textAlign: 'center',
    },
    paper: { 
        background: '#FFFFFF',  
        border: "1px solid #C4C4C4",    
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        '&:hover': {
            cursor: 'pointer',
        },
    
    }, 
    title: { 
        color: '#000000',
        textAlign: 'center', 
        paddingTop: '65px', 
        fontFamily: 'Josefin Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '28px',
    },   
    logo: {
        paddingTop: '5px',
    },
    logo1: {
        // Screen size: Mobile below
        [theme.breakpoints.down('xs')]: {
            width: '60px',
        },  
    },
    logo2: {
        // Screen size: Mobile below
        [theme.breakpoints.down('xs')]: {
            width: '90px',
        },  
    },
    text1: {        
        position: 'relative',
        bottom: '25px',
        left: '35px',
        fontSize: '15px',


        //  // Screen size: Mobile to Tablet
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '13px',
        }, 
 
    
        [theme.breakpoints.down('xs')]: {
            fontSize: '11px',
        },   
    },   
    text2: {
        position: 'relative',
        bottom: '25px',
        left: '10px',
        fontSize: '15px',
        // // Screen size: Mobile to Tablet
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '12px',
        },

        [theme.breakpoints.down('xs')]: { 
            fontSize: '11px',
        },   
    }  
}));

export default function LastSection() {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <p className={classes.title}>Our Partners</p>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={7} sm={5} md={4} lg={3} xl={2}> 
                    <div className={classes.paper}>
                        <img className={`${classes.logo} ${classes.logo1}`} src={Logo} />    
                        <span className={classes.text1}>Civic Tech Toronto</span>
                    </div>         
                </Grid>        
                <Grid item xs={7} sm={5} md={4} lg={3} xl={2}> 
                    <div className={classes.paper}>
                        <img className={`${classes.logo} ${classes.logo2}`} src={Logo2} />    
                        <span className={classes.text2}>The Sprott House</span>
                    </div>       
                </Grid>        
            </Grid> 
        </div> 
    ); 
}; 