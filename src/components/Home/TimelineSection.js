import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import titleRight from '../../images/about-us/bottom-line/titleRight.svg';
import titleLeft from '../../images/about-us/bottom-line/titleLeft.svg';
import pin from '../../images/about-us/timeline/pin.svg';
import bg1 from '../../images/about-us/timeline/2017bg.svg';
import bg2 from '../../images/about-us/timeline/2018bg.svg';
import bg3 from '../../images/about-us/timeline/2019bg.svg';
import pic1 from '../../images/about-us/timeline/pic1.svg';
import pic2 from '../../images/about-us/timeline/pic2.svg';
import pic3 from '../../images/about-us/timeline/pic3.svg';

const useStyles = makeStyles((theme) => ({
    root: {

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
        borderRadius: '300px',
        padding: '5px 30px',
        fontSize: '25px',
        color: 'white',
        borderStyle: 'none',
  
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
 
    },
    pinStyle: {
        display: 'inline-block',
        height: 300,
          // Tablet Above to Laptop/ Desktop
 
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
            fontSize: '16px',
        },
    },
    eventContent: {
        position: 'relative',
        fontFamily: 'Poppins',
        fontSize: '15px',
        lineHeight: '31px',
        width: '80%', 
        zIndex: 3,
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '16px',
        },
 
        // Tablet below to Mobile
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
        },
    },
    center: {
        textAlign: 'center',
    },
    pic: {
        display: 'inline-block',
        width: '200px',
 
        // Tablet Above to Laptop/ Desktop
        [theme.breakpoints.between('sm', 'md')]: {
            width: '40%',
            marginRight: '30px',
        },
 
        // Tablet below to Mobile
        [theme.breakpoints.down('sm')]: {
            width: '30%',
            marginRight: '30px',
        },
    },
    firstPic: {
        display: 'inline-block',
        marginRight: '30px',
    },

    gridContainer: {
        marginTop: '50px',  
    },
}));

const styles = {
    bg: {
        zIndex: 1,
        position: 'relative',
        bottom: '50px'
    },
   
}
export default function TimelineSection() {
    const classes = useStyles();

    return (
        <Grid container
            className={classes.root}
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12} className={classes.center}>
                <img alt="title decoration left" src={titleLeft} />
                <span className={classes.title}>See how we’ve grown!</span>
                <img alt="title decoration right" src={titleRight} />
            </Grid>
            <Grid className={classes.gridContainer} container item xs={12}>
                <Grid item xs={2} md={3} lg={3} className={classes.center}>
                    <span className={classes.yearTag}>2017</span>
                    <img className={classes.pinStyle} alt="pin" src={pin} />
                </Grid>
                <Grid container item xs={10} md={9} lg={9}>
                    <span className={classes.eventTitle}>Research and program development</span>
                    <p className={classes.eventContent}>Toronto Tech Mentoring was born out of the Civic Tech Toronto space. Civic Tech is a movement that focuses on developing and harnessing technology for the betterment of civic life.</p>
                    <div>
                        {/* <img style={styles.bg} alt="purple bubble" src={bg1} /> */}
                        <img className={`${classes.firstPic} ${classes.pic}`} src={pic1}/>
                        <img className={classes.pic} src={pic1} />
                    </div>
                </Grid>
            </Grid>
            {/* <Grid style={styles.gridContainer} container xs={12}>
                <Grid item xs={6} md={4} lg={3} className={classes.center}>
                    <span className={classes.yearTag}>2018</span>
                    <img className={classes.pinStyle} alt="pin" src={pin} />
                </Grid>
                <Grid container item xs={6} md={8} lg={9}>
                    <span className={classes.eventTitle}>Pilot testing and refinement</span>
                    <p className={classes.eventContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac mi porta, finibus nisl a, gravida massa. Etiam non quam sit amet nisi tristique viverra at ac elit.</p>
                    <div>
                        <img className={classes.firstPic} src={pic3}/>
                        <img className={classes.secondPic} src={pic3} />
                    </div>
                </Grid>
            </Grid> */}
            {/* <Grid style={styles.gridContainer} container xs={12}>
                <Grid item xs={6} md={4} lg={3} className={classes.center}>
                    <span className={classes.yearTag}>2019</span>
                    <img className={classes.pinStyle} alt="pin" src={pin} />
                </Grid>
                <Grid item xs={6} md={8} lg={9}>
                    <span className={classes.eventTitle}>Pilot testing and refinement</span>
                    <p className={classes.eventContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac mi porta, finibus nisl a, gravida massa. Etiam non quam sit amet nisi tristique viverra at ac elit.</p>
                    <Grid item xs={12}>
                       
                        <img style={{marginRight:'50px', zIndex:3, position:'relative'}} src="https://via.placeholder.com/243x175"/>
                        <img src="https://via.placeholder.com/243x175"/>
                    </Grid>
                </Grid>
            </Grid> */}
        </Grid>
    )
};