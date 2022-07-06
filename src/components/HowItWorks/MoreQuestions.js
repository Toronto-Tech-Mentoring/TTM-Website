import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import GridContainer from '../GridContainer/GridContainer';
import CustomButton from '../CustomButton';
import TextBox from '../TextBox/TextBox';

const useStyles = makeStyles(() => ({
  title: {
    fontFamily: 'Josefin Sans',
    fontWeight: '600',
    fontSize: '22px',
    // width: "calc(42vw + 59.7px)",
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: '18px',
  },
  contactButton: {
    backgroundColor: '#873FE2',
    cursor: 'pointer',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '18px',
    height: '50px',
    width: '180px',
  },
}));

export default function MoreQuestions() {
  const classes = useStyles();

  return (
    <GridContainer>
      <Grid item xs={12}>
        <TextBox style={{ paddingRight: 'calc(19vw - 51.3px)' }}>
          <div>
            <h2 className={classes.title}>Have more questions?</h2>
          </div>
          <div style={{ paddingBottom: '44px' }}>
            <p className={classes.text}>
              Contact us and we will be happy to answer any questions
            </p>
          </div>
          <a href="/contact/">
            <CustomButton
              text="Contact Us"
              customClass={classes.contactButton}
            />
          </a>
        </TextBox>
      </Grid>
    </GridContainer>
  );
}
