import React from "react"
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import LogoTtm from "../../images/navbar/logo-ttm.svg"

const useStyles = makeStyles({
  root: {
    height: "80px",
    display: "inline-flex",
    alignItems: "center",
    width: "fit-content",
    alignItems: "center"
  },
  logo: {
    width: "48px",
    height: "49px",
    margin:"0%",
  },
  text: {
    display: "inline",
    fontSize: "20px",
    margin: "10px",
    fontFamilly: "Poppins"
  },
});

export default function Logo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box component="img" src={LogoTtm} className={classes.logo} alt="TTM logo"/>
      <Box
       className={classes.text}
      >Toronto Tech Mentoring</Box>
    </div>
  )
}