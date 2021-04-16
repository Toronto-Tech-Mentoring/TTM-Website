import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import TitleRight from "../../images/about-us/bottom-line/titleRight.svg"
import TitleLeft from "../../images/about-us/bottom-line/titleLeft.svg"
import Pin from "../../images/about-us/timeline/pin.svg"
import ImgOpt from "../../utils/ImageOptimise.js"
import LeftBlob from "../../images/about-us/timeline/leftblob.svg"
import CustomButton from "../CustomButton"
import Hiring from "../../images/who-we-are/hiring.svg"
import DataAnalyse from "../../images/who-we-are/data_analyse.svg"
import Group from "../../images/who-we-are/Group.svg"

const useStyles = makeStyles(theme => ({
  titleContainer: {
    marginTop: "160px",
    // Tablet Above to Laptop/ Desktop
    [theme.breakpoints.between("sm", "md")]: {
      marginTop: "96px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "69px",
    },
  },
  tealBackground: {
    background: "linear-gradient(180deg, #F5FDFD 0%, #FFFFFF 50%)",
    padding: "50px 20px 0px 0px",
  },
  title: {
    fontFamily: "Josefin Sans",
    fontWeight: 600,
    fontSize: "32px",
    lineHeight: "57px",
    padding: "0px 20px",
    // Tablet Above to Laptop/ Desktop
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "28px",
      lineHeight: "38px",
    },
    // Tablet below to Mobile
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      lineHeight: "29px",
    },
  },
  yearCol: {
    textAlign: "right",
    marginRight: "30px",
    [theme.breakpoints.up("lg")]: {
      marginRight: "69px",
      textAlign: "right",
    },
    // Moboile
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
      textAlign: "center",
    },
  },
  yearTag: {
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    position: "relative",
    bottom: "400px",
    marginRight: "20px",
    backgroundColor: "#873FE2",
    borderRadius: "300px",
    padding: "5px 30px",
    fontSize: "25px",
    color: "white",
    borderStyle: "none",
    fontFamily: "Josefin Sans",
    // Tablet Above to Laptop/ Desktop
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "22px",
      lineHeight: "38px",
    },
    // Moboile
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  yearTagSm: {
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    backgroundColor: "#873FE2",
    borderRadius: "300px",
    color: "white",
    borderStyle: "none",
    fontFamily: "Josefin Sans",
    display: "none",
    // Mobile
    [theme.breakpoints.down("sm")]: {
      display: "block",
      fontSize: "14px",
      height: "30px",
      width: "86px",
      marginRight: "calc(100% - 86px)",
      marginBottom: "8px",
    },
  },
  pinStyle: {
    display: "inline-block",
    height: 425,
    // Tablet below to Mobile
    [theme.breakpoints.down("sm")]: {
      marginRight: "30px",
      // height: 300,
    },
  },
  eventTitle: {
    zIndex: "1",
    fontFamily: "Josefin Sans",
    fontWeight: 600,
    fontSize: "calc(1.2vw + 12px)",
    lineHeight: "calc(1.67vw + 18px)",
    textAlign: "left",
    width: "calc(37.5vw + 117px)",
    height: "auto",
    marginBottom: "calc(18.7px - 0.741vw)",
  },
  eventContent: {
    marginTop: "0px",
    position: "relative",
    fontFamily: "Poppins",
    fontSize: "calc(0.37vw + 12.7px)",
    fontWeight: "400",
    lineHeight: "calc(0.648vw + 21.7px)",
    width: "calc(52vw + 101px)",
    zIndex: 2,
    [theme.breakpoints.up(1921)]: {
      width: "720px",
      marginRight: "calc(100% - 710px)",
    },
  },
  center: {
    textAlign: "center",
  },
  secondPic: {
    zIndex: "1",
    display: "inline-block",
    width: "calc(6.57vw + 187px)",
    borderRadius: "10px",
  },
  firstPic: {
    zIndex: "1",
    display: "inline-block",
    marginRight: "30px",
  },
  picDiv: {
    width: "calc(52vw + 101px)",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up(1921)]: {
      width: "720px",
    },
  },
  gridContainer: {
    marginTop: "50px",
    justifyContent: "center",
  },
  title2019: {
    height: "40px",
  },
  content2019: {
    // Tablet to laptop/desktop
    [theme.breakpoints.up("md")]: {
      height: "320px",
    },
    // Mobile
    [theme.breakpoints.down("sm")]: {
      height: "200px",
    },
  },
  bg: {
    zIndex: 1,
    position: "relative",
    bottom: "50px",
    height: "370px",
    // Tablet Above to Laptop/ Desktop
    [theme.breakpoints.between("sm", "md")]: {
      width: "40%",
    },
    // Tablet below to Mobile
    [theme.breakpoints.down("sm")]: {
      width: "30%",
    },
  },
  bg2: {
    zIndex: 1,
    position: "absolute",
    right: "0",
    height: "209px",
    top: "20px",
    // Tablet Above to Laptop/ Desktop
    [theme.breakpoints.between("sm", "md")]: {
      height: "65%",
    },
    // Tablet below to Mobile
    [theme.breakpoints.down("sm")]: {
      height: "40%",
    },
  },
  leftBlob: {
    position: "absolute",
    zIndex: "0",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  rightBlob: {
    position: "absolute",
    zIndex: "0",
    right: "27.56%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  bottomText: {
    fontFamily: "Josefin Sans",
    fontWeight: "600",
    fontSize: "calc(0.926vw + 14.7px)",
    lineHeight: "calc(1.3vw + 23.3px)",
    width: "calc(48vw + 156px)",
  },
  contactButton: {
    backgroundColor: "#873FE2",
    cursor: "pointer",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: "27px",

    // Screen size: Mobile to Tablet
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      textAlign: "center",
      lineHeight: "24px",
      height: "32px",
      width: "120px",
    },
  },
}))

