import React from "react"

import { useStyles } from "./BoldedHeaderStyle"

export default function BoldedHeaderText(props) {
  const classes = useStyles()

  return (
    <p className={classes.headerText} style={props.style}>
      {props.headerText}
    </p>
  )
}
