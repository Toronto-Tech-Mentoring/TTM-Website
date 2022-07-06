import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GridContainer from '../GridContainer/GridContainer';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    background: '#4529AE',
    textAlign: 'left',
    // [theme.breakp,oints.down("1001")]: {
    //   height: "1713px",
    // },
    // [theme.breakpoints.down("550")]: {
    //   height: "1445px",
    // },
  },
  sectionBox: {
    margin: 'calc(2.41vw + 23.3px) 0',
    textAlign: 'left',
  },
  textBox: {
    margin: 'calc(2.41vw + 23.3px) calc(25.5vw - 75.5px)',
    //   [theme.breakpoints.down("1001")]: {
    //   margin: "131px 0px 0px 15%",
    // },
    // [theme.breakpoints.down("550")]: {
    //   margin: "64px 0px 0px 4%",
    // },
  },
  headerStyle: {
    fontFamily: 'Josefin Sans',
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontSize: 'calc(0.926vw + 14.7px)',
    lineHeight: '57px',
    fontWeight: '600',
    marginTop: '0',
    textDecoration: 'underline',
    textDecorationColor: '#FF7500',
    textUnderlinePosition: 'under',
    [theme.breakpoints.down('1001')]: {
      lineHeight: '41px',
    },
    [theme.breakpoints.down('550')]: {
      lineHeight: '32px',
    },
  },
  bulletList: {
    paddingLeft: '1.5%',
  },
  bulletText: {
    color: 'white',
    fontFamily: 'Poppins',
    fontWeight: '400',
    paddingBottom: '32px',
    fontSize: 'calc(0.37vw + 12.7px)',
  },
  normalText: {
    color: 'white',
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 'calc(0.37vw + 12.7px)',
  },
}));

export default function Applying() {
  const styles = useStyles();
  const header = 'What is the process of applying?';
  const header2 = 'What is the program like?';
  return (
    <div className={styles.container}>
      <GridContainer>
        <Box className={styles.sectionBox}>
          <Grid item xs={12}>
            <Box className={styles.textBox}>
              <h1 className={styles.headerStyle}>{header}</h1>
              <ol className={styles.bulletList}>
                <li className={styles.bulletText}>
                  Reach out to us by filling out our contact form!
                </li>
                <li className={styles.bulletText}>
                  Once we receive your message, we’ll set up a one-on-one meet
                  and greet with you. You’ll get a chance to learn about how our
                  program works, discuss what you can get out of it, and it’ll
                  be a chance to get to know you, and for you to get to know us.
                </li>
                <li
                  className={styles.bulletText}
                  style={{ paddingBottom: '0' }}
                >
                  After we get to know you and what your goals are, we’ll match
                  you with a mentor, and you’ll be able to get started!
                </li>
              </ol>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className={styles.textBox}>
              <h1 className={styles.headerStyle}>{header2}</h1>
              <p className={styles.normalText}>
                Our program is hands-on, so you’ll have the chance to work on a
                tech-related project of your choosing. You’ll have one or more
                mentors who will work with you individually to teach you the
                skills that you need to complete your project, and help you
                along the way. They can also provide guidance on tech careers,
                and connect you with tech networks or communities if you’re
                interested.
                {' '}
              </p>
              <p className={styles.normalText}>
                Everything is on your own terms. We can accommodate your
                schedule, a wide range of interests and projects, and work with
                your learning style.
              </p>
            </Box>
          </Grid>
        </Box>
      </GridContainer>
    </div>
  );
}
