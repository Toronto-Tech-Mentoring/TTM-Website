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
import SVGLoad from "../SVGLoad/SVG"

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    height: "517px",
    backgroundColor: "#4529AE",
  },
  rectangleContainer: {
    position: "absolute",
    width: "600px",
    height: "154px",
    borderRadius: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.12);",
  },
  leftRectangle: {
    margin: "219px 0px 0px 101px",
  },
  rightRectangle: {
    margin: "219px 0px 0px 799px",
  },
  //   headerContainer: {
  //     position: "absolute",
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  headerText: {
    position: "absolute",
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "57px",
    color: "#FFFFFF",
    margin: "64px 0px 0px 413px",
  },
  bodyText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#FFFFFF",
  },
  leftText: {
    margin: "219px 0px 0px 101px",
  },
  rightText: {
    margin: "219px 0px 0px 799px",
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
      <Grid>
        <h1 className={classes.headerText}>{header}</h1>
      </Grid>

      <img src={Star1} alt="sponsorStars" />
      <img src={Star2} alt="sponsorStars" />
      <img src={Star3} alt="sponsorStars" />
      <img src={Star4} alt="sponsorStars" />
      <img src={Star5} alt="sponsorStars" />
      <img src={Star6} alt="sponsorStars" />
      <img src={Star7} alt="sponsorStars" />
      <img src={Star8} alt="sponsorStars" />

      <Grid
        className={`${classes.rectangleContainer} ${classes.leftRectangle}`}
      >
        <p className={`${classes.bodyText}`}>{leftText}</p>
      </Grid>
      <Grid
        className={`${classes.rectangleContainer} ${classes.rightRectangle}`}
      >
        <p className={`${classes.bodyText}`}>{rightText}</p>
      </Grid>
    </Grid>
  )
}
