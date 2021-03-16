import React from "react"
import { makeStyles } from "@material-ui/core"

import GroupedCards from "../shared/GroupedCards"
import laptops from "../../images/sponsors/how-you-can-support/laptops.svg"
import software from "../../images/sponsors/how-you-can-support/software.svg"
import sessions from "../../images/sponsors/how-you-can-support/sessions.svg"
import workshops from "../../images/sponsors/how-you-can-support/workshops.svg"

const cardsJson = [
  {
    header: "",
    body: <img src={laptops} alt="laptops for accessability" />,
    footer: "Laptops for accessability",
    style: {
      cardContainer: {},
      bodyWrapper: {
        position: "absolute",
        margin: "888px 0px 0px 17%",
        width: "125px",
        height: "137px",
        "@media screen and (max-width: 1000px)": {
          margin: "845px 0px 0px 24%",
          width: "97px",
          height: "106px",
        },
        "@media screen and (max-width: 768px)": {
          margin: "845px 0px 0px 26%",
        },
        "@media screen and (max-width: 549px)": {
          margin: "605px 0px 0px 15%",
        },
      },
      header: {},
      footer: {
        position: "absolute",
        fontFamily: "Poppins",
        fontWeight: "500",
        fontStyle: "normal",
        fontSize: "18px",
        lineHeight: "27px",
        color: "#FFFFFF",
        textAlign: "center",
        margin: "1056px 0px 0px 15%",
        width: "170px",
        height: "43px",
        "@media screen and (max-width: 1200px)": {
          margin: "1056px 0px 0px 14%",
        },
        "@media screen and (max-width: 1000px)": {
          margin: "983px 0px 0px 15%",
          width: "255px",
          fontSize: "16px",
        },
        "@media screen and (max-width: 768px)": {
          margin: "983px 0px 0px 122px",
        },
        "@media screen and (max-width: 700px)": {
          width: "149px",
          margin: "983px 0px 0px 21%",
        },
        "@media screen and (max-width: 549px)": {
          margin: "731px 0px 0px 8%",
          fontSize: "14px",
          lineHeight: "24px",
        },
      },
    },
  },
  {
    header: "",
    body: <img src={software} alt="server subscriptions" />,
    footer: "Software or server subscriptions",
    style: {
      cardContainer: {},
      bodyWrapper: {
        position: "absolute",
        margin: "889px 0px 0px 33%",
        width: "136px",
        height: "127px",
        "@media screen and (max-width: 1000px)": {
          margin: "841px 0px 0px 61%",
          height: "126px",
          width: "136px",
        },
        "@media screen and (max-width: 549px)": {
          margin: "593px 0px 0px 55%",
        },
      },
      header: {},
      footer: {
        position: "absolute",
        fontFamily: "Poppins",
        fontWeight: "500",
        fontStyle: "normal",
        fontSize: "18px",
        lineHeight: "27px",
        color: "#FFFFFF",
        textAlign: "center",
        margin: "1056px 0px 0px 31%",
        width: "180px",
        height: "37px",
        "@media screen and (max-width: 1000px)": {
          margin: "983px 0px 0px 54%",
          width: "252px",
          fontSize: "16px",
        },
        "@media screen and (max-width: 768px)": {
          margin: "983px 0px 0px 53%",
        },
        "@media screen and (max-width: 549px)": {
          margin: "731px 0px 0px 51%",
          width: "156px",
          fontSize: "14px",
          lineHeight: "24px",
        },
      },
    },
  },
  {
    header: "",
    body: <img src={sessions} alt="workspaces to host sessions" />,
    footer: "Workspaces where we can host our sessions",
    style: {
      cardContainer: {},
      bodyWrapper: {
        position: "absolute",
        margin: "863px 0px 0px 51%",
        width: "143px",
        height: "123px",
        "@media screen and (max-width: 1000px)": {
          margin: "1093px 0px 0px 21%",
          height: "200px",
          width: "143px",
        },
        "@media screen and (max-width: 768px)": {
          margin: "1093px 0px 0px 21%",
        },
        "@media screen and (max-width: 549px)": {
          margin: "853px 0px 0px 10%",
          width: "115px",
        },
      },
      header: {},
      footer: {
        position: "absolute",
        fontFamily: "Poppins",
        fontWeight: "500",
        fontStyle: "normal",
        fontSize: "18px",
        lineHeight: "27px",
        color: "#FFFFFF",
        textAlign: "center",
        margin: "1056px 0px 0px 49%",
        width: "214px",
        height: "37px",
        "@media screen and (max-width: 1200px)": {
          margin: "1056px 0px 0px 50%",
          width: "165px",
        },
        "@media screen and (max-width: 1000px)": {
          margin: "1246px 0px 0px 17%",
          width: "255px",
          fontSize: "16px",
        },
        "@media screen and (max-width: 768px)": {
          margin: "1246px 0px 0px 16%",
          width: "255px",
          fontSize: "16px",
        },
        "@media screen and (max-width: 700px)": {
          width: "156px",
          margin: "1246px 0px 0px 21%",
        },
        "@media screen and (max-width: 549px)": {
          margin: "990px 0px 0px 6%",
          width: "155px",
          fontSize: "14px",
          lineHeight: "24px",
        },
      },
    },
  },
  {
    header: "",
    body: <img src={workshops} alt="additional workshops" />,
    footer: "Access to additional training and workshops",
    style: {
      cardContainer: {},
      bodyWrapper: {
        position: "absolute",
        margin: "890px 0px 0px 69%",
        width: "185px",
        height: "121px",
        "@media screen and (max-width: 1000px)": {
          margin: "1110px 0px 0px 58%",
        },
        "@media screen and (max-width: 768px)": {
          margin: "1110px 0px 0px 57%",
        },
        "@media screen and (max-width: 549px)": {
          margin: "857px 0px 0px 52%",
          width: "159px",
          height: "103px",
        },
      },
      header: {},
      footer: {
        position: "absolute",
        margin: "1056px 0px 0px 68%",
        width: "220px",
        height: "46px",
        fontFamily: "Poppins",
        fontWeight: "500",
        fontStyle: "normal",
        fontSize: "18px",
        lineHeight: "27px",
        color: "#FFFFFF",
        textAlign: "center",
        "@media screen and (max-width: 1200px)": {
          margin: "1056px 0px 0px 69%",
          width: "200px",
        },
        "@media screen and (max-width: 1000px)": {
          margin: "1246px 0px 0px 55%",
          width: "254px",
          fontSize: "16px",
        },
        "@media screen and (max-width: 768px)": {
          margin: "1246px 0px 0px 52%",
          width: "255px",
        },
        "@media screen and (max-width: 700px)": {
          margin: "1246px 0px 0px 59%",
          width: "156px",
        },
        "@media screen and (max-width: 549px)": {
          margin: "990px 0px 0px 52%",
          width: "156px",
          fontSize: "14px",
          lineHeight: "24px",
        },
      },
    },
  },
]

const cardsContainerStyle = {}

const useStyles = makeStyles(theme => ({
  needStyle: {
    position: "absolute",
    fontFamily: "Josefin Sans",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: "22px",
    lineHeight: "35px",
    color: "#FFFFFF",
    width: "auto",
    margin: "793px 0px 0px 15%",
    [theme.breakpoints.down("1245")]: {
      margin: "810px 0px 0px 15%",
    },
    [theme.breakpoints.down("1001")]: {
      fontSize: "20px",
      lineHeight: "34px",
      margin: "751px 0px 0px 15%",
      width: "60%",
    },
    [theme.breakpoints.down("650")]: {
      width: "75%",
    },
    [theme.breakpoints.down("550")]: {
      fontSize: "16px",
      lineHeight: "25px",
      margin: "545px 0px 0px 4%",
      width: "95%",
    },
  },
}))

export default function DonateIcons() {
  const classes = useStyles()
  const needHeader = "In particular, we are generally in need of..."

  return (
    <div>
      <h3 className={classes.needStyle}>{needHeader}</h3>
      <GroupedCards
        cardsContainerStyle={cardsContainerStyle}
        cardsJson={cardsJson}
      />
    </div>
  )
}
