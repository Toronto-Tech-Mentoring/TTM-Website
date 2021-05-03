import React from "react"

import { useStyles } from "./SVGStyle"

export default function SVGLoad(props) {
  const PicSVG = props.image
  const classes = useStyles()

  return <PicSVG className={classes.svgSettings} style={props.style} />
}
