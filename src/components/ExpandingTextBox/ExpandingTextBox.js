import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  expanding: {
    background: "#F2E9FF",
    border: "2px solid #4529AE",
    boxSizing: "border-box",
    boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.16)",
    borderRadius: "10px",
    width: "69vw",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "40px",
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
  content: {
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
  bottomText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "31px",
    color: "#000000",
    marginBottom: "24px",
    textAlign: "left",
    marginLeft: "15px",
  },
  nameTag: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "27px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
    marginLeft: "15px",
  },
}))
function ReadMore({ children, maxCharacterCount = 100 }) {
  const text = children
  const classes = useStyles()
  const [isTruncated, setIsTruncated] = useState(true)
  const resultString = isTruncated ? text.slice(0, 241) : text

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated)
  }
  return (
    <p className={classes.content}>
      {resultString}
      <span onClick={toggleIsTruncated} className={classes.read}>
        {isTruncated ? "Read More" : "Read Less"}
      </span>
    </p>
  )
}

function ReadMoreDemo({ mainText,name }) {
  const classes = useStyles()

  return (
    <div className={classes.expanding}>
      <p className={classes.nameTag}>Meet {name}</p>
      <ReadMore maxCharacterCount={300}>
        {mainText}
      </ReadMore>
      <p className={classes.bottomText}>
        *Note: names and identifying details have been changed to protect the
        privacy of individuals.
      </p>
    </div>
  )
}

export default ReadMoreDemo
