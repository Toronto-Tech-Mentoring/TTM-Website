import React from "react"
import { makeStyles } from "@material-ui/core"

import hands from "../../images/sponsors/how-you-can-support/hands.svg"
import laptops from "../../images/sponsors/how-you-can-support/laptops.svg"
import software from "../../images/sponsors/how-you-can-support/software.svg"
import sessions from "../../images/sponsors/how-you-can-support/sessions.svg"
import workshops from "../../images/sponsors/how-you-can-support/workshops.svg"
import paypalImg from "../../images/sponsors/how-you-can-support/paypal.svg"

const useStyles = makeStyles(theme => ({
  container: {
    height: "1531px",
    width: "100%",
    background: "#4529AE",
    marginTop: "-5px",
    [theme.breakpoints.down("1000")]: {
      height: "1713px",
    },
    [theme.breakpoints.down("361")]: {
      height: "1445px",
    },
  },
  headerStyle: {
    position: "absolute",
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    color: "#FFFFFF",
    fontSize: "36px",
    lineHeight: "57px",
    fontWeight: "600",
    margin: "96px 0px 0px 15%",
    textDecoration: "underline",
    textDecorationColor: "#FF7500",
    textUnderlinePosition: "under",
    width: "auto",
    [theme.breakpoints.down("1000")]: {
      fontSize: "24px",
      lineHeight: "41px",
      margin: "131px 0px 0px 15%",
    },
    [theme.breakpoints.down("361")]: {
      fontSize: "20px",
      lineHeight: "32px",
      margin: "64px 0px 0px 4%",
    },
  },
  subHeaderStyle: {
    position: "absolute",
    fontFamily: "Josefin Sans",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: "28px",
    lineHeight: "42px",
    color: "#FFFFFF",
    width: "auto",
    [theme.breakpoints.down("1000")]: {
      fontSize: "22px",
      lineHeight: "38px",
    },
    [theme.breakpoints.down("361")]: {
      fontSize: "18px",
      lineHeight: "29px",
    },
  },
  textStyle: {
    position: "absolute",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "27px",
    color: "#FFFFFF",
    [theme.breakpoints.down("1000")]: {
      fontSize: "16px",
      lineHeight: "27px",
    },
    [theme.breakpoints.down("361")]: {
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
  paypalStyle: {
    margin: "305px 0px 0px 15%",
    height: "42px",
    [theme.breakpoints.down("1000")]: {
      margin: "209px 0px 0px 15%",
    },
    [theme.breakpoints.down("361")]: {
      margin: "125px 0px 0px 4%",
    },
  },
  paypalInfoStyle: {
    margin: "348px 0px 0px 15%",
    // width: "485px",
    width: "35%",
    height: "81px",
    [theme.breakpoints.down("1000")]: {
      margin: "255px 0px 0px 15%",
      width: "63%",
    },
    [theme.breakpoints.down("361")]: {
      margin: "162px 0px 0px 4%",
      //   width: "328px",
      width: "95%",
    },
  },
  paypalImage: {
    visibility: "hidden",
    position: "absolute",
    [theme.breakpoints.down("1000")]: {
      margin: "376px 0px 0px 44%",
      visibility: "visible",
    },
    [theme.breakpoints.down("651")]: {
      visibility: "hidden",
    },
  },
  handsStyle: {
    position: "absolute",
    margin: "259px 0px 0px 64%",
    [theme.breakpoints.down("1000")]: {
      visibility: "hidden",
    },
  },
  donateStyle: {
    position: "absolute",
    width: "180px",
    height: "50px",
    borderRadius: "30px",
    borderWidth: "0px",
    backgroundColor: "#FF7500",
    margin: "467px 0px 0px 65%",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#FFFFFF",
    [theme.breakpoints.down("1000")]: {
      margin: "418px 0px 0px 15%",
    },
    [theme.breakpoints.down("651")]: {
      visibility: "hidden",
    },
  },
  kindStyle: {
    margin: "639px 0px 0px 15%",
    width: "383px",
    height: "42px",
    [theme.breakpoints.down("1000")]: {
      margin: "582px 0px 0px 15%",
    },
    [theme.breakpoints.down("361")]: {
      margin: "348px 0px 0px 4%",
    },
  },
  kindInfoStyle: {
    margin: "684px 0px 0px 15%",
    // width: "556px",
    width: "38%",
    height: "91px",
    [theme.breakpoints.down("1000")]: {
      margin: "628px 0px 0px 15%",
      width: "70%",
    },
    [theme.breakpoints.down("361")]: {
      margin: "385px 0px 0px 4%",
      width: "90%",
      //   width: "327px",
    },
  },
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
    [theme.breakpoints.down("1000")]: {
      fontSize: "20px",
      lineHeight: "34px",
      margin: "751px 0px 0px 15%",
      width: "60%",
    },
    [theme.breakpoints.down("361")]: {
      fontSize: "16px",
      lineHeight: "25px",
      margin: "545px 0px 0px 4%",
      width: "95%",
      //   width: "310px",
    },
  },
  laptopStyle: {
    position: "absolute",
    margin: "887px 0px 0px 17%",
    [theme.breakpoints.down("1000")]: {
      margin: "845px 0px 0px 26%",
      height: "106px",
      width: "97px",
    },
    [theme.breakpoints.down("361")]: {
      margin: "605px 0px 0px 15%",
    },
  },
  serverStyle: {
    position: "absolute",
    margin: "889px 0px 0px 33%",
    [theme.breakpoints.down("1000")]: {
      margin: "841px 0px 0px 60%",
      height: "126px",
      width: "136px",
    },
    [theme.breakpoints.down("361")]: {
      margin: "593px 0px 0px 57%",
    },
  },
  sessionsStyle: {
    position: "absolute",
    margin: "866px 0px 0px 51%",
    [theme.breakpoints.down("1000")]: {
      margin: "1040px 0px 0px 21%",
      height: "200px",
      width: "143px",
    },
    [theme.breakpoints.down("361")]: {
      margin: "800px 0px 0px 11%",
      width: "115px",
    },
  },
  workshopStyle: {
    position: "absolute",
    margin: "887px 0px 0px 69%",
    [theme.breakpoints.down("1000")]: {
      margin: "1093px 0px 0px 57%",
    },
    [theme.breakpoints.down("361")]: {
      margin: "857px 0px 0px 52%",
      width: "159px",
    },
  },
  imageText: {
    position: "absolute",
    fontFamily: "Poppins",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#FFFFFF",
    textAlign: "center",
    [theme.breakpoints.down("1000")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("361")]: {
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
  laptopsText: {
    position: "absolute",
    margin: "1056px 0px 0px 15%",
    width: "170px",
    height: "43px",
    [theme.breakpoints.down("1000")]: {
      margin: "983px 0px 0px 16%",
      width: "255px",
    },
    [theme.breakpoints.down("361")]: {
      margin: "731px 0px 0px 5%",
      width: "149px",
    },
  },
  serverText: {
    position: "absolute",
    margin: "1056px 0px 0px 31%",
    width: "180px",
    height: "37px",
    [theme.breakpoints.down("1000")]: {
      margin: "983px 0px 0px 52%",
      width: "252px",
    },
    [theme.breakpoints.down("361")]: {
      margin: "731px 0px 0px 52%",
      width: "156px",
    },
  },
  sessionsText: {
    position: "absolute",
    margin: "1056px 0px 0px 48%",
    width: "214px",
    height: "37px",
    [theme.breakpoints.down("1200")]: {
      margin: "1056px 0px 0px 50%",
      //   width: "15%",
      width: "165px",
    },
    [theme.breakpoints.down("1000")]: {
      margin: "1246px 0px 0px 16%",
      //   width: "255px",
      width: "26%",
    },
    [theme.breakpoints.down("361")]: {
      margin: "990px 0px 0px 5%",
      width: "43%",
      //   width: "155px",
    },
  },
  workshopsText: {
    position: "absolute",
    margin: "1056px 0px 0px 68%",
    width: "220px",
    height: "46px",
    [theme.breakpoints.down("1200")]: {
      margin: "1056px 0px 0px 69%",
      width: "17%",
      //   width: "200px",
    },
    [theme.breakpoints.down("1000")]: {
      margin: "1246px 0px 0px 52%",
      //   width: "254px",
      width: "26%",
    },
    [theme.breakpoints.down("361")]: {
      margin: "990px 0px 0px 52%",
      //   width: "156px",
      width: "45%",
    },
  },
  volunteerStyle: {
    margin: "1252px 0 0 15%",
    [theme.breakpoints.down("1000")]: {
      margin: "1439px 0px 0px 15%",
    },
    [theme.breakpoints.down("361")]: {
      margin: "1178px 0px 0px 4%",
    },
  },
  volunteerInfoStyle: {
    position: "absolute",
    margin: "1294px 0px 0px 15%",
    // width: "631px",
    width: "40%",
    height: "68px",
    [theme.breakpoints.down("1000")]: {
      margin: "1485px 0px 0px 15%",
      width: "75%",
    },
    [theme.breakpoints.down("361")]: {
      margin: "1215px 0px 0px 4%",
      //   width: "330px",
      width: "92%",
    },
  },
  contactButton: {
    position: "absolute",
    width: "180px",
    height: "50px",
    borderRadius: "30px",
    borderWidth: "0px",
    backgroundColor: "#FFFFFF",
    margin: "1394px 0px 0px 15%",
    fontFamily: "Poppins",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#873FE2",
    textAlign: "center",
    [theme.breakpoints.down("1000")]: {
      margin: "1577px 0px 0px 15%",
    },
    [theme.breakpoints.down("361")]: {
      margin: "1342px 0px 0px 4%",
    },
  },
}))

export default function HowYouCanSupport() {
  const classes = useStyles()

  const header = "How You Can Support Us"
  const paypal = "1. Donate through our PayPal"
  const paypalInfo =
    "Monetary donations provide us the most flexibility to deliver our services to meet the exact needs of our participants how and when they need it."
  const inKind = "2. Donate in-kind"
  const inKindInfo =
    "Toronto Tech Mentoring has a need for essential resources that will help us offer our program which in turn contributes to helping the LGBTQ homeless youth community."
  const needHeader = "In particular, we are generally in need of..."
  const volunteer = "3. Volunteer Your Time"
  const volunteerInfo =
    "If you are a company or organization interested in donating staff time to support our program, or have other ideas, please get in touch."

  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.headerStyle}>{header}</h1>
        {/* <h2 className={`${classes.subHeaderStyle} ${classes.paypalStyle}`}>
          {paypal}
        </h2>
        <p className={`${classes.textStyle} ${classes.paypalInfoStyle}`}>
          {paypalInfo}
        </p>
        <img src={hands} alt="handsSVG" className={classes.handsStyle} />
        <button className={classes.donateStyle}>Donate</button>
        <img src={paypalImg} alt="paypalSVG" className={classes.paypalImage} /> */}
      </div>

      {/* <div>
        <h2 className={`${classes.subHeaderStyle} ${classes.kindStyle}`}>
          {inKind}
        </h2>
        <p className={`${classes.textStyle} ${classes.kindInfoStyle}`}>
          {inKindInfo}
        </p>
      </div>

      <div>
        <h3 className={classes.needStyle}>{needHeader}</h3>
        <img src={laptops} alt="laptopSVG" className={classes.laptopStyle} />
        <p className={`${classes.imageText} ${classes.laptopsText}`}>
          Laptops for accessability
        </p>
        <img src={software} alt="serverSVG" className={classes.serverStyle} />
        <p className={`${classes.imageText} ${classes.serverText}`}>
          Software or server subscriptions
        </p>
        <img
          src={sessions}
          alt="sessionsSVG"
          className={classes.sessionsStyle}
        />
        <p className={`${classes.imageText} ${classes.sessionsText}`}>
          Workspaces where we can host our sessions
        </p>
        <img
          src={workshops}
          alt="workshopsSVG"
          className={classes.workshopStyle}
        />
        <p className={`${classes.imageText} ${classes.workshopsText}`}>
          Access to additional training and workshops
        </p>
      </div>

      <div>
        <h2 className={`${classes.subHeaderStyle} ${classes.volunteerStyle}`}>
          {volunteer}
        </h2>
        <p className={`${classes.textStyle} ${classes.volunteerInfoStyle}`}>
          {volunteerInfo}
        </p>
        <button className={classes.contactButton}>Contact Us</button>
      </div> */}
    </div>
  )
}
