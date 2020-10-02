import React from "react"
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import LogoTtm from "../../images/navbar/logo-ttm.svg"

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "inline-flex",
    alignItems: "center",
    width: "fit-content",
  },
  text: {
    display: "inline",
    margin: "7px",
  },
});

export default function Logo(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box component="img" src={LogoTtm}
        className={classes.logo} alt="TTM logo"
        style={{width:props.logoWidth+"px"}}
      />
      <Box
        className={classes.text}
        style={{fontSize: props.logoFontSize}}
      >Toronto Tech Mentoring</Box>
    </div>
  )
}