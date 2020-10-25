import React from "react"
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LogoTtm from "../../images/navbar/logo-ttm.svg"
export default function Logo() {
  const useStyles = makeStyles((theme) =>({
  root: {
    height: "100%",
    display: "inline-flex",
    alignItems: "center",
    width: "fit-content",
  },
  text: {
    display: "flex",
    margin: "7px",
    maxWidth: "250px",
    fontSize: "20px",
      [theme.breakpoints.down('1040')]: {
        maxWidth: "calc(20vw + 50px)",
        fontSize: "16px",
      },
    [theme.breakpoints.down('400')]: {
         maxWidth: "calc(22vw + 10px)",
        fontSize: "12px",
      },
    
    },
    logo: {
      width: "48px",
      marginLeft: "calc(25vw - 240px)",
         [theme.breakpoints.down('1040')]: {
         width: "40px",
         marginLeft: "calc(51vw - 128px)",
      },
    [theme.breakpoints.down('400')]: {
         width: "30px",
         marginLeft: "calc(52vw - 110px)"
      },
  }
}));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box component="img" src={LogoTtm}
        className={classes.logo} alt="TTM logo"
      />
      <Box
        className={classes.text}
      >Toronto Tech Mentoring</Box>
    </div>
  )
}