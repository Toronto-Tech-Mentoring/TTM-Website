import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import CustomButton from "../CustomButton"
import CheetoLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetoRight from "../../images/cheetohs/cheetohRight.svg"

const useStyles = makeStyles(theme => ({
  container: {
    height: "381px",
    width: "100%",
    background: "#FFF",
    "@media screen and (max-width: 900px)": {
      height: "calc(4.63vw + 47.3)",
    },
  },
  contactButton: {
    backgroundColor: "#873FE2",
    cursor: "pointer",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "18px",
    height: "50px",
    width: "180px",

    // Screen size: Mobile to Tablet
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "16px",
      height: "40px",
      width: "153px",
    },

    // Screen size: Mobile below
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      height: "32px",
      width: "120px",
      paddingBotton: "10px",
    },
  },

  h2Text: {
    textAlign: "center",
    fontFamily: "Josefin Sans",
    fontSize: "28px",
    fontWeight: 600,
    fontStyle: "normal",
    paddingTop: "123px",
    lineHeight: "44px",
    margin: "0 auto",
    letterSpacing: "0em",

    [theme.breakpoints.up("md")]: {
      // display: 'none'
      fontSize: "28px",
      maxWidth: "600px",
    },

    // Screen size: Tablet To Laptop
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: "38px",
    },

    // Screen size: Mobile to Tablet
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "22px",
      maxWidth: "490px",
      lineHeight: "38px",
    },

    // Screen size: Mobile below
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
      maxWidth: "240px",
    },
  },
  bodyText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "27px",
    width: "809px",
    height: "59px",
    textAlign: "center",
    color: "#000",
    marginTop: "calc(2vw - 10px)",
    "@media screen and (max-width: 900px)": {
      fontSize: "16px",
      lineHeight: "27px",
      marginTop: "calc(4.35vw - 0.33px)",
      width: "534px",
      height: "80px",
    },
    "@media screen and (max-width: 600px)": {
      fontSize: "14px",
      lineHeight: "24px",
      width: "328px",
      paddingTop: "30px",
    },
  },
  bodyTextCenter: {
    display: "flex",
    justifyContent: "center",
  },
  cheetohLeft: {
    "@media screen and (max-width: 900px)": {
      marginRight: "-55px",
      marginTop: "-50px",

    },
    "@media screen and (max-width: 550px)": {
      marginRight: "-50px",
    },
  },
  cheetohRight: {
    "@media screen and (max-width: 900px)": {
      marginLeft: "-55px",
      marginTop: "-50px",
    },
    "@media screen and (max-width: 550px)": {
      marginLeft: "-50px",
    },
  },
  noDisplayOnBigScreen: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}))

export default function ContactUsSection() {
  const classes = useStyles()

  return (
    <Grid className={classes.container}>
      <Grid>
        <h2 className={classes.h2Text}>
          Don't see your skill set shown above?
        </h2>
      </Grid>

      <Grid className={classes.bodyTextCenter}>
        <CheetoLeft className={`${classes.cheetohLeft} `} />
        <p
          className={classes.bodyText}
        >
          Reach out to our team to find out how you can be a part of the
          project!
        </p>
        <CheetoRight className={`${classes.cheetohRight} `} />
      </Grid>

      <div
        style={{ textAlign: "center", marginBottom: "90px" }}
      >
        <a href="/contact/">
          <CustomButton
            text={"Contact Us"}
            customClass={classes.contactButton}
          />
        </a>
      </div>
    </Grid>
  )
}
