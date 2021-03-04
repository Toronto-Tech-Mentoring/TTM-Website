import React from "react"
import { makeStyles } from "@material-ui/core"

import hands from "../../images/sponsors/how-you-can-support/hands.svg"
import laptops from "../../images/sponsors/how-you-can-support/laptops.svg"
import software from "../../images/sponsors/how-you-can-support/software.svg"
import sessions from "../../images/sponsors/how-you-can-support/sessions.svg"
import workshops from "../../images/sponsors/how-you-can-support/workshops.svg"

const useStyles = makeStyles(theme => ({
  container: {
    height: "1531px",
    width: "100%",
    background: "#4529AE",
    marginTop: "-5px",
  },
  headerStyle: {
    position: "absolute",
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    color: "#FFFFFF",
    fontSize: "36px",
    lineHeight: "57px",
    fontWeight: "600",
    margin: "96px 0px 0px 222px",
    textDecoration: "underline",
    textDecorationColor: "#FF7500",
    textUnderlinePosition: "under",
  },
  subHeaderStyle: {
    position: "absolute",
    fontFamily: "Josefin Sans",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: "28px",
    lineHeight: "42px",
    color: "#FFFFFF",
  },
  textStyle: {
    position: "absolute",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "27px",
    color: "#FFFFFF",
  },
  paypalStyle: {
    margin: "305px 0px 0px 225px",
    width: "383px",
    height: "42px",
  },
  paypalInfoStyle: {
    margin: "348px 0px 0px 225px",
    width: "485px",
    height: "81px",
  },
  handsStyle: {
    position: "absolute",
    margin: "259px 0px 0px 920px",
  },
  donateStyle: {
    position: "absolute",
    width: "180px",
    height: "50px",
    borderRadius: "30px",
    borderWidth: "0px",
    backgroundColor: "#FF7500",
    margin: "467px 0px 0px 933px",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#FFFFFF",
  },
  kindStyle: {
    margin: "639px 0px 0px 225px",
    width: "383px",
    height: "42px",
  },
  kindInfoStyle: {
    margin: "684px 0px 0px 225px",
    width: "556px",
    height: "91px",
  },
  needStyle: {
    position: "absolute",
    fontFamily: "Josefin Sans",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: "22px",
    lineHeight: "35px",
    color: "#FFFFFF",
    margin: "793px 0px 0px 225px",
  },
  laptopStyle: {
    position: "absolute",
    margin: "887px 0px 0px 244px",
  },
  serverStyle: {
    position: "absolute",
    margin: "889px 0px 0px 475px",
  },
  sessionsStyle: {
    position: "absolute",
    margin: "866px 0px 0px 736px",
  },
  workshopStyle: {
    position: "absolute",
    margin: "887px 0px 0px 991px",
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
  },
  laptopsText: {
    position: "absolute",
    margin: "1053px 0px 0px 222px",
    width: "170px",
    height: "43px",
  },
  serverText: {
    position: "absolute",
    margin: "1056px 0px 0px 453px",
    width: "180px",
    height: "37px",
  },
  sessionsText: {
    position: "absolute",
    margin: "1056px 0px 0px 698px",
    width: "214px",
    height: "37px",
  },
  workshopsText: {
    position: "absolute",
    margin: "1051px 0px 0px 973px",
    width: "220px",
    height: "46px",
  },
  volunteerStyle: {
    margin: "1252px 0 0 225px",
  },
  volunteerInfoStyle: {
    position: "absolute",
    margin: "1294px 0px 0px 225px",
    width: "631px",
    height: "68px",
  },
  contactButton: {
    position: "absolute",
    width: "180px",
    height: "50px",
    borderRadius: "30px",
    borderWidth: "0px",
    backgroundColor: "#FFFFFF",
    margin: "1394px 0px 0px 223px",
    fontFamily: "Poppins",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#873FE2",
    textAlign: "center",
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
        <h2 className={`${classes.subHeaderStyle} ${classes.paypalStyle}`}>
          {paypal}
        </h2>
        <p className={`${classes.textStyle} ${classes.paypalInfoStyle}`}>
          {paypalInfo}
        </p>
        <img src={hands} alt="handsSVG" className={classes.handsStyle} />
        <button className={classes.donateStyle}>Donate</button>
      </div>

      <div>
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
      </div>
    </div>
  )
}
