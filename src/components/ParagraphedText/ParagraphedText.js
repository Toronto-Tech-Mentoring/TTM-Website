import React from "react"

import { useStyles } from "./ParagraphedTextStyle"

export default function ParagraphedText(props) {
  const classes = useStyles()
  const extra = props.extra

  return (
    <>
      <p className={classes.contents} style={props.style}>
        {props.content}
        {extra}
      </p>
    </>
  )
}
