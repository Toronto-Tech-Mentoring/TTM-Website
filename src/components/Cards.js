import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import background1 from '../images/about-us/background1.png';
import background2 from '../images/about-us/background2.png';
import background3 from '../images/about-us/background3.png';
import pic1 from '../images/about-us/pic1.png';
import pic2 from '../images/about-us/pic2.png';
import pic3 from '../images/about-us/pic3.png';
import shiny2 from '../images/about-us/shiny2.png';
import shiny3 from '../images/about-us/shiny3.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display:'inline-block',
    maxWidth: '350px',
    maxHeight:'360px',
    borderRadius:'30px',
    margin: '0px 25px',
    marginTop: '-5px',
    [theme.breakpoints.down('md')]: {
      margin: '25px 15px',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    fontFamily: 'Poppins',
    marginTop:'30px',
    textAlign: 'center',
    color: '#873FE2',
    fontSize: '20px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '18px',
        fontWeight:600,
    },
  },
  contents: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: 'black',
    fontSize: '16px',
    lineHeight: '31px',
    margin:'0px auto 50px auto',
  },
  imgDiv: {
    // backgroundImage: `url(${"../images/Vector.png"})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center',
    textAlign: "center",
    height: "130px",
    // marginTop: "20px"
  },
  innerImage: {
    position: "relative",
  },
}));

export default function Cards(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
          <p className={classes.title}>Client-determined goals</p>
          <div className={classes.imgDiv} style={{backgroundImage: `url(${background1}`}}>
            <img className={classes.innerImage} style={{top: '35px'}} alt="skill_development" src={pic1} />
          </div>
          <CardContent>
            <p className={classes.contents}>
              We support the client in setting their own career, entrepreneurial or personal.
            </p>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <p className={classes.title}>One-on-one skills development</p>
          <div className={classes.imgDiv} style={{backgroundImage: `url(${background2}`}}>
            <img className={classes.innerImage} style={{top: '15px', zIndex: '3', left: '60px'}} alt="skill_development" src={pic2} />
            <img className={classes.innerImage} style={{top: '25px', zIndex: '2', right: '55px'}} alt="shiny" src={shiny2} />
          </div>
          <CardContent>
            <p className={classes.contents}>
             We do this through a tailored, project-based approach that meets unique goals and needs.
            </p>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <p className={classes.title}>Wrap-around supports</p>
          <div className={classes.imgDiv} style={{backgroundImage: `url(${background3}`}}>
            <img className={classes.innerImage} style={{top: '30px', zIndex: '3', left: '60px'}} alt="supports" src={pic3} />
            <img className={classes.innerImage} style={{top: '33px', zIndex: '2', right: '60px'}} alt="shiny" src={shiny3} />
          </div>
          <CardContent>
            <p className={classes.contents}>
             We have strategic partnerships with community organizations to provide additional support.
            </p>
          </CardContent>
        </Card>
    </div>

  );
}
