import React from "react"
import { makeStyles } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"

import VolunteeringIconsGroup from "./VolunteeringIcons"
import CustomButton from "../CustomButton"

const useStyles = makeStyles(theme => ({
  container: {
    height: "auto",
    width: "100%",
    maxWidth: "100%",
    paddingLeft: "calc(5.28vw + 6px)",
    paddingTop: "calc(5.19vw + 53.3px)",
    paddingBottom: "calc(5.19vw + 53.3px)",
     [theme.breakpoints.down("1022")]: {
      paddingLeft: "0"
    },
  },

  textBox: {
    position: "relative",
    width: "calc(26.2vw + 222px)",
    [theme.breakpoints.down("960")]: {
      width: "calc(94.6vw - 18.6px)",
    },

  },

  textItem: {
    [theme.breakpoints.down("sm")]: {
      textAlign: 'center',
    }
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

  text: {
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "27px",
    fontWeight: "400",
    paddingBottom: "calc(12.5vw - 76px)",
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
    <Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="center"
  className={classes.container}
>
      <Grid item className={classes.textItem}>
        <div className={classes.textBox}>
          <div className={classes.title}>{title}</div>
          <div className={classes.text}>{content}</div>
          <div>
            <Hidden only={['md', 'lg', 'xl']} >
            <VolunteeringIconsGroup />
          </Hidden>
          </div>

          <div className={classes.title2}>{title2}</div>
          <div className={classes.DonateButton}>
            <div
              style={{
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
        </Grid>
                <Hidden only={['xs', 'sm']}>

        <Grid item >
          <VolunteeringIconsGroup />
        </Grid>
                </Hidden>

    </Grid>
  )
}
