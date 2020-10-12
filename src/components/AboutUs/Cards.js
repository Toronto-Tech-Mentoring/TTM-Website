import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import background1 from '../../images/about-us/How-are-we-different-section/background1.svg';
import background2 from '../../images/about-us/How-are-we-different-section/background2.svg';
import background3 from '../../images/about-us/How-are-we-different-section/background3.svg';
import pic1 from '../../images/about-us/How-are-we-different-section/pic1.svg';
import pic2 from '../../images/about-us/How-are-we-different-section/pic2.svg';
import pic3 from '../../images/about-us/How-are-we-different-section/pic3.svg';
import shiny2 from '../../images/about-us/How-are-we-different-section/shiny2.svg';
import shiny3 from '../../images/about-us/How-are-we-different-section/shiny3.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '350px',
    maxHeight: '360px',
    display: 'inline-block',
    borderRadius: '30px',
    margin: '0px 25px',
    marginTop: '-5px',
    [theme.breakpoints.down('lg')]: {
      margin: '25px 15px',
      maxWidth: '350px',
      maxHeight: '360px',
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    fontFamily: 'Poppins',
    marginTop: '30px',
    textAlign: 'center',
    color: '#873FE2',
    fontSize: '20px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
      fontWeight: 600,
    },
  },
  contents: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: 'black',
    fontSize: '16px',
    lineHeight: '31px',
    margin: '0px auto 50px auto',
  },
  imgDiv: {
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center',
    textAlign: "center",
    height: "130px",
  },
  innerImage: {
    position: "relative",
  },
}));

export default function Cards() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={12} md={4} lg={3} xl={2.5}>
        <Card className={classes.root}>
          <p className={classes.title}>Client-determined goals</p>
          <div className={classes.imgDiv} style={{ backgroundImage: `url(${background1}` }}>
            <img className={classes.innerImage} style={{ top: '35px' }} alt="skill_development" src={pic1} />
          </div>  
          <CardContent>
            <p className={classes.contents}>
              We support the client in setting their own career, entrepreneurial or personal goals.
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} lg={3} xl={2.5}>
        <Card className={classes.root}>
          <p className={classes.title}>One-on-one skills development</p>
          <div className={classes.imgDiv} style={{ backgroundImage: `url(${background2}` }}>
            <img className={classes.innerImage} style={{ top: '15px', zIndex: '3', left: '60px' }} alt="skill_development" src={pic2} />
            <img className={classes.innerImage} style={{ top: '30px', zIndex: '2', right: '55px' }} alt="shiny" src={shiny2} />
          </div>
          <CardContent>
            <p className={classes.contents}>
              We do this through a tailored, project-based approach that meets unique goals and needs.
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} lg={3} xl={2.5}>
        <Card className={classes.root}>
          <p className={classes.title}>Wrap-around supports</p>
          <div className={classes.imgDiv} style={{ backgroundImage: `url(${background3}` }}>
            <img className={classes.innerImage} style={{ top: '44px', zIndex: '3', left: '60px' }} alt="supports" src={pic3} />
            <img className={classes.innerImage} style={{ top: '33px', zIndex: '2', right: '60px' }} alt="shiny" src={shiny3} />
          </div>
          <CardContent>
            <p className={classes.contents}>
              We have strategic partnerships with community organizations to provide additional support.
            </p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}