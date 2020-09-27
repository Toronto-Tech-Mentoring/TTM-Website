import React, { useEffect, useState } from "react"
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import LogoTtm from "../../images/navbar/heart-purple.svg"
import ClientSideRender from "../../utils/ClientRendering"

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
    margin: "10px",
    fontFamilly: "Poppins"
  },
});

export default function Logo() {
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
      <Box component="img" src={currentSrc} className={classes.logo}/>
      <Box
       className={classes.text}
      >Toronto Tech Mentoring</Box>
    </div>
  )
}