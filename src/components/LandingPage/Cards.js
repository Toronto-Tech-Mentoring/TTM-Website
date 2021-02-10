import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"

import Background1 from "../../images/aboutUsBackground/background1.svg"
import Background2 from "../../images/aboutUsBackground/background2.svg"
import Background3 from "../../images/aboutUsBackground/background3.svg"
import GoalSVG from "../../images/about-us/How-are-we-different-section/goals.svg"
import SkillSVG from "../../images/about-us/How-are-we-different-section/conversation.svg"
import SupportSVG from "../../images/about-us/How-are-we-different-section/support.svg"
import Shiny1SVG from "../../images/about-us/How-are-we-different-section/shiny.svg"
import Shiny2SVG from "../../images/about-us/How-are-we-different-section/shiny2.svg"

const useStyles = makeStyles(theme => ({
  root: {
    width: "350px",
    height: "360px",
    display: "inline-block",
    borderRadius: "30px",
    margin: "0px 25px",
    marginTop: "-5px",
    [theme.breakpoints.down("1201")]: {
      margin: "25px 15px",
    },
    [theme.breakpoints.down("1140")]: {
      margin: "25px 5px",
      width: "328px",
    },
  },
  title: {
    fontFamily: "Poppins",
    marginTop: "30px",
    textAlign: "center",
    color: "#873FE2",
    fontSize: "20px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      fontWeight: 600,
    },
  },
  contents: {
    fontFamily: "Poppins",
    textAlign: "center",
    color: "black",
    fontSize: "16px",
    lineHeight: "31px",
    margin: "0px auto 50px auto",
  },
  imgDiv: {
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center",
    textAlign: "center",
    height: "130px",
  },
  innerImage: {
    position: "relative",
  },
  stack: {
    [theme.breakpoints.between("676", "1014")]: {
      margin: "0px 170px 0px 170px",
    },
  },
}))

export default function Cards() {
  const classes = useStyles()

  return (
    <Grid container alignItems="center" justify="center">
      <Grid className={classes.stack}>
        <Card className={classes.root}>
          <p className={classes.title}>Client-determined goals</p>
          <div
            className={classes.imgDiv}
            style={{ backgroundImage: `url(${Background1}` }}
          >
            <GoalSVG
              className={classes.innerImage}
              style={{ top: "35px" }}
              alt="skill_development"
            />
          </div>
          <CardContent>
            <p className={classes.contents}>
              We support the client in setting their own career, entrepreneurial
              or personal goals.
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.stack}>
        <Card className={classes.root}>
          <p className={classes.title}>One-on-one skills development</p>
          <div
            className={classes.imgDiv}
            style={{ backgroundImage: `url(${Background2}` }}
          >
            <SkillSVG
              className={classes.innerImage}
              style={{ top: "15px", zIndex: "3", left: "60px" }}
              alt="skill_development"
            />
            <Shiny1SVG
              className={classes.innerImage}
              style={{ top: "30px", zIndex: "2", right: "55px" }}
              alt="shiny"
            />
          </div>
          <CardContent>
            <p className={classes.contents}>
              We do this through a tailored, project-based approach that meets
              unique goals and needs.
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.stack}>
        <Card className={classes.root}>
          <p className={classes.title}>Wrap-around supports</p>
          <div
            className={classes.imgDiv}
            style={{ backgroundImage: `url(${Background3}` }}
          >
            <SupportSVG
              className={classes.innerImage}
              style={{ top: "15px", zIndex: "3", left: "60px" }}
              alt="supports"
            />
            <Shiny2SVG
              className={classes.innerImage}
              style={{ top: "31px", zIndex: "2", right: "60px" }}
              alt="shiny"
            />
          </div>
          <CardContent>
            <p className={classes.contents}>
              We have strategic partnerships with community organizations to
              provide additional support.
            </p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
