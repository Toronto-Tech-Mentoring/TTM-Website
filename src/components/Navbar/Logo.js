import React from "react"
import LogoTtm from "../../images/navbar/logo-ttm.png"
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    height: "80px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center"
  },
  logo: {
    component: "img",
    alt: "TTM logo", 
    width: "48",
    height: "auto",
    lineHeight: "80px"
  },
  text: {
    display: "inline",
    fontSize: "20px",
    margin: "10px"
  },
});
export default function Logo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box component="img" src={LogoTtm} className={classes.logo}/>
      <Box
       className={classes.text}
      >Toronto Tech Mentoring</Box>
    </div>
  )
}