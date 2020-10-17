import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TitleRight from '../../images/about-us/bottom-line/titleRight.svg';
import TitleLeft from '../../images/about-us/bottom-line/titleLeft.svg';
import Pin from '../../images/about-us/timeline/pin.svg';
import Pic1 from '../../images/about-us/timeline/pic1.svg';
import Pic3 from '../../images/about-us/timeline/pic3.svg';

const useStyles = makeStyles((theme) => ({
   
    tealBackground: {
      background: 'linear-gradient(180deg, #F5FDFD 0%, #FFFFFF 50%)',
      padding: '50px 20px 0px 0px',

    },
    title: {
        fontFamily: 'Josefin Sans',
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '57px',
        padding: '0px 20px',
        // Tablet Above to Laptop/ Desktop
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '28px',
        },
        // Tablet below to Mobile
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
        },
    },
    yearTag: {
        position: 'relative',
        bottom: '275px',
        marginRight: '20px',
        backgroundColor: '#873FE2',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        borderRadius: '300px',
        padding: '5px 30px',
        fontSize: '25px',
        color: 'white',
        borderStyle: 'none',
        fontFamily: 'Futura',
        fontStyle: 'normal',
        fontWeight: '500',

        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    yearTagSm: {
        padding: '5px 25px',
        fontSize: '14px',
        backgroundColor: '#873FE2',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        borderRadius: '300px',
        color: 'white',
        borderStyle: 'none',
        fontFamily: 'Futura',
        fontWeight: '500',
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            marginRight: 'calc(100% - 82px)'
        },
    },
    pinStyle: {
        display: 'inline-block',
        height: 300,

        // Tablet below to Mobile
        [theme.breakpoints.down('sm')]: {
            height: 200,
        },
    },
    eventTitle: {
        fontFamily: 'Josefin Sans',
        fontWeight: 600,
        fontSize: '28px',
        lineHeight: '44px',
        textAlign: 'left',

        // Tablet Above to Laptop/ Desktop
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '25px',
        },

        // Tablet below to Mobile
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        },
    },
    eventContent: {
        marginTop: '0px',
        position: 'relative',
        fontFamily: 'Poppins',
        fontSize: '15px',
        lineHeight: '31px',
        width: '80%',
        zIndex: 2,
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '16px',
        },
        //Tablet Above to Laptop/ Desktop
        [theme.breakpoints.up('lg')]: {
        marginRight: '450px',
        },
        // Tablet below to Mobile
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
        },
    },
    center: {
        textAlign: 'center',
    },
    firstPic: {
      display: 'inline-block',
      marginRight: '50px',
      [theme.breakpoints.between('sm', 'md')]: {
        marginLeft: '-20px',
        marginRight: '10px',
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '0px',
      },
    },
    pic: {
        display: 'inline-block',
        width: '243px',
        borderRadius: '10px',
        
        // Tablet Above to Laptop/ Desktop
        [theme.breakpoints.between('sm', 'md')]: {
            width: '47%',
        },

        // Tablet below to Mobile
        [theme.breakpoints.down('sm')]: {
            width: '35%',
        },
    },
    gridContainer: {
        marginTop: '50px',
    },
    testing: {
        display: 'inline-block',
        position: 'absolute',
        marginRight: '30px',
        left: '350px',
        width: '350px',
        zIndex: 2,

        // Tablet Above to Laptop/ Desktop
        [theme.breakpoints.between('sm', 'md')]: {
            width: '40%',
        },

        // Tablet below to Mobile
        [theme.breakpoints.down('sm')]: {
            width: '30%',
        },
    },
    bg: {
        zIndex: 1,
        position: 'relative',
        bottom: '50px',
        height: '370px',
        // Tablet Above to Laptop/ Desktop
        [theme.breakpoints.between('sm', 'md')]: {
            width: '40%',
        },

        // Tablet below to Mobile
        [theme.breakpoints.down('sm')]: {
            width: '30%',
        },
    },
    bg2: {
        zIndex: 1,
        position: 'absolute',
        right: '0',
        height: '209px',
        top: '20px',

        // Tablet Above to Laptop/ Desktop
        [theme.breakpoints.between('sm', 'md')]: {
            height: '65%',
        },

        // Tablet below to Mobile
        [theme.breakpoints.down('sm')]: {
            height: '40%',
        },
    },
}));

export default function TimelineSection() {
    const classes = useStyles();

    return (
      <Grid className = {classes.tealBackground} container justify="center" alignItems="center">
        <Grid item xs={12} className={classes.center}>          
          <TitleLeft />
          <span className={classes.title}>See how we’ve grown!</span>
          <TitleRight />
        </Grid>
        <Grid className={classes.gridContainer} container item xs={12}>
          <Grid item xs={2} md={3} lg={3} className={classes.center}>
            <span className={classes.yearTag}>2017</span>
            <Pin className={classes.pinStyle} />
          </Grid>
          <Grid container item xs={10} md={9} lg={9}>
            <span className={classes.yearTagSm}>2017</span>
            <span className={classes.eventTitle}>
              Research and program development
            </span>
            
            <p className={classes.eventContent}>
              Toronto Tech Mentoring was born out of the Civic Tech Toronto
              space. Civic Tech is a movement that focuses on developing and
              harnessing technology for the betterment of civic life.
            </p>
            <div>
              <Pic1
                className={`${classes.firstPic} ${classes.pic}`}
              />
              <Pic1 className={classes.pic}/>
            </div>
          </Grid>
        </Grid>
        <Grid className={classes.gridContainer} container xs={12}>
          <Grid item xs={2} md={3} lg={3} className={classes.center}>
            <span className={classes.yearTag}>2018</span>
            <Pin className={classes.pinStyle} />
          </Grid>
          <Grid container item xs={10} md={9} lg={9}>
            <span className={classes.yearTagSm}>2018</span>
            <span className={classes.eventTitle}>
              Pilot testing and refinement
            </span>
            <p className={classes.eventContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              mi porta, finibus nisl a, gravida massa. Etiam non quam sit amet
              nisi tristique viverra at ac elit.
            </p>
            <div>
              <Pic3
                className={`${classes.firstPic} ${classes.pic}`}
              />
              <Pic3 className={classes.pic}/>
            </div>
          </Grid>
        </Grid>
        <Grid className={classes.gridContainer} container xs={12}>
          <Grid item xs={2} md={3} lg={3} className={classes.center}>
            <span className={classes.yearTag}>2019</span>
            <Pin className={classes.pinStyle} />
          </Grid>
          <Grid item xs={10} md={9} lg={9}>
            <span className={classes.yearTagSm}>2019</span>
            <span className={classes.eventTitle}>Full program launch!</span>
            <p className={classes.eventContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              mi porta, finibus nisl a, gravida massa. Etiam non quam sit amet
              nisi.
            </p>
            <Grid item xs={12}>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
};
