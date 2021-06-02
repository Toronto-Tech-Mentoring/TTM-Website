import React from "react"

import { useStyles } from "./TitleStyle.js"

export default function Title(props) {
  const classes = useStyles()

  return (
    <div style={props.divstyle} className={props.class}>
      <p className={classes.title} style={props.pstyle}>{props.title}</p>
    </div>
  )
}
