import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TitleRight from '../../images/about-us/bottom-line/titleRight.svg';
import TitleLeft from '../../images/about-us/bottom-line/titleLeft.svg';
import Pin from '../../images/about-us/timeline/pin.svg';
import ImgOpt from '../../utils/ImageOptimise.js';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    marginTop: '160px',
    // Tablet Above to Laptop/ Desktop
    [theme.breakpoints.between('sm', 'md')]: {
      marginTop: '96px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '69px',
    },
  },
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
      lineHeight: '38px',
    },
    // Tablet below to Mobile
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '29px',
    },
  },
  yearCol: {
    textAlign: 'right',
    marginRight: '30px',

    [theme.breakpoints.up('lg')]: {
      marginRight: '69px',
      textAlign: 'right',
    },

    [theme.breakpoints.down('sm')]: {
      marginRight: '0px',
      textAlign: 'center',
    },
  },
  yearTag: {
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    position: 'relative',
    bottom: '340px',
    marginRight: '20px',
    backgroundColor: '#873FE2',
    borderRadius: '300px',
    padding: '5px 30px',
    fontSize: '25px',
    color: 'white',
    borderStyle: 'none',
    fontFamily: 'Josefin Sans',
    // Tablet Above to Laptop/ Desktop
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '22px',
      lineHeight: '38px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  yearTagSm: {
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    backgroundColor: '#873FE2',
    borderRadius: '300px',
    color: 'white',
    borderStyle: 'none',
    fontFamily: 'Josefin Sans',
    display: 'none',
    // Mobile
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      fontSize: '14px',
      height: '30px',
      width: '86px',
      marginRight: 'calc(100% - 86px)'
    },
  },
  pinStyle: {
    display: 'inline-block',
    height: 400,
    // Tablet below to Mobile
    [theme.breakpoints.down('sm')]: {
      marginRight: '30px',
      height: 300,
    },
  },
  eventTitle: {
    fontFamily: 'Josefin Sans',
    fontWeight: 600,
    fontSize: '28px',
    lineHeight: '44px',
    textAlign: 'left',
    width: '80%',
    // Tablet Above to Laptop/ Desktop
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '22px',
      lineHeight: '38px',
    },
    // Tablet below to Mobile
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      lineHeight: '30px',
    },
  },
  eventContent: {
    marginTop: '0px',
    position: 'relative',
    fontFamily: 'Poppins',
    fontSize: '18px',
    lineHeight: '31px',
    width: '90%',
    zIndex: 2,
    [theme.breakpoints.up('md')]: {
      width: '85%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '16px',
      lineHeight: '27px',
    },
    // Tablet below to Mobile
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      lineHeight: '20px',
    },
  },
  center: {
    textAlign: 'center',
  },
  pic: {
    display: 'inline-block',
    width: '350px',
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {
      width: '30vw',
      maxWidth: '350px'
    },
  },
  firstPic: {
    display: 'inline-block',
    marginRight: '30px',
    [theme.breakpoints.up('lg')]: {
      marginRight: '40px',
    },
  },
  gridContainer: {
    marginTop: '50px',
  },
  title2019: {
    height: '40px'
  },
  content2019: {
    // Tablet to laptop/desktop
    [theme.breakpoints.up('md')]: {
      height: '320px',
    },
    // Mobile
    [theme.breakpoints.down('sm')]: {
      height: '200px',
    },
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
    // float:'right',
    right: '0',
    height: '209px',
    top: '20px',
    // width: '1050%',
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
  const timelinePicLeft2017 = 'timelinePicLeft2017.jpg'
  const timelinePicRight2017 = 'timelinePicLeft2017.jpg'
  const timelinePicLeft2018 = 'timelinePicLeft2018.jpg'
  const timelinePicRight2018 = 'timelinePicLeft2018.jpg'

  return (
    <Grid container justify="center" alignItems="center" className={classes.tealBackground}>
      <Grid item xs={12} className={`${classes.titleContainer} ${classes.center}`}>
        <TitleLeft />
        <span className={classes.title}>See how we’ve grown!</span>
        <TitleRight />
      </Grid>
      <Grid className={classes.gridContainer} container item xs={12}>
        <Grid item xs={2} md={3} lg={3} xl={4} className={classes.yearCol}>
          <span className={classes.yearTag}>2017</span>
          <Pin className={classes.pinStyle} />
        </Grid>
        <Grid container item xs={10} md={8} lg={7} xl={6}>
          <button className={classes.yearTagSm}>2017</button>
          <span className={classes.eventTitle}>
            Research and program development
            </span>
          <p className={classes.eventContent}>
            Toronto Tech Mentoring was born out of the Civic Tech Toronto
            space. Civic Tech is a movement that focuses on developing and
            harnessing technology for the betterment of civic life.
            </p>
          <div>
            <ImgOpt
              className={`${classes.firstPic} ${classes.pic}`}
              alt="timeline pic left 2017"
              filename={timelinePicLeft2017}
            />
            <ImgOpt
              className={classes.pic}
              alt="timeline pic right 2017"
              filename={timelinePicRight2017}
            />
          </div>
        </Grid>
      </Grid>
      <Grid className={classes.gridContainer} container xs={12}>
        <Grid item xs={2} md={3} lg={3} xl={4} className={classes.yearCol}>
          <span className={classes.yearTag}>2018</span>
          <Pin className={classes.pinStyle} />
        </Grid>
        <Grid container item xs={10} md={8} lg={7} xl={6}>
          <button className={classes.yearTagSm}>2018</button>
          <span className={classes.eventTitle}>
            Pilot testing and refinement
            </span>
          <p className={classes.eventContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            mi porta, finibus nisl a, gravida massa. Etiam non quam sit amet
            nisi tristique viverra at ac elit.
            </p>
          <div>
            <ImgOpt
              className={`${classes.firstPic} ${classes.pic}`}
              alt="timeline pic left 2018"
              filename={timelinePicLeft2018}
            />
            <ImgOpt
              className={classes.pic}
              alt="timeline pic right 2018"
              filename={timelinePicRight2018}
            />
          </div>
        </Grid>
      </Grid>
      <Grid className={classes.gridContainer} container xs={12}>
        <Grid item xs={2} md={3} lg={3} xl={4} className={classes.yearCol}>
          <span className={classes.yearTag}>2019</span>
          <Pin className={classes.pinStyle} />
        </Grid>
        <Grid container item xs={10} md={8} lg={7} xl={6} direction="row" alignItems="flex-start">
          <button className={classes.yearTagSm}>2019</button>
          <span className={`${classes.eventTitle} ${classes.title2019}`}>Full program launch!</span>
          <p className={`${classes.eventContent} ${classes.content2019}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            mi porta, finibus nisl a, gravida massa. Etiam non quam sit amet
            nisi tristique viverra at ac elit.
            </p>
        </Grid>
      </Grid>
    </Grid>
  )
};
