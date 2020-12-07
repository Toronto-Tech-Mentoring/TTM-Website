import React from "react"
import { makeStyles } from "@material-ui/core"

import Cheetoh from "../../images/cheetohs/cheetohRight.svg"

// Images
import ImageOne from "../../images/sponsors/partner/laptop.svg"
import ImageTwo from "../../images/sponsors/partner/software.svg"
import ImageThree from "../../images/sponsors/partner/workspaces.svg"
import ImageFour from "../../images/sponsors/partner/training.svg"

//  Cards flex container
import GroupedCards from "../shared/GroupedCards"

// Cards JSON
/*********************************************************************
    Each card object contains 4 propersties ( all required for the reusable component):
    - header: for the card header 
    - body: for the card body
    - footer for the card footer
    - style: object to style each of the s sections
*********************************************************/
const cardsJson = [
  {
    header: "",
    body: (
      <img
        src={ImageOne}
        width="100%"
        height="auto"
        margin="auto"
        alt="laptops for accessibility"
      />
    ),
    footer: "Laptops for accessability",
    style: {
      cardContainer: {
        maxWidth: "170px",
        margin: "0px",
        "@media screen and (max-width: 1024px)": {
          maxWidth: "116px",
          margin: "0 30px",
        },
        "@media screen and (max-width:560px)": {
          maxWidth: "114px",
        },
      },
      bodyWrapper: {
        width: "calc(8vw + 11px)",
        minWidth: "72px",
        padding: "20px 20px 0 20px",
        display: "inline-block",
      },
      header: {},
      footer: {},
    },
  },
  {
    header: "",
    body: (
      <img
        src={ImageTwo}
        width="100%"
        height="auto"
        margin="auto"
        alt="laptops for accessibility"
      />
    ),
    footer: "Software or server subscriptions",
    style: {
      cardContainer: {
        maxWidth: "180px",
        margin: "0px",
        "@media screen and (max-width: 1024px)": {
          maxWidth: "151px",
          margin: "0 30px",
        },
        "@media screen and (max-width:560px)": {
          maxWidth: "149px",
        },
      },
      bodyWrapper: {
        width: "calc(7.4vw + 29px)",
        minWidth: "86px",
        padding: "20px 20px 0 20px",
        textAlign: "center",
        display: "inline-block",
      },
      header: {},
      footer: {},
    },
  },
  {
    header: "",
    body: (
      <img
        src={ImageThree}
        width="100%"
        height="auto"
        margin="auto"
        alt="laptops for accessibility"
      />
    ),
    footer: "Workspaces where we can host our sessions",
    style: {
      cardContainer: {
        maxWidth: "214px",
        margin: "0px",
        "@media screen and (max-width: 1024px)": {
          maxWidth: "189px",
          margin: "0 30px",
        },
        "@media screen and (max-width:560px)": {
          maxWidth: "187px",
        },
      },
      bodyWrapper: {
        width: "calc(7.4vw + 37px)",
        minWidth: "94px",
        padding: "20px 20px 0 20px",
        display: "inline-block",
      },
      header: {},
      footer: {},
    },
  },
  {
    header: "",
    body: (
      <img
        src={ImageFour}
        width="100%"
        height="auto"
        alt="laptops for accessibility"
      />
    ),
    footer: "Access to additional training and workshops",
    style: {
      cardContainer: {
        maxWidth: "220px",
        margin: "0px",
        "@media screen and (max-width: 1024px)": {
          maxWidth: "196px",
          margin: "0 30px",
        },
      },
      bodyWrapper: {
        width: "calc(10.4vw + 35px)",
        minWidth: "115",
        padding: "20px 20px 0 20px",
        display: "inline-block",
      },
      header: {},
      footer: {},
    },
  },
]

// Cards flex container style object
const cardsContainerStyle = {
  maxWidth: "1024px",
  margin: "10px auto 10px auto",
  display: "flex",
  alignItems: "flex-end",
  flexWrap: "wrap",
  justifyContent: "space-between",
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "18px",
  color: "#FFFFFF",
  lineHeight: "27px",
  textAlign: "center",
  padding: "0 50px 125px 50px",
  "@media screen and (max-width: 1024px)": {
    maxWidth: "540px",
    fontSize: "16px",
    padding: "0 0 95px 0",
  },
  "@media screen and (max-width:560px)": {
    maxWidth: "300px",
    fontSize: "14px",
    lineHeight: "24px",
    justifyContent: "space-around",
    paddingBottom: "64px",
  },
}

const useStyles = makeStyles(theme => ({
  container: {
    height: "fit-content",
    width: "100%",
    backgroundColor: "#4529AE",
  },
  textBox: {
    width: "calc(14.7vw + 527px)",
    margin: "0px auto 16px auto",
    paddingTop: "96px",
    [theme.breakpoints.down("sm")]: {
      width: "calc(73vw + 75px)",
    },
    [theme.breakpoints.down("411")]: {
      width: "100vw",
    },
  },

  title: {
    color: "#FFFFFF",
    marginBottom: "16px",
    fontFamily: "Josefin Sans",
    fontWeight: 600,
    fontSize: "28px",
    lineHeight: "44px",
    textAlign: "center",

    // Tablet
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "38px",
    },

    // Mobile
    [theme.breakpoints.down("360")]: {
      fontSize: "20px",
      lineHeight: "32px",
    },
  },

  firstParagraphContainer: {
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  firstParagraph: {
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "31px",
    width: "calc(3.6vw + 504px)",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "27px",
      width: "calc(51vw + 142px)",
    },

    // Mobile
    [theme.breakpoints.down("411")]: {
      fontSize: "14px",
      lineHeight: "24px",
    },
  },

  secondParagraph: {
    color: "#FFFFFF",
    fontFamily: "Josefin Sans",
    fontWeight: 600,
    fontSize: "22px",
    lineHeight: "35px",
    width: "calc(3.6vw + 504px)",
    textAlign: "center",
    margin: "calc(4.7vw + 11px) auto 0 auto",

    // Tablet
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "38px",
      width: "calc(51vw + 142px)",
      marginTop: "48px",
    },

    [theme.breakpoints.down("542")]: {
      width: "80%",
      marginTop: "64px",
      fontSize: "18px",
      lineHeight: "29px",
    },
  },

  cheetohLeft: {
    width: "calc(1.39vw + 13px)",
    transform: "scaleX(-1) ",
  },

  cheetohRight: {
    width: "calc(1.39vw + 13px)",
  },
}))

export default function TheBottomLineSection() {
  const classes = useStyles()
  const title = "Partner with Us"
  const firstParagraph =
    "The Accelerator Project has a need for essential resources that will help us offer our program which inturn contributes to helping the LGBTQ homeless youth community."
  const secondParagraph = "In particular, we are generally in need of..."

  return (
    <div className={classes.container}>
      <div className={classes.textBox}>
        <div className={classes.title}>{title}</div>
        <div className={classes.firstParagraphContainer}>
          <Cheetoh className={classes.cheetohLeft} />
          <div className={classes.firstParagraph}>{firstParagraph}</div>
          <Cheetoh className={classes.cheetohRight} />
        </div>
        <div className={classes.secondParagraph}>{secondParagraph}</div>
      </div>
      <GroupedCards
        cardsContainerStyle={cardsContainerStyle}
        cardsJson={cardsJson}
      />
    </div>
  )
}
