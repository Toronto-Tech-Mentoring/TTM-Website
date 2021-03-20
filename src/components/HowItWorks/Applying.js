import React from 'react';
import { makeStyles } from "@material-ui/core"
import GridContainer from '../GridContainer/GridContainer';
import Grid from "@material-ui/core/Grid"


const useStyles = makeStyles(theme => ({

    container: {
    width: "100%",
    background: "#4529AE",
    marginTop: "-5px",
    [theme.breakpoints.down("1001")]: {
      height: "1713px",
    },
    [theme.breakpoints.down("550")]: {
      height: "1445px",
    },
  },
 headerStyle: {
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    color: "#FFFFFF",
    fontSize: "36px",
    lineHeight: "57px",
    fontWeight: "600",
    margin: "96px 0px 0px 15%",
    textDecoration: "underline",
    textDecorationColor: "#FF7500",
    textUnderlinePosition: "under",
    width: "auto",
    [theme.breakpoints.down("1001")]: {
      fontSize: "24px",
      lineHeight: "41px",
      margin: "131px 0px 0px 15%",
    },
    [theme.breakpoints.down("550")]: {
      fontSize: "20px",
      lineHeight: "32px",
      margin: "64px 0px 0px 4%",
    },
  },
  bulletText: {
    color: "white",
    fontFamily: "Poppins",
    fontWeight: "400",
    paddingBottom: "32px"
  },
  normalText: {
      color: "white",
      fontFamily: "Poppins",
      fontWeight: "400",
  }
}))

export default function Applying() {
    const styles = useStyles()
    const header = "What is the process of applying?"
    const header2 = "What is the program like?"
    return (
            <div className={styles.container}>

    <GridContainer>
<Grid item xs={12}>
        <h1 className={styles.headerStyle}>{header}</h1>
    </Grid>
    <Grid item xs={8}>
    <ol>
        <li class={styles.bulletText}>Reach out to us by filling out our contact form!</li>
        <li class={styles.bulletText}>Once we receive your message, we’ll set up a one-on-one meet and greet with you. You’ll get a chance to learn about how our program works, discuss what you can get out of it, and it’ll be a chance to get to know you, and for you to get to know us.</li>
                <li class={styles.bulletText}>After we get to know you and what your goals are, we’ll match you with a mentor, and you’ll be able to get started!</li>

        </ol>
    </Grid>
    <Grid item xs={12}>
        <h1 className={styles.headerStyle}>{header2}</h1>
    </Grid>
    <Grid item xs={8}>
        <p className={styles.normalText}>Our program is hands-on, so you’ll have the chance to work on a tech-related project of your choosing. You’ll have one or more mentors who will work with you individually to teach you the skills that you need to complete your project, and help you along the way. They can also provide guidance on tech careers, and connect you with tech networks or communities if you’re interested. </p>
        <p className={styles.normalText}>Everything is on your own terms. We can accommodate your schedule, a wide range of interests and projects, and work with your learning style</p>
    </Grid>
    </GridContainer>
        </div>


    )
}