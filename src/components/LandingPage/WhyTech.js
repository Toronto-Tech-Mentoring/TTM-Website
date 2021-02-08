import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  containerStyle: {
    width: "100%",
    height: "417px",
    // margin: "0px 0px 0px 0px",
    display: "inline-block",
  },
  whyBackground: {
    backgroundColor: "white",
    // height: "416px",
    width: "58%",
  },
  header: {
    // position: "absolute",
    fontFamily: "Josefin Sans",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: "28px",
    color: "#000000",
    lineHeight: "42px",
    borderBottom: "2px solid #FF7500",
  },
  body: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "18px",
  },
  whyBody: {
    color: "#404040",
    lineHeight: "150%",
    width: "600px",
    height: "170px",
    marginLeft: "222px",
  },
  whyHeader: {
    width: "140px",
    // height: "39px",
    margin: "96px 0px 0px 222px",
  },
  impactBackground: {
    backgroundColor: "#E4FFFF",
    width: "42%",
    textAlign: "center",
  },
  impactHeader: {
    marginTop: "96px",
    width: "157px",
    textAlign: "center",
  },
  subHeader: {
    fontFamily: "Josefin Sans",
    fontWeight: "600",
    fontStyle: "normal",
    color: "#000000",
    fontSize: "36px",
    lineHeight: "57px",
    textAlign: "center",
    marginTop: "-10px",
  },
  impactBody: {
    lineHeight: "27px",
    textAlign: "center",
    marginTop: "-25px",
    width: "197px",
  },
}))

export default function WhyTech() {
  const classes = useStyles()
  const header = "Why Tech?"
  const body =
    "Our world is increasingly driven by technology - it's all around us, and it changes how we interact with the world and each other. Technical literacy is widely considered one of the most important 21st century skills, and it is a passport into participation in the modern economy. Tech skills are consistently one of the most in- demand skill sets."
  const header2 = "Our Impact"
  const subHeader = "365"
  const body2 = "Hours of mentoring through our program"
  return (
    <Grid className={classes.containerStyle} spacing={1}>
      <Grid container item xs={12} spacing={3}>
        <Grid className={classes.whyBackground}>
          <p className={`${classes.header} ${classes.whyHeader}`}>{header}</p>
          <p className={`${classes.body} ${classes.whyBody}`}>{body}</p>
        </Grid>
        <Grid className={classes.impactBackground}>
          <p className={`${classes.header} ${classes.impactHeader}`}>
            {header2}
          </p>
          <p className={classes.subHeader}>{subHeader}</p>
          <p className={`${classes.body} ${classes.impactBody}`}>{body2}</p>
        </Grid>
      </Grid>
    </Grid>
  )
}