export default function TimelineSection() {
  const classes = useStyles()
  const researchSession1 = "researchSession1.jpg"
  const researchSession2 = "ResearchSession2.jpg"
  const programLaunch1 = "program_launch.jpg"
  const programLaunch2 = "program_launch2.jpg"
  const covidResponse1 = "covid1.jpg"
  const covidResponse2 = "covid2.jpg"

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.tealBackground}
    >
      <Grid
        item
        xs={12}
        className={`${classes.titleContainer} ${classes.center}`}
      >
        <TitleLeft />
        <span className={classes.title}>See how we’ve grown!</span>
        <TitleRight />
      </Grid>
      <Grid className={classes.gridContainer} container item xs={12}>
        <Grid item xs={2} md={3} lg={3} xl={4} className={classes.yearCol}>
          <span className={classes.yearTag}>2018</span>
          <Pin className={classes.pinStyle} />
        </Grid>
        <Grid
          container
          item
          xs={10}
          md={8}
          lg={7}
          xl={6}
          style={{
            width: "calc(12.4vw + 207px)",
            height: "calc(7.22vw + 253px)",
          }}
        >
          {" "}
          <button className={classes.yearTagSm}>2018</button>
          <span className={classes.eventTitle}>
            Initial program development
          </span>
          <p className={classes.eventContent}>
            We defined our program objectives from literature research, an
            environmental scan and conducting consultations to better understand
            the problem space.
          </p>
          <div className={classes.picDiv} style={{ justifyContent: "center" }}>
            <Hiring className={classes.secondPic} />
          </div>
        </Grid>
      </Grid>
      <Grid className={classes.gridContainer} container item xs={12}>
        <Grid item xs={2} md={3} lg={3} xl={4} className={classes.yearCol}>
          <span className={classes.yearTag}>2019</span>
          <Pin className={classes.pinStyle} />
        </Grid>
        <Grid
          container
          item
          xs={10}
          md={8}
          lg={7}
          xl={6}
          style={{
            width: "calc(12.4vw + 207px)",
            height: "calc(6.2vw + 289px)",
          }}
        >
          <button className={classes.yearTagSm}>2019</button>
          <span className={classes.eventTitle}>
            Co-creation research session
          </span>
          <p className={classes.eventContent}>
            With social services and tech sector partners, we identified and
            brainstormed ideas to address potential challenges and barriers for
            the program, such as tech hiring practices, social isolation among
            homeless youth.
          </p>
          <div className={classes.picDiv}>
            <ImgOpt
              className={`${classes.firstPic} ${classes.secondPic}`}
              alt="Research pic 1"
              filename={researchSession1}
            />
            <LeftBlob className={classes.leftBlob} />
            <ImgOpt
              className={classes.secondPic}
              alt="Research pic 2"
              filename={researchSession2}
            />
          </div>
        </Grid>
      </Grid>
      <Grid className={classes.gridContainer} container xs={12}>
        <Grid item xs={2} md={3} lg={3} xl={4} className={classes.yearCol}>
          <Pin className={classes.pinStyle} />
        </Grid>
        <Grid
          container
          item
          xs={10}
          md={8}
          lg={7}
          xl={6}
          style={{
            width: "calc(12.4vw + 207px)",
            height: "calc(5.74vw + 291px)",
          }}
        >
          <span className={classes.eventTitle}>
            Pilot testing and refinement
          </span>
          <p className={classes.eventContent}>
            We conducted user research and conducted demos at drop-in programs
            at shelters to test our program assumptions. Based on our insights,
            we refined our mentoring program to a highly tailored one-on-one
            model.
          </p>
          <div className={classes.picDiv} style={{ justifyContent: "center" }}>
            <DataAnalyse className={classes.secondPic} />
          </div>
        </Grid>
      </Grid>
      <Grid className={classes.gridContainer} container item xs={12}>
        <Grid item xs={2} md={3} lg={3} xl={4} className={classes.yearCol}>
          <Pin className={classes.pinStyle} />
        </Grid>
        <Grid
          container
          item
          xs={10}
          md={8}
          lg={7}
          xl={6}
          style={{
            width: "calc(12.4vw + 207px)",
            height: "calc(2.96vw + 336px)",
          }}
        >
          <span className={classes.eventTitle}>Program launch</span>
          <p className={classes.eventContent}>
            We launched our first cycle of the refined program model at the YMCA
            Sprott House, one of the first 2SLGBTQ+ transitional housing
            programs for at-risk and homeless youth in Canada. Since then, we
            have expanded our reach to include participants from other
            transitional housing settings.
          </p>
          <div className={classes.picDiv}>
            <ImgOpt
              className={`${classes.firstPic} ${classes.secondPic}`}
              alt="Program launch pic 1"
              filename={programLaunch1}
            />
            <LeftBlob className={classes.leftBlob} />
            <ImgOpt
              className={classes.secondPic}
              alt="Program Launch pic 2"
              filename={programLaunch2}
            />
          </div>
        </Grid>
      </Grid>
      <Grid className={classes.gridContainer} container item xs={12}>
        <Grid item xs={2} md={3} lg={3} xl={4} className={classes.yearCol}>
          <span className={classes.yearTag}>2020</span>
          <Pin className={classes.pinStyle} />
        </Grid>
        <Grid
          container
          item
          xs={10}
          md={8}
          lg={7}
          xl={6}
          style={{
            width: "calc(12.4vw + 207px)",
            height: "calc(-0.926vw + 392px)",
          }}
        >
          <button className={classes.yearTagSm}>2020</button>
          <span className={classes.eventTitle}>2020 Covid-19 response</span>
          <p className={classes.eventContent}>
            To ensure the safety and well-being of our participants and
            volunteers, we quickly adapted our delivery mode from in-person to
            online. We also created care packages with personalized letters from
            our volunteers for the clients of our delivery partner YMCA Sprott
            House to lift spirits during this difficult time.
          </p>
          <div className={classes.picDiv}>
            <ImgOpt
              className={`${classes.firstPic} ${classes.secondPic}`}
              alt="Covid pic 1"
              filename={covidResponse1}
            />
            <LeftBlob className={classes.leftBlob} />
            <ImgOpt
              className={classes.secondPic}
              alt="Covid pic 2"
              filename={covidResponse2}
            />
          </div>
        </Grid>
      </Grid>
      <Grid className={classes.gridContainer} container xs={12}>
        <Grid item xs={2} md={3} lg={3} xl={4} className={classes.yearCol}>
          <span className={classes.yearTag}>Onwards</span>
          <Pin className={classes.pinStyle} />
        </Grid>
        <Grid
          container
          item
          xs={10}
          md={8}
          lg={7}
          xl={6}
          style={{
            width: "calc(12.4vw + 207px)",
            height: "calc(-2.17vw + 402px)",
          }}
        >
          <button className={classes.yearTagSm}>onwards</button>
          <span className={classes.eventTitle} style={{ paddingLeft: "0px" }}>
            We’re excited to continue to expand our impact on people’s lives,
            through:
          </span>
          <p className={classes.eventContent}>
            <ul>
              <li>Helping more clients through our program </li>
              <li>Onboarding more volunteers, including mentors</li>
              <li>Building more partnerships with supportive organizations</li>
              <li>
                Widening our access to resources to help us provide better
                programs
              </li>
            </ul>
          </p>
          <div className={classes.picDiv} style={{ justifyContent: "center" }}>
            <Group className={classes.secondPic} />
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        className={`${classes.titleContainer} ${classes.center}`}
        style={{ display: "grid", justifyContent: "center" }}
      >
        {" "}
        <Grid>
          <h2 className={classes.bottomText}>
            Inspired by our journey? Excited by our future? Help us get there:{" "}
          </h2>
        </Grid>
        <Grid style={{ paddingTop: "40px" }}>
          <CustomButton
            text={"Contact Us"}
            customClass={classes.contactButton}
            link="/contact"
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
