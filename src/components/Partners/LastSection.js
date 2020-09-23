import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({ 
    root: {
      flexGrow: 1,
      paddingBottom: '100px',
      textAlign: 'center',
    },
    paper: { 
        padding: theme.spacing(2),
        paddingTop: '20px',
        height: '70px', 
        // width: 'auto',
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
}));

export default function LastSection() {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <p className={classes.title}>Our Partners</p>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={8} sm={4} md={3} lg={2} xl={2}> 
                    <div className={classes.paper}>Civic Tech Toronto</div>
                </Grid>  
                <Grid item xs={8} sm={4} md={3} lg={2} xl={2}>
                    <div className={classes.paper}>The Sprott House</div>
                </Grid>  
            </Grid> 
        </div>
    ); 
}; 