import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as CheetoLeft } from '../../images/cheetohs/cheetohLeft.svg';
import { ReactComponent as CheetoRight } from '../../images/cheetohs/cheetohRight.svg';
import CustomButton from '../CustomButton';

const useStyles = makeStyles((theme) => ({
  divStyle: {
    backgroundColor: '#4529AE',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    color: '#FFFFFF',
    paddingTop: '96px',
    marginBottom: '16px',
    fontFamily: 'Josefin Sans',
    fontWeight: 500,
    fontSize: '28px',
    lineHeight: '42px',

    // Tablet
    [theme.breakpoints.down(1024)]: {
      fontSize: '22px',
      lineHeight: '38px',
    },

    // Mobile
    [theme.breakpoints.down('sm')]: {
      paddingTop: '64px',
      fontSize: '18px',
      lineHeight: '29px',
    },
  },
  cheeto: {
    height: '50px',
    display: 'none',
    margin: '0px 30px',
    // Tablet
    [theme.breakpoints.up(1024)]: {
      display: 'inline-block',
    },
  },
  contentDiv: {
    display: 'inline-block',
    maxWidth: '792px',
    margin: '0 auto',
    // Tablet
    [theme.breakpoints.down(1024)]: {
      width: '535px',
    },
    // Mobile
    [theme.breakpoints.down('xs')]: {
      margin: '0px 15px',
      width: 'auto',
    },
  },
  content: {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '27px',

    // Tablet
    [theme.breakpoints.down(1024)]: {
      fontSize: '16px',
      lineHeight: '27px',
      width: 'auto',
    },

    // Mobile
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      lineHeight: '24px',
      width: 'auto',
    },
  },
  button: {
    width: '180px',
    height: '59px',
    background: '#FFFFFF',
    margin: '40px calc((100% - 792px) * 0.5) 96px calc((100% - 792px) * 0.5)',
    borderRadius: '30px',
    fontFamily: 'Poppins',
    color: '#873FE2',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '27px',

    // Tablet
    [theme.breakpoints.down(1024)]: {
      width: '143px',
      height: '40px',
      margin: '48px 20% 96px 20%',
      fontSize: '16px',
      lineHeight: '27px',
    },

    // Mobile
    [theme.breakpoints.down('xs')]: {
      width: '120px',
      height: '32px',
      margin: '48px 20% 64px 20%',
      fontSize: '14px',
      lineHeight: '24px',
    },
  },
}));

export default function SupportUsSection() {
  const classes = useStyles();

  return (
    <div className={classes.divStyle}>
      <h1 className={classes.title}>Support Us</h1>
      <CheetoLeft className={classes.cheeto} />
      <div className={classes.contentDiv}>
        <span className={classes.content}>
          Make a donation to help give underprivledged LGBTQ youth an
          opportunity to succeed. If you are unable to donate at this time, but
          want to help us in our mission, we are always looking for great
          volunteers to help our programs continue functioning.
        </span>
      </div>
      <CheetoRight className={classes.cheeto} />
      <CustomButton text="Volunteer" customClass={classes.button} />
    </div>
  );
}
