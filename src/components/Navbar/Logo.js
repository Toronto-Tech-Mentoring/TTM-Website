import React from "react"
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import LogoTtm from "../../images/navbar/logo-ttm.svg"



export default function Logo(props) {
  const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "inline-flex",
    alignItems: "center",
    width: "fit-content",
  },
  text: {
    display: "flex",
    margin: "7px",
    maxWidth: props.logoTextMaxWidth
  },
});
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box component="img" src={LogoTtm}
        className={classes.logo} alt="TTM logo"
        style={{width:props.logoWidth+"px", marginLeft:props.navbarSideMargin+"px"}}
      />
      <Box
        className={classes.text}
        style={{fontSize: props.logoFontSize}}
      >Toronto Tech Mentoring</Box>
    </div>
  )
}