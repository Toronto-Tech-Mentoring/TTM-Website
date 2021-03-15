import React from "react"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
    testimonialButton: {
        backgroundColor: "#873FE2",
        borderRadius: "30px",
        width: "calc(18vw + 122px)",
        minWidth: "116px",
        height: "calc(1.5vw + 28px)",
        minHeight: "24px",
        fontSize: "18px",
        color: "white",
        borderStyle: "none",
        fontFamily: "Poppins",
        marginLeft: "14vw",

        [theme.breakpoints.down("sm")]: {
            marginTop: "30px",
            marginBottom: "50px",
          },
    }
  }))

export default function TestimonialButton({buttonText}) {
  const classes = useStyles()

  
  return (
    <button className={classes.testimonialButton} >
      {buttonText}
    </button>
  )
}
