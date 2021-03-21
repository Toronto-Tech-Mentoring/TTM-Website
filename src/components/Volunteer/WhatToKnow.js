import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import Star1 from "../../images/sponsors/what-to-know/star1.svg"
import Star2 from "../../images/sponsors/what-to-know/star2.svg"
import Star3 from "../../images/sponsors/what-to-know/star3.svg"
import Star4 from "../../images/sponsors/what-to-know/star4.svg"
import Star5 from "../../images/sponsors/what-to-know/star5.svg"
import Star6 from "../../images/sponsors/what-to-know/star6.svg"
import Star7 from "../../images/sponsors/what-to-know/star7.svg"
import Star8 from "../../images/sponsors/what-to-know/star8.svg"

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    height: "517px",
    backgroundColor: "#4529AE",
    [theme.breakpoints.down("950")]: {
      height: "624px",
    },
    [theme.breakpoints.down("500")]: {
      height: "562px",
    },
  },
  rectangleContainer: {
    position: "absolute",
    width: "41.6%",
    height: "154px",
    borderRadius: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.12);",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("950")]: {
      height: "144px",
    },
  },
  leftRectangle: {
    margin: "219px 0px 0px 7%",
    [theme.breakpoints.down("950")]: {
      width: "82%",
      margin: "186px 0px 0px 9.2%",
    },
    [theme.breakpoints.down("500")]: {
      width: "100%",
      margin: "154px 0px 0px 0px",
    },
  },
  rightRectangle: {
    width: "37.2%",
    margin: "219px 0px 0px 55.4%",
    [theme.breakpoints.down("950")]: {
      width: "82%",
      margin: "386px 0px 0px 9.2%",
    },
    [theme.breakpoints.down("500")]: {
      width: "100%",
      margin: "354px 0px 0px 0px",
    },
  },
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    position: "absolute",
    textAlign: "center",
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "57px",
    color: "#FFFFFF",
    marginTop: "215px",
    height: "49px",
    [theme.breakpoints.down("950")]: {
      height: "34px",
      fontSize: "24px",
      lineHeight: "41px",
    },
    [theme.breakpoints.down("500")]: {
      marginTop: "175px",
      width: "268px",
      fontSize: "20px",
      lineHeight: "32px",
    },
  },
  bodyText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#FFFFFF",
    [theme.breakpoints.down("950")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("500")]: {
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
  leftText: {
    margin: "0px 1vw 0px 1vw",
    [theme.breakpoints.down("950")]: {
      marginLeft: "0px",
      width: "90%",
    },
    [theme.breakpoints.down("500")]: {
      width: "90%",
    },
  },
  rightText: {
    margin: "0px 1vw 0px 1vw",
    [theme.breakpoints.down("950")]: {
      marginLeft: "0px",
      width: "90%",
    },
    [theme.breakpoints.down("500")]: {
      width: "90%",
    },
  },
  star1: {
    position: "absolute",
    margin: "53px 0px 0px 5.5%",
    width: "32px",
    height: "51px",
    [theme.breakpoints.down("950")]: {
      margin: "55px 0px 0px 4.6%",
      height: "19px",
    },
    [theme.breakpoints.down("500")]: {
      margin: "0px 0px 0px 0px",
      visibility: "hidden",
    },
  },
  star2: {
    position: "absolute",
    margin: "183px 0px 0px 10%",
    width: "12px",
    height: "19px",
    [theme.breakpoints.down("950")]: {
      margin: "338px 0px 0px 30.5%",
      width: "14px",
      height: "24px",
    },
    [theme.breakpoints.down("500")]: {
      margin: "0px 0px 0px 0px",
      visibility: "hidden",
    },
  },
  star3: {
    position: "absolute",
    margin: "414px 0px 0px 17.7%",
    width: "26px",
    height: "40px",
    [theme.breakpoints.down("950")]: {
      margin: "537px 0px 0px 8.3%",
      width: "14px",
      height: "24px",
    },
    [theme.breakpoints.down("500")]: {
      margin: "0px 0px 0px 0px",
      visibility: "hidden",
    },
  },
  star4: {
    position: "absolute",
    margin: "89px 0px 0px 21.8%",
    width: "16px",
    height: "24px",
    [theme.breakpoints.down("1300")]: {
      visibility: "hidden",
      margin: "0px 0px 0px 0px",
    },
  },
  star5: {
    position: "absolute",
    margin: "403px 0px 0px 47.7%",
    width: "16px",
    height: "24px",
    [theme.breakpoints.down("950")]: {
      margin: "149px 0px 0px 65.6%",
      width: "10px",
      height: "17px",
    },
    [theme.breakpoints.down("500")]: {
      margin: "0px 0px 0px 0px",
      visibility: "hidden",
    },
  },
  star6: {
    position: "absolute",
    margin: "164px 0px 0px 59.7%",
    width: "12px",
    height: "19px",
    [theme.breakpoints.down("950")]: {
      margin: "55px 0px 0px 87.6%",
      width: "13px",
      height: "22px",
    },
    [theme.breakpoints.down("500")]: {
      margin: "0px 0px 0px 0px",
      visibility: "hidden",
    },
  },
  star7: {
    position: "absolute",
    margin: "400px 0px 0px 79.1%",
    width: "34px",
    height: "54px",
    [theme.breakpoints.down("950")]: {
      margin: "577px 0px 0px 83%",
      width: "14px",
      height: "24px",
    },
    [theme.breakpoints.down("500")]: {
      margin: "0px 0px 0px 0px",
      visibility: "hidden",
    },
  },
  star8: {
    position: "absolute",
    margin: "144px 0px 0px 86.9%",
    width: "26px",
    height: "42px",
    [theme.breakpoints.down("950")]: {
      margin: "138px 0px 0px 88.2%",
      width: "14px",
      height: "24px",
    },
    [theme.breakpoints.down("500")]: {
      margin: "0px 0px 0px 0px",
      visibility: "hidden",
    },
  },
}))

export default function WhatToKnow() {
  const classes = useStyles()

  const header = "What should I know before volunteering?"
  const leftText =
    "Toronto Tech Mentoring exists to provide options for vulnerable people. This means that volunteering with us requires empathy, sensitivity, and confronting the myriad of causes of housing instability."
  const rightText =
    "This is especially true for mentoring, which also requires a long term (minimum six months) commitment so that we can ensure stability for our clients."

  return (
    <Grid className={classes.container}>
      <Grid className={classes.headerContainer}>
        <h1 className={classes.headerText}>{header}</h1>
      </Grid>

      <img src={Star1} className={classes.star1} alt="StarImage" />
      <img src={Star2} className={classes.star2} alt="StarImage" />
      <img src={Star3} className={classes.star3} alt="StarImage" />
      <img src={Star4} className={classes.star4} alt="StarImage" />
      <img src={Star5} className={classes.star5} alt="StarImage" />
      <img src={Star6} className={classes.star6} alt="StarImage" />
      <img src={Star7} className={classes.star7} alt="StarImage" />
      <img src={Star8} className={classes.star8} alt="StarImage" />

      <Grid
        className={`${classes.rectangleContainer} ${classes.leftRectangle}`}
      >
        <p className={`${classes.bodyText} ${classes.leftText}`}>{leftText}</p>
      </Grid>
      <Grid
        className={`${classes.rectangleContainer} ${classes.rightRectangle}`}
      >
        <p className={`${classes.bodyText} ${classes.rightText}`}>
          {rightText}
        </p>
      </Grid>
    </Grid>
  )
}
