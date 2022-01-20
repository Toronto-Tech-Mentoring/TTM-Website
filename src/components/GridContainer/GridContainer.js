import React from "react"
import Grid from "@material-ui/core/Grid"

import { useStyles } from "./GridContainerStyle"

export default function GridContainer(props) {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.root}
      direction={props.direction}
      justifyContent="center"
      alignItems="center"
      style={props.style}
    >
      {props.children}
    </Grid>
  )
}
