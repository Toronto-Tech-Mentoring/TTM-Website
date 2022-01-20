import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

import GridContainer from "../GridContainer/GridContainer"
import SectionTitle from "../SectionTitle/Title"
import TextBox from "../TextBox/TextBox"
import { ReactComponent as RightPerson } from "../../images/who-we-are/right_person.svg"
import { ReactComponent as LeftPerson } from "../../images/who-we-are/left_person.svg"

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    fontSize: "calc(0.926vw + 14.7px)",
    paddingLeft: "32px",
    paddingTop: "4px",
    marginTop: "0px",
    [theme.breakpoints.up(1440)]: {
      fontSize: "28px",
    },
  },
  leftPerson: {
    marginBottom: "-220px",
    marginLeft: "-68px",
    [theme.breakpoints.down("660")]: {
      display: "none",
    },
  },
  rightPerson: {
    float: "right",
    margin: "-75px",
    [theme.breakpoints.down("660")]: {
      display: "none",
  },
},
  text: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "calc(0.37vw + 12.7px)",
    lineHeight: "calc(0.648vw + 21.7px)",
    [theme.breakpoints.up(1440)]: {
      fontSize: "18px",
  },
  },
  paper: {
    width: "calc(63.3vw + 132px)",
    background: "#F0EFFF",
    borderRadius: "30px",
  },
}))

export default function SecondSection() {
  const classes = useStyles();


  return (
    <GridContainer
      style={{
        height: "calc(1005px - 8.52vw)",
        textAlign: "left",
        marginTop: "72px",
        marginBottom: "96px",
      }}
    >
      <Grid item >
        <Paper className={classes.paper}>
          <SectionTitle
            title="We focus on empowerment"
            class={classes.sectionTitle}
          />
          <TextBox
            style={{
              paddingLeft: "34px",
              paddingBottom: "16px",
              paddingRight: "31px",
            }}
          >
            <p className={classes.text}>
              {" "}
              We recognize that homelessness and precarious housing can
              interrupt schooling, employment and support networks. Through
              mentorship and guidance focused on technology, we aim to provide
              transformative experiences that can enrich people’s lives.{" "}
            </p>
          </TextBox>
        </Paper>
        <RightPerson className={classes.rightPerson} />
      </Grid>
      <Grid item>
        <Paper
          className={classes.paper}
          style={{ background: "rgba(129, 166, 255, 0.2)" }}
        >
          <SectionTitle
            title="We do things differently"
            class={classes.sectionTitle}
          />
          <TextBox
            style={{
              paddingLeft: "34px",
              paddingBottom: "16px",
              paddingRight: "31px",
            }}
          >
            <p className={classes.text}>
              {" "}
              We understand each person has their own journey. That is why our
              program is uniquely focused on delivering high-impact value for
              every participant.{" "}
            </p>
          </TextBox>
        </Paper>
      </Grid>
      <Grid item>
        <LeftPerson className={classes.leftPerson} />
        <Paper className={classes.paper}>
          <SectionTitle
            title="We are a values-driven organization"
            class={classes.sectionTitle}
          />
          <TextBox
            style={{
              paddingLeft: "34px",
              paddingBottom: "16px",
              paddingRight: "31px",
            }}
          >
            <p className={classes.text}>
              {" "}
              By enabling access to tech education, we strive to democratize the
              benefits of technology for all, including society’s most
              marginalized and vulnerable communities. We are an evidence-based
              organization and are committed to continuous improvement through
              ongoing evaluation processes.{" "}
            </p>
          </TextBox>
        </Paper>
      </Grid>
    </GridContainer>
  )
}
