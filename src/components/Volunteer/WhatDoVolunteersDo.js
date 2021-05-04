import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import VolunteerCards from "./Cards"
import CheetohLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetohRight from "../../images/cheetohs/cheetohRight.svg"

const useStyles = makeStyles(theme => ({
  container: {
    height: "852px",
    width: "100%",
    background: "#4529AE",
    "@media screen and (max-width: 990px)": {
      height: "1534px",
    },
  },
  headerText: {
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "57px",
    display: "flex",
    align: "center",
    color: "#FFFFFF",
    justifyContent: "center",
    paddingTop: "96px",
    "@media screen and (max-width: 900px)": {
      fontSize: "24px",
      lineHeight: "41px",
    },
    "@media screen and (max-width: 550px)": {
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
    width: "809px",
    height: "59px",
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: "calc(2vw - 50px)",
    "@media screen and (max-width: 900px)": {
      fontSize: "16px",
      lineHeight: "27px",
      marginTop: "calc(2vw - 25px)",
      width: "534px",
      height: "80px",
    },
    "@media screen and (max-width: 550px)": {
      fontSize: "14px",
      lineHeight: "24px",
      width: "328px",
      height: "93px",
      paddingTop: "10px",
    },
  },
  bodyTextCenter: {
    display: "flex",
    justifyContent: "center",
  },
  subtitleText: {
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "57px",
    display: "flex",
    textAlign: "center",
    color: "#FFFFFF",
    justifyContent: "center",
    paddingTop: "30px",
    height: "34px",
    "@media screen and (max-width: 900px)": {
      fontSize: "22px",
      lineHeight: "38px",
    },
    "@media screen and (max-width: 550px)": {
      fontSize: "18px",
      lineHeight: "29px",
      paddingBottom: "10px",
    },
  },
  cheetohLeft: {
    paddingRight: "27px",
    "@media screen and (max-width: 900px)": {
      marginRight: "-125px",
      marginTop: "-50px",
    },
    "@media screen and (max-width: 550px)": {
      marginRight: "-50px",
    },
  },
  cheetohRight: {
    paddingLeft: "27px",
    "@media screen and (max-width: 900px)": {
      marginLeft: "-125px",
      marginTop: "-50px",
    },
    "@media screen and (max-width: 550px)": {
      marginLeft: "-50px",
    },
  },
}))

export default function WhatDoVolunteersDo() {
  const classes = useStyles()

  return (
    <Grid className={classes.container}>
      <Grid>
        <h1 className={classes.headerText}>What do our volunteers do?</h1>
      </Grid>

      <Grid className={classes.bodyTextCenter}>
        <CheetohLeft className={classes.cheetohLeft} />
        <p className={classes.bodyText}>
          Our program is entirely volunteer-run. From directly working with
          vulnerable clients, to program development, there is a place for every
          skill-set on the team.
        </p>
        <CheetohRight className={classes.cheetohRight} />
      </Grid>

      <h2 className={classes.subtitleText}>
        Here are some examples of roles our volunteers have:{" "}
      </h2>

      <VolunteerCards />
    </Grid>
  )
}
