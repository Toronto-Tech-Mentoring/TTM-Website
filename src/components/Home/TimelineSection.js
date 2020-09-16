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
        fontSize: '30px',
        lineHeight: '57px',
        padding: '0px 20px',
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
    },
    pinStyle: {
        display: 'inline-block',
        height: 300,
    },
    eventTitle: {
        fontFamily: 'Josefin Sans',
        fontWeight: 600,
        fontSize: '25px',
        lineHeight: '44px',
        textAlign: 'left',
    },
    eventContent: {
        position: 'relative',
        fontFamily: 'Poppins',
        fontSize: '15px',
        lineHeight: '31px',
        width: '70%',
        zIndex: 3
    },
    center: {
        textAlign: 'center',
        marginBottom: '50px',
    },
}));

const styles = {
    bg: {
        zIndex: 1,
        position: 'relative',
        bottom: '50px'
    }
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
            <Grid container item xs={12}>
                <Grid item xs={6} md={4} lg={3} className={classes.center}>
                    <span className={classes.yearTag}>2017</span>
                    <img className={classes.pinStyle} alt="pin" src={pin} />
                </Grid>
                <Grid container item xs={6} md={8} lg={9}>
                    <span className={classes.eventTitle}>Research and program development</span>
                    <p className={classes.eventContent}>Toronto Tech Mentoring was born out of the Civic Tech Toronto space. Civic Tech is a movement that focuses on developing and harnessing technology for the betterment of civic life.</p>
                    <Grid item xs={12}>
                        {/* <img style={styles.bg} alt="purple bubble" src={bg1} /> */}
                        <img style={{marginRight:'50px', zIndex:3, position:'relative'}} src={pic1}  />
                        <img src={pic1} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={12}>
                <Grid item xs={6} md={4} lg={3} className={classes.center}>
                    <span className={classes.yearTag}>2018</span>
                    <img className={classes.pinStyle} alt="pin" src={pin} />
                </Grid>
                <Grid item xs={6} md={8} lg={9}>
                    <span className={classes.eventTitle}>Pilot testing and refinement</span>
                    <p className={classes.eventContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac mi porta, finibus nisl a, gravida massa. Etiam non quam sit amet nisi tristique viverra at ac elit.</p>
                    <Grid item xs={12}>
                        {/* <img style={styles.bg} alt="purple bubble" src={bg1} /> */}
                        <img style={{marginRight:'50px'}} src={pic3}/>
                        <img src={pic3} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={12}>
                <Grid item xs={6} md={4} lg={3} className={classes.center}>
                    <span className={classes.yearTag}>2019</span>
                    <img className={classes.pinStyle} alt="pin" src={pin} />
                </Grid>
                <Grid item xs={6} md={8} lg={9}>
                    <span className={classes.eventTitle}>Pilot testing and refinement</span>
                    <p className={classes.eventContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac mi porta, finibus nisl a, gravida massa. Etiam non quam sit amet nisi tristique viverra at ac elit.</p>
                    <Grid item xs={12}>
                        {/* <img style={styles.bg} alt="purple bubble" src={bg1} /> */}
                        <img style={{marginRight:'50px', zIndex:3, position:'relative'}} src="https://via.placeholder.com/243x175"/>
                        <img src="https://via.placeholder.com/243x175"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};