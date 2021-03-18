import React from "react"
import { makeStyles } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"

import VolunteeringIconsGroup from "./VolunteeringIcons"
import CustomButton from "../CustomButton"

const useStyles = makeStyles(theme => ({
  container: {
    // height: "calc(40vw + 134px)",
    height: "auto",
    width: "100%",
    maxWidth: "100%",
    padding: "0",
    margin: "0",
    [theme.breakpoints.down("sm")]: {
      // height: "calc(5.6vw + 405px)",
    },
  },

  textBox: {
    position: "relative",
    top: "calc(7vw + 90px)",
    left: "calc(19vw - 41px)",
    width: "calc(27vw + 190px)",
    [theme.breakpoints.down("md")]: {
      width: "calc(27vw + 105px)",
    },
    [theme.breakpoints.down("542")]: {
      width: "calc(71vw + 35px)",
    },
    [theme.breakpoints.down("442")]: {
      width: "calc(71vw + 20px)",
    },
  },

  title: {
    fontFamily: "Josefin Sans",
    color: "black",
    fontSize: "28px",
    lineHeight: "44px",
    fontWeight: "600",
    marginBottom: "16px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      marginBottom: "8px",
    },
    [theme.breakpoints.down("542")]: {
      fontSize: "18px",
      marginBottom: "8px",
    },
  },

  title2: {
    paddingTop: "104px",
    fontFamily: "Josefin Sans",
    color: "black",
    fontSize: "28px",
    lineHeight: "44px",
    fontWeight: "600",
    marginBottom: "16px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "42px",
      fontSize: "22px",
      marginBottom: "8px",
    },
    [theme.breakpoints.down("542")]: {
      fontSize: "18px",
      marginBottom: "8px",
    },
  },

  text: {
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "27px",
    fontWeight: "400",
    [theme.breakpoints.down("542")]: {
      fontSize: "14px",
      lineHeight: "24px",
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
    },
  },

  DonateButton: {
    marginTop: "calc(2.4vw - 2px)",
    marginLeft: "0px",
    width: "calc(4vw + 122px)",
    minWidth: "120px",
    height: "calc(1.5vw + 28px)",
    minHeight: "24px",
  },

  cheetohLeft: {
    width: "calc(1.39vw + 13px)",
    transform: "rotate(-45deg)",
    marginLeft: "calc(-1.5vw - 5px)",
    marginTop: "-6px",
  },

  cheetohRight: {
    float: "right",
    width: "calc(1.39vw + 13px)",
    transform: "rotate(-45deg)",
    marginRight: "calc(-1.5vw - 20px)",
  },
}))

export default function PositiveDifferenceSection() {
  const classes = useStyles()
  const title =
    "Are you looking to make a positive difference in someone else's life?"
  const content =
    "We are always looking for new volunteers to join the team. Our team shares a commitment to valuing diversity, creating a safe environment, and building trust. "
  const title2 = "If this sounds like you, join our team!"

  return (
    <Grid container className={classes.container}>
      <div className={classes.container}>
        <div className={classes.textBox}>
          <div className={classes.title}>{title}</div>
          <div className={classes.text}>{content}</div>
          <div className={classes.title2}>{title2}</div>
          <div className={classes.DonateButton}>
            <div
              style={{
                textAlign: "center",
                marginTop: "45px",
                marginBottom: "90px",
              }}
            >
              <CustomButton
                text={"Contact Us"}
                customClass={classes.contactButton}
              />
            </div>
          </div>
        </div>
        <VolunteeringIconsGroup />
      </div>
    </Grid>
  )
}
