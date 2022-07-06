import React from 'react';
import { Box } from '@material-ui/core';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as LogoTtm } from '../../images/navbar/logo-ttm.svg';

export default function Logo() {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100%',
      display: 'inline-flex',
      alignItems: 'center',
      width: 'fit-content',
    },
    text: {
      display: 'flex',
      margin: '7px',
      maxWidth: '250px',
      fontSize: '20px',
      color: 'black',
      [theme.breakpoints.down('1080')]: {
        maxWidth: 'calc(20vw + 50px)',
        fontSize: '16px',
      },
      [theme.breakpoints.down('400')]: {
        maxWidth: 'calc(22vw + 10px)',
        minWidth: '81px',
        fontSize: '12px',
      },
    },
    logo: {
      width: '48px',
      marginLeft: 'calc(25vw - 240px)',
      [theme.breakpoints.down('1080')]: {
        width: '40px',
        marginLeft: 'calc(51vw - 128px)',
      },
      [theme.breakpoints.down('400')]: {
        width: '30px',
        marginLeft: 'calc(52vw - 107px)',
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.logo}>
        <LogoTtm alt="TTM logo" />
      </Box>
      <Link to="/home" id="home" style={{ textDecoration: 'none' }}>
        <Box className={classes.text}>Toronto Tech Mentoring</Box>
      </Link>
    </div>
  );
}
