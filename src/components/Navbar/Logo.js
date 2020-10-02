import React, { useEffect, useState } from "react"
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import LogoTtm from "../../images/navbar/heart-purple.svg"
import ClientSideRender from "../../utils/ClientRendering"

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
  const [currentSrc, updateSrc] = useState(null)
  const src = LogoTtm

   useEffect(() => {
     // start loading original image
     const imageToLoad = new Image()
     imageToLoad.src = src
     imageToLoad.onload = () => {
       // When image is loaded replace the src and set loading to false
       updateSrc(src)
     }
   }, [src])

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