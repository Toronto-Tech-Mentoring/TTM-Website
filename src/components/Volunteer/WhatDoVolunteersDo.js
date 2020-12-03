import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import VolunteerCards from './Cards'
import CheetohLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetohRight from "../../images/cheetohs/cheetohRight.svg"

const useStyles = makeStyles(theme => ({
    container: {
        height: '852px',
        width: '100%',
        background: '#4529AE'
    },
    headerText: {
        fontFamily: 'Josefin Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '57px',
        display: 'flex',
        align: 'center',
        color: '#FFFFFF',
        justifyContent: 'center',
        paddingTop: '96px'
    },
    bodyText:{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '27px',
        display: 'flex',
        textAlign: 'center',
        color: '#FFFFFF',
        justifyContent: 'center',
        // width: '809px',
        height: '59px'
    },
    subtitleText:{
        fontFamily: 'Josefin Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '57px',
        display: 'flex',
        textAlign: 'center',
        color: '#FFFFFF',
        justifyContent: 'center',
        // paddingTop: '80px',
        height: '34px'
    },
    cheetohLeft: {
        
    },
    cheetohRight: {
    
    }, 
}))

export default function WhatDoVolunteersDo() {
  const classes = useStyles()

  return (
    <Grid className={classes.container}>
        
        <h1 className={classes.headerText}>What do our volunteers do?</h1>
        <CheetohLeft className={classes.cheetohLeft} />
        <p className={classes.bodyText}>Our program is entirely volunteer-run. From directly working with vulnerable clients, to program development, there is a place for every skill-set on the team.</p>
        <CheetohRight className={classes.cheetohRight}/>
        <h2 className={classes.subtitleText}>Here are some examples of roles our volunteers have:</h2>

        <VolunteerCards />

    </Grid>
  )
}