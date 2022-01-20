import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  containerStyle: {
    width: "100%",
    height: "417px",
    [theme.breakpoints.down("901")]: {
      height: "606px",
    },
    [theme.breakpoints.down("465")]: {
      height: "548px",
    },
  },
  whyBackground: {
    backgroundColor: "white",
    height: "100%",
    width: "58%",
    [theme.breakpoints.down("901")]: {
      width: "100%",
      height: "376px",
    },
    [theme.breakpoints.down("465")]: {
      height: "357px",
    },
  },
  header: {
    fontFamily: "Josefin Sans",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: "28px",
    color: "#000000",
    lineHeight: "42px",
    borderBottom: "2px solid #FF7500",
    [theme.breakpoints.down("901")]: {
      fontSize: "22px",
      lineHeight: "38px",
    },
    [theme.breakpoints.down("465")]: {
      fontSize: "18px",
      lineHeight: "29px",
    },
  },
  body: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "18px",
    [theme.breakpoints.down("901")]: {
      fontSize: "16px",
      lineHeight: "27px",
    },
    [theme.breakpoints.down("465")]: {
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
  whyBody: {
    color: "#404040",
    lineHeight: "150%",
    width: "71%",
    height: "170px",
    margin: "20px 12px 0px 27%",
    [theme.breakpoints.down("901")]: {
      margin: "20px 12px 0px 15%",
    },
    [theme.breakpoints.down("465")]: {
      margin: "20px 5px 0px 4%",
      // maxWidth: "325px",
      width: "90%",
    },
  },
  whyHeader: {
    width: "140px",
    margin: "96px 0px 0px 27%",
    [theme.breakpoints.down("901")]: {
      margin: "96px 0px 0px 15%",
      width: "110px",
    },
    [theme.breakpoints.down("465")]: {
      margin: "64px 0px 0px 4%",
      width: "90px",
    },
  },
  impactBackground: {
    backgroundColor: "#E4FFFF",
    width: "42%",
    justifyContent: "center",
    textAlign: "center",
    height: "413px",
    [theme.breakpoints.down("901")]: {
      width: "100%",
      height: "226px",
    },
    [theme.breakpoints.down("465")]: {
      height: "187px",
    },
  },
  impactHeader: {
    margin: "0 auto",
    marginTop: "96px",
    width: "157px",
    [theme.breakpoints.down("901")]: {
      marginTop: "40px",
      width: "120px",
    },
    [theme.breakpoints.down("465")]: {
      marginTop: "32px",
      width: "100px",
    },
  },
  subHeader: {
    fontFamily: "Josefin Sans",
    fontWeight: "600",
    fontStyle: "normal",
    color: "#000000",
    fontSize: "36px",
    lineHeight: "57px",
    marginTop: "20px",
    margin: "0 auto",
    [theme.breakpoints.down("901")]: {
      fontSize: "24px",
      lineHeight: "41px",
    },
    [theme.breakpoints.down("465")]: {
      fontSize: "20px",
      lineHeight: "32px",
      marginTop: "17px",
    },
  },
  impactBody: {
    lineHeight: "27px",
    width: "197px",
    margin: "0 auto",
    [theme.breakpoints.down("465")]: {
      width: "176px",
    },
  },
}))

export default function WhyTech() {
  const classes = useStyles()
  const header = "Why Tech?"
  const body =
    "Our world is increasingly driven by technology - it's all around us, and it changes how we interact with the world and each other. Technical literacy is widely considered one of the most important 21st century skills, and it is a passport into participation in the modern economy. Tech skills are consistently one of the most in-demand skill sets."
  const header2 = "Our Impact"
  const subHeader = "100+"
  const body2 = "hours of mentoring through our program"
  return (
    // <Grid className={classes.containerStyle} spacing={1}>
      <Grid container>
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
    // </Grid>
  )
}
