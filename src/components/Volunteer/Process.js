import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import CustomButton from "../CustomButton"
import CheetoLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetoRight from "../../images/cheetohs/cheetohRight.svg"
import ProcessBlob1 from "../../images/volunteers/process/process1.svg"
import ProcessBlob2 from "../../images/volunteers/process/process2.svg"
import ProcessBlob3 from "../../images/volunteers/process/process3.svg"
import ProcessBlob4 from "../../images/volunteers/process/process4.svg"
import SkylineFooter from "../SkylineSVG/SkylineFooter"

const useStyles = makeStyles(theme => ({
  container: {
    height: "100%",
    width: "100%",
    background: "#FFF",
    "@media screen and (max-width: 900px)": {
      height: "calc(4.63vw + 47.3)",
    },
  },
  stepBox: {
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center 50%",
    backgroundSize: "fill",
    height: "auto",
    marginBottom: "50px",
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
    marginTop: "24px",

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
      marginTop: "16px",
    },
  },

  h2Text: {
    textAlign: "center",
    fontFamily: "Josefin Sans",
    fontSize: "calc(0.926vw + 14.7px)",
    fontWeight: 600,
    fontStyle: "normal",
    paddingTop: "30px",
    lineHeight: "44px",
    margin: "0 auto",
    letterSpacing: "0em",
  },
  bodyText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "27px",
    width: "calc(24.3vw + 197px)",
    height: "59px",
    textAlign: "center",
    color: "#000",
    marginTop: "calc(2vw - 10px)",
    "@media screen and (max-width: 900px)": {
      fontSize: "16px",
    },
    "@media screen and (max-width: 600px)": {
      fontSize: "14px",
    },
  },
  bodyTextCenter: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "40px",
  },
  cheetohLeft: {
    marginTop: "98px",
  },
  cheetohRight: {
    marginTop: "98px",
  },
  noDisplayOnBigScreen: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}))

export default function ProcessSectopm() {
  const classes = useStyles()

  return (
    <Grid className={classes.container}>
      <Grid className={classes.bodyTextCenter}>
        <CheetoLeft className={`${classes.cheetohLeft} `} />
        <h2
          className={classes.h2Text}
          style={{
            marginTop: "98px",
            marginLeft: "calc(0.556vw + 9px)",
            marginRight: "calc(0.556vw + 9px)",
            paddingTop: "0px",
            width: "calc(24.8vw + 124px)",
          }}
        >
          What’s the process for volunteering?
        </h2>
        <CheetoRight className={`${classes.cheetohRight} `} />
      </Grid>
      <Grid
        className={classes.stepBox}
        style={{
          backgroundImage: `url(${ProcessBlob1})`,
        }}
      >
        <Grid>
          <h2 className={classes.h2Text}>Step 1: Apply</h2>
        </Grid>

        <Grid className={classes.bodyTextCenter}>
          <p className={classes.bodyText}>
            Send us an email letting us know you’re interested in volunteering.
            Make sure you include why you’re interested in volunteering with us!
          </p>
        </Grid>
      </Grid>
      <Grid
        className={classes.stepBox}
        style={{
          backgroundImage: `url(${ProcessBlob2})`,
        }}
      >
        <Grid>
          <h2 className={classes.h2Text}>Step 2: Interview</h2>
        </Grid>

        <Grid className={classes.bodyTextCenter}>
          <p className={classes.bodyText}>
            We’ll set up a time to chat on the phone with one of our volunteers.
            You’ll have a chance to ask questions, and get a sense of how we
            operate.
          </p>
        </Grid>
      </Grid>
      <Grid
        className={classes.stepBox}
        style={{
          backgroundImage: `url(${ProcessBlob3})`,
        }}
      >
        <Grid>
          <h2 className={classes.h2Text}>Step 3: Training</h2>
        </Grid>

        <Grid className={classes.bodyTextCenter}>
          <p className={classes.bodyText}>
            We’ll provide you with short training sessions based on your role.
            These sessions will help you to understand our team and values, and
            to be able to contribute in your role.
          </p>
        </Grid>
      </Grid>
      <Grid
        className={classes.stepBox}
        style={{
          backgroundImage: `url(${ProcessBlob4})`,
        }}
      >
        <Grid>
          <h2 className={classes.h2Text}>Step 4: Volunteer</h2>
        </Grid>

        <Grid className={classes.bodyTextCenter}>
          <p className={classes.bodyText}>
            Be a part of helping provide opportunities to at-risk youth! While
            you’re at it, you’ll learn and work with a passionate and skilled
            group of people.
          </p>
        </Grid>
      </Grid>
      <Grid>
        <h2 className={classes.h2Text} style={{ color: "#4529AE" }}>
          Sounds good? Send us an email.
        </h2>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <CustomButton
            text={"Volunteer"}
            customClass={classes.contactButton}
            link="/contact"
          />
        </div>
      </Grid>
      <SkylineFooter />
    </Grid>
  )
}
