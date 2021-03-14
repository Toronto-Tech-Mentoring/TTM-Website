import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({

  
  text: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "150%",
    textAlign: "left",
    marginLeft: "15px",
    marginRight: "48px",
    color: "#000000",
  },
  container: {
    background: "#F2E9FF",
    border: "2px solid #4529AE",
    boxSizing: "border-box",
    boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.16)",
    borderRadius: "10px",
    width: "79vw",
    position: "relative",
    marginRight: "10px",
  },
  read: {
    position: "absolute",
    bottom: "0",
    right: "0",
    margin: "24px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#4529AE",
  },

  bottomText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "31px",
    color: "#000000",
    marginBottom: "24px",
    textAlign: "left",
  },
  names: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#000000",
  }
}))

function ReadMore({ children, maxCharacterCount = 100 }) {
  const text = children
  const classes = useStyles()

  const [isTruncated, setIsTruncated] = useState(true)
  const resultString = isTruncated ? text.slice(0, 100) : text

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated)
  }
  return (
    <p className={classes.text}>
      {resultString}
      <span onClick={toggleIsTruncated} className={classes.read}>
        {isTruncated ? "Read More" : "Read Less"}
      </span>
    </p>
  )
}

function ReadMoreDemo({name,text}) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <p>Meet {name}</p>

      <ReadMore maxCharacterCount={100}>
          {text}
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation
      </ReadMore>
      <p className={classes.bottomText}>
        *Note: names and identifying details have been changed to protect the
        privacy of individuals.
      </p>
    </div>
  )
}

export default ReadMoreDemo
