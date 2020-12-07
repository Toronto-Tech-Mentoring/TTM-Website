import React from "react"
import { makeStyles } from "@material-ui/core"

export default function ImageCard(props) {
  const useStyles = makeStyles(props.card.style)
  const classes = useStyles()
  return (
    <div className={classes.cardContainer}>
      <div className={classes.header}>{props.card.header}</div>
      <div className={classes.bodyWrapper}>{props.card.body}</div>
      <div className={classes.footer}> {props.card.footer} </div>
    </div>
  )
}
