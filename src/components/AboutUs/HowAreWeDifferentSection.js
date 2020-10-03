import React from "react"
import Cards from "./Cards"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  divStyle: {
    textAlign: "center",
    // width: '100%',
    margin: "0 auto",
  },
  title: {
    color: "#FFFFFF",
    paddingTop: "40px",
    fontWeight: "600",
    fontSize: "28px",
    lineHeight: "44px",
    fontFamily: "Josefin Sans",
    [theme.breakpoints.up("md")]: {
      fontSize: "28px",
      lineHeight: "44px",
    },
    // Tablet Above to Laptop/ Desktop
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "24px",
      lineHeight: "41px",
    },

    // Tablet below to Mobile
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      lineHeight: "32px",
    },
  },
  contents: {
    color: "#FFFFFF",
    marginBottom: "-20px",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "31px",
    fontFamily: "Poppins",

    // Desktop up
    [theme.breakpoints.up("md")]: {
      padding: "0 300px 50px 300px",
      fontSize: "16px",
      lineHeight: "27px",
    },

    // Tablet Above to Laptop/ Desktop
    [theme.breakpoints.between("sm", "md")]: {
      padding: "0 200px 50px 200px",
      fontSize: "16px",
      lineHeight: "27px",
    },

    // Tablet below to Mobile
    [theme.breakpoints.down("sm")]: {
      padding: "0 50px 50px 50px",
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
}))

export default function HowAreWeDifferentSection() {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        backgroundColor: "#4529AE",
        textAlign: "center",
        minHeight: "600px",
        paddingBottom: "50px",
      }}
    >
      <Grid item xs={12}>
        <div className={classes.divStyle}>
          <p className={classes.title}> How are we different?</p>
          <p className={classes.contents}>
            {" "}
            Toronto Tech Mentoring has a unique approach to education and
            upskilling. In our core program, we pair young people with tech
            mentors in the Toronto area to empower them to reach their own
            goals.{" "}
          </p>
        </div>
      </Grid>
      <Cards />
    </Grid>
  )
}