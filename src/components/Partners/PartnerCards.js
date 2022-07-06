import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import GroupedCards from '../shared/GroupedCards';
import { ReactComponent as Background1 } from '../../images/partners/organization/background1.svg';
import { ReactComponent as Background2 } from '../../images/partners/organization/background2.svg';
import { ReactComponent as Background3 } from '../../images/partners/organization/background3.svg';
import { ReactComponent as HelpingSVG } from '../../images/partners/organization/helping.svg';
import { ReactComponent as HouseSVG } from '../../images/partners/organization/house.svg';
import { ReactComponent as TrainingSVG } from '../../images/partners/organization/training.svg';
import CustomButton from '../CustomButton';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#4529AE',
    height: '100%',
    textAlign: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Josefin Sans',
    fontSize: '28px',
    fontWeight: 600,
    lineHeight: '44px',
    textAlign: 'center',
    [theme.breakpoints.down('991')]: {
      fontSize: '22px',
      lineHeight: '37px',
    },
    [theme.breakpoints.down('601')]: {
      fontSize: '18px',
      lineHeight: '29px',
      marginBottom: '40px',
    },
  },
  title: {
    paddingTop: '97px',
    color: '#FFFFFF',
    fontFamily: 'Josefin Sans',
    fontSize: '28px',
    fontWeight: 600,
    lineHeight: '42px',
    textAlign: 'center',
    [theme.breakpoints.down('991')]: {
      fontSize: '22px',
      lineHeight: '38px',
    },
    [theme.breakpoints.down('601')]: {
      fontSize: '18px',
      lineHeight: '28px',
    },
  },
  subTitle: {
    paddingTop: '60px',
    color: '#FFFFFF',
    fontFamily: 'Josefin Sans',
    fontSize: '28px',
    fontWeight: 600,
    lineHeight: '42px',
    textAlign: 'center',
    [theme.breakpoints.down('991')]: {
      fontSize: '22px',
      lineHeight: '38px',
    },
    [theme.breakpoints.down('601')]: {
      fontSize: '18px',
      lineHeight: '28px',
    },
  },
  contactBotton: {
    fontFamily: 'Poppins',
    fontSize: '16px',
    lineHeight: '27px',
    borderStyle: 'none',
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#873FE2',
    fontWeight: '500',
    cursor: 'pointer',
    borderRadius: '300px',
    width: '153px',
    height: '40px',
    marginBottom: '96px',
    [theme.breakpoints.down('601')]: {
      width: '120px',
      height: '32px',
      fontSize: '14px',
      lineHeight: '24px',
      marginBottom: '74px',
    },
  },
}));

