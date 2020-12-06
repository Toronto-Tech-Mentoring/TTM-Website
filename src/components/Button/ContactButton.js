import React from "react"

import { useStyles } from "./ContactButtonStyle"

export default function ContactButton(props) {
  const classes = useStyles()

  return (
    <button className={classes.contactButton} style={props.style}>
      {props.buttonText}
    </button>
  )
}
