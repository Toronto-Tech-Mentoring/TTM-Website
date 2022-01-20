import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

const LINES_TO_SHOW = 4;

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
    [theme.breakpoints.between("sm", "md")]: {
      width: "94vw",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      width: "91vw",
    },
  },
  read: {
    position: "absolute",
    bottom: "0",
    right: "0",
    margin: "34px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#4529AE",
    marginBottom: "44px",

    // marginLeft: "95vw",

    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "16px",
      margin: "6px",
      lineHeight: "22px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "14px",
      margin: "6px",
      lineHeight: "22px",
    },
  },
  newDIv: {
    paddingTop: "20px"
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
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "14px",
    },
  },
  bottomText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "31px",
    color: "#000000",
    marginBottom: "0px",
    textAlign: "left",
    marginLeft: "15px",
    width: "75vw",

    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "12px",
      width: "65vw",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "12px",
      lineHeight: "18px",
      marginBottom: "4px",
      marginRight: "5px",
    },
  },
  space: {
    color: "#F2E9FF",
  },
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": LINES_TO_SHOW,
    "-webkit-box-orient": "vertical"
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
    textDecoration: "underline",
    textDecorationColor: "#FF7500",
    textUnderlinePosition: "under",



    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "14px",
    },
  },
}))
function ReadMore({ children, maxCharacterCount = 100 }) {
  const text = children
  const classes = useStyles()
  const [isTruncated, setIsTruncated] = useState(true)
  const resultString = isTruncated ? text.slice(0, 500) : text

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated)
  }

  let content
  if(isTruncated){

    content=(<span className={classes.multiLineEllipsis} >
      {resultString}
      </span>)
      }else {
      content=( <span >
        {resultString}
        </span>)
      }

  return (
    <>
      <p className={classes.content}>
        {/* <p >
      {resultString}
      </p> */}
        {content}
      </p>
      <p className={classes.bottomText}>
        *Note: names and identifying details have been changed to protect the
        privacy of individuals.
      </p>
      <div className={classes.newDIv}>
        <p onClick={toggleIsTruncated} className={classes.read}>
          {isTruncated ? "Read More" : "Read Less"}
        </p>
      </div>
    </>
  )
}

function ReadMoreDemo({ mainText, name }) {
  const classes = useStyles()

  return (
    <div className={classes.expanding}>
      <p className={classes.nameTag}>Meet {name}</p>
      <ReadMore  >{mainText}</ReadMore>
    </div>
  )
}

export default ReadMoreDemo