const cardsJson = [
  {
    pos: 1,
    body: (
      <div
        style={{
          width: '150px',
          height: '125px',
        }}
      >
        <Background1
          style={{
            position: 'absolute',
            display: 'block',
            zIndex: '1',
          }}
          alt="background 3"
        />
        <HelpingSVG
          style={{
            display: 'fixed',
            position: 'relative',
            zIndex: '2',
          }}
          alt="helping"
        />
      </div>
    ),
    footer: 'Working to help vulnerable youth and young adults',
    style: {
      cardContainer: {
        width: '328px',
        height: '334px',
        borderRadius: '30px',
        backgroundColor: '#FFFFFF',
        display: 'inline-block',
        marginTop: '-50px',
        '@media screen and (max-width: 990px)': {
          margin: '-48px auto 0px auto',
        },
        '@media screen and (max-width: 600px)': {
          width: '260px',
          height: '264px',
        },
      },
      bodyWrapper: {
        margin: '80px 0px 0px 0px',
        display: 'inline-block',
        '@media screen and (max-width: 600px)': {
          margin: '63px 0px 0px 0px',
        },
      },
      footer: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: '16px',
        lineHeight: '27px',
        display: 'flex',
        textAlign: 'center',
        color: '#404040',
        justifyContent: 'center',
        margin: '33px 14px 0px 14px',
        '@media screen and (max-width: 600px)': {
          fontSize: '14px',
          lineHeight: '24px',
          marginTop: '10px',
        },
      },
    },
  },
  {
    pos: 2,
    body: (
      <div
        style={{
          width: '189px',
          height: '110px',
        }}
      >
        <Background2
          style={{
            position: 'absolute',
            display: 'block',
            zIndex: '1',
          }}
          alt="background 2"
        />
        <HouseSVG
          style={{
            display: 'fixed',
            position: 'relative',
            zIndex: '2',
          }}
          alt="house"
        />
      </div>
    ),
    footer: 'Tackling homelesness or providing shelter',
    style: {
      cardContainer: {
        width: '328px',
        height: '334px',
        borderRadius: '30px',
        backgroundColor: '#FFFFFF',
        display: 'inline-block',
        margin: '-50px 108px',
        '@media screen and (max-width: 1200px)': {
          margin: '-50px auto 0px auto',
        },
        '@media screen and (max-width: 990px)': {
          margin: '48px auto 0px auto',
        },
        '@media screen and (max-width: 600px)': {
          width: '260px',
          height: '264px',
        },
      },
      bodyWrapper: {
        margin: '87px 0px 0px 0px',
        display: 'inline-block',
        '@media screen and (max-width: 600px)': {
          margin: '76px 0px 0px 0px',
        },
      },
      footer: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: '16px',
        lineHeight: '27px',
        display: 'flex',
        textAlign: 'center',
        color: '#404040',
        justifyContent: 'center',
        margin: '41px 14px 0px 14px',
        '@media screen and (max-width: 600px)': {
          fontSize: '14px',
          lineHeight: '24px',
          marginTop: '10px',
        },
      },
    },
  },
  {
    pos: 3,
    body: (
      <div
        style={{
          width: '132px',
          height: '134px',
        }}
      >
        <Background3
          style={{
            position: 'absolute',
            display: 'block',
            zIndex: '1',
          }}
          alt="background 3"
        />
        <TrainingSVG
          style={{
            display: 'fixed',
            position: 'relative',
            zIndex: '2',
          }}
          alt="Training"
        />
      </div>
    ),
    footer:
      'Providing skills training for underhoused or vulnerable populations',
    style: {
      cardContainer: {
        width: '328px',
        height: '334px',
        borderRadius: '30px',
        backgroundColor: 'white',
        display: 'inline-block',
        marginTop: '-50px',
        '@media screen and (max-width: 990px)': {
          margin: '48px auto 0px auto',
        },
        '@media screen and (max-width: 600px)': {
          width: '260px',
          height: '264px',
        },
      },
      bodyWrapper: {
        margin: '63px 0px 0px 0px',
        display: 'inline-block',
        '@media screen and (max-width: 600px)': {
          margin: '45px 0px 0px 0px',
        },
      },
      footer: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: '16px',
        lineHeight: '27px',
        display: 'flex',
        textAlign: 'center',
        color: '#404040',
        justifyContent: 'center',
        margin: '29px 14px 0px 14px',
        '@media screen and (max-width: 600px)': {
          fontSize: '14px',
          lineHeight: '24px',
          marginTop: '5px',
        },
      },
    },
  },
];

const cardsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '80px',
  '@media screen and (max-width: 990px)': {
    flexDirection: 'column',
  },
};

export default function PartnerCards() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid>
        <p className={classes.title}>
          We currently partner with organizations that are:
        </p>
      </Grid>
      <Grid>
        <GroupedCards
          cardsContainerStyle={cardsContainerStyle}
          cardsJson={cardsJson}
        />
      </Grid>
      <Grid>
        <p className={classes.subTitle}>
          Are you part of an organization that could benefit from partnering
          with us?
        </p>
      </Grid>
      <Grid>
        <CustomButton
          text="Contact Us"
          customClass={classes.contactBotton}
          link="/contact"
        />
      </Grid>
    </Grid>
  );
}
