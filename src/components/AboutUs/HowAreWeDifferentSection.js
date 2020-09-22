import React from "react"
import Cards from './Cards';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    divStyle: {
        textAlign: 'center',
        margin: '0 auto',
    }, 
    title: {
        color: '#FFFFFF',
        paddingTop: '40px',
        fontWeight: '600',
        fontSize: '2.5vw',
        lineHeight: '44px',
        fontFamily: 'Josefin Sans',
        marginBottom: '-10px',
        lineHeight: '32px',

        // Desktop up
        [theme.breakpoints.up('xl')]: {
            fontSize: '55px',
            // lineHeight: '30px',
        }, 

        // Laptop to Dekstop
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '28px',
            // lineHeight: '44px',
        },
        
        // Tablet To Laptop
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '24px',
            // lineHeight: '41px',
        }, 

        // Mobile to Tablet
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '20px',
            // lineHeight: '41px',
        },    

        // Mobile below
        [theme.breakpoints.down('xs')]: {
             fontSize: '18px',
            //  lineHeight: '32px',
        },   
    }, 
    contents: {
        color: '#FFFFFF',
        marginBottom: '-20px',
        fontWeight: 'normal',
        fontFamily: 'Poppins',
        
        // Desktop up
        [theme.breakpoints.up('xl')]: {
            padding: '0 850px 50px 850px',
            fontSize: '27px',
            lineHeight: '50px',
        }, 

        // Laptop to Dekstop
        [theme.breakpoints.between('md', 'lg')]: {
           padding: '0 350px 50px 350px',
           fontSize: '16px',
           lineHeight: '27px',
       },

       // Tablet To Laptop
       [theme.breakpoints.between('sm', 'md')]: {
           padding: '0 300px 50px 300px',
           fontSize: '16px',
           lineHeight: '27px',
       }, 
    
        // Mobile to Tablet
        [theme.breakpoints.between('xs', 'sm')]: {
            padding: '0 130px 50px 130px',
            fontSize: '14px',
            lineHeight: '24px',
        },   

       // Mobile below
       [theme.breakpoints.down('xs')]: {
           padding: '0 30px 50px 30px',
           fontSize: '12px',
           lineHeight: '24px',
       },  
    }
}));

export default function HowAreWeDifferentSection() {
    const classes = useStyles();

    return ( 
    <Grid container justify = "center"
        alignItems = "center"
        style = {
            { backgroundColor: '#4529AE', textAlign: 'center', minHeight: '600px', paddingBottom:'50px' }
        } 
    >
        <Grid item xs={12}>
            <div className={classes.divStyle}>
                <p className={classes.title}> How are we different?</p> 
                <p className={classes.contents} > The Accelerator Project has a unique approach to education and upskilling. In our core program, we pair young people with tech mentors in the Toronto area to empower them to reach their own goals. </p> 
            </div> 
        </Grid>  
        <Cards />
    </Grid>
    )
};