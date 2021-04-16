import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  testimonialButton: {
    backgroundColor: "#873FE2",
    borderRadius: "30px",
    width: "calc(7.41vw + 166px)",
    minWidth: "116px",
    height: "calc(1.5vw + 28px)",
    minHeight: "24px",
    fontSize: "calc(0.37vw + 12.7px)",
    color: "white",
    borderStyle: "none",
    fontFamily: "Poppins",
    marginLeft: "14vw",
    cursor: "pointer",
    [theme.breakpoints.between("sm", "md")]: {
      marginLeft: "3vw",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "3vw",
    },
  },
}))

export default function TestimonialButton({ buttonText, link }) {
  const classes = useStyles()

  return (
    <a href={link}>
      <button className={classes.testimonialButton}>{buttonText}</button>
    </a>
  )
}
