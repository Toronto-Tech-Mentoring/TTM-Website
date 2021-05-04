import React from "react"
import { makeStyles } from "@material-ui/core"

import Hands from "../../images/sponsors/how-you-can-support/hands.svg"
import DonateIcons from "./DonateIcons"
import PaypalImg from "../../images/sponsors/how-you-can-support/paypal.svg"
import CustomButton from "../CustomButton"

const useStyles = makeStyles(theme => ({
  container: {
    height: "1531px",
    width: "100%",
    background: "#4529AE",
    marginTop: "-5px",
    [theme.breakpoints.down("1001")]: {
      height: "1713px",
    },
    [theme.breakpoints.down("550")]: {
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
    [theme.breakpoints.down("1001")]: {
      fontSize: "24px",
      lineHeight: "41px",
      margin: "131px 0px 0px 15%",
    },
    [theme.breakpoints.down("550")]: {
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
    [theme.breakpoints.down("1001")]: {
      fontSize: "22px",
      lineHeight: "38px",
    },
    [theme.breakpoints.down("550")]: {
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
    [theme.breakpoints.down("1001")]: {
      fontSize: "16px",
      lineHeight: "27px",
    },
    [theme.breakpoints.down("550")]: {
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
  paypalStyle: {
    margin: "305px 0px 0px 15%",
    height: "42px",
    [theme.breakpoints.down("1001")]: {
      margin: "209px 0px 0px 15%",
    },
    [theme.breakpoints.down("550")]: {
      margin: "125px 0px 0px 4%",
    },
  },
  paypalInfoStyle: {
    margin: "348px 0px 0px 15%",
    width: "35%",
    height: "81px",
    [theme.breakpoints.down("1001")]: {
      margin: "255px 0px 0px 15%",
      width: "63%",
    },
    [theme.breakpoints.down("550")]: {
      margin: "162px 0px 0px 4%",
      width: "95%",
    },
  },
  paypalImage: {
    visibility: "hidden",
    position: "absolute",
    width: "auto",
    [theme.breakpoints.down("1001")]: {
      margin: "376px 0px 0px 44%",
      visibility: "visible",
    },
    [theme.breakpoints.down("651")]: {
      margin: "376px 0px 0px 50%",
    },
    [theme.breakpoints.down("550")]: {
      visibility: "hidden",
      margin: "0px 0px 0px 0px",
    },
  },
  handsStyle: {
    position: "absolute",
    margin: "259px 0px 0px 64%",
    [theme.breakpoints.down("1001")]: {
      visibility: "hidden",
      margin: "0px 0px 0px 0px",
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
    [theme.breakpoints.down("1001")]: {
      margin: "418px 0px 0px 15%",
    },
    [theme.breakpoints.down("550")]: {
      visibility: "hidden",
      margin: "0px 0px 0px 0px",
    },
  },
  kindStyle: {
    margin: "639px 0px 0px 15%",
    width: "auto",
    height: "42px",
    [theme.breakpoints.down("1001")]: {
      margin: "582px 0px 0px 15%",
    },
    [theme.breakpoints.down("550")]: {
      margin: "348px 0px 0px 4%",
    },
  },
  kindInfoStyle: {
    margin: "684px 0px 0px 15%",
    width: "38%",
    height: "91px",
    [theme.breakpoints.down("1001")]: {
      margin: "628px 0px 0px 15%",
      width: "70%",
    },
    [theme.breakpoints.down("550")]: {
      margin: "385px 0px 0px 4%",
      width: "90%",
    },
  },
  volunteerStyle: {
    margin: "1252px 0 0 15%",
    [theme.breakpoints.down("1001")]: {
      margin: "1439px 0px 0px 15%",
    },
    [theme.breakpoints.down("550")]: {
      margin: "1178px 0px 0px 4%",
    },
  },
  volunteerInfoStyle: {
    position: "absolute",
    margin: "1294px 0px 0px 15%",
    width: "40%",
    height: "68px",
    [theme.breakpoints.down("1001")]: {
      margin: "1485px 0px 0px 15%",
      width: "75%",
    },
    [theme.breakpoints.down("550")]: {
      margin: "1215px 0px 0px 4%",
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
    cursor: "pointer",
    [theme.breakpoints.down("1001")]: {
      margin: "1577px 0px 0px 15%",
      width: "153px",
      height: "40px",
      fontSize: "16px",
    },
    [theme.breakpoints.down("550")]: {
      margin: "1326px 0px 0px 4%",
      width: "120px",
      height: "32px",
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
}))

export default function HowYouCanSupport() {
  const classes = useStyles()

  const header = "How You Can Support Us"
  const paypal = "1. Donate through our PayPal"
  const paypalInfo =
    "Monetary donations provide us the most flexibility to deliver our services to meet the exact needs of our participants how and when they need it."
  const inKind = "2. Donate in kind"
  const inKindInfo =
    "Toronto Tech Mentoring has a need for essential resources that will help us offer our program which in turn contributes to helping the LGBTQ homeless youth community."
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
        <img src={Hands} alt="handsSVG" className={classes.handsStyle} />
        <button className={classes.donateStyle}>Donate</button>
        <img src={PaypalImg} alt="paypalSVG" className={classes.paypalImage} />
      </div>

      <div>
        <h2 className={`${classes.subHeaderStyle} ${classes.kindStyle}`}>
          {inKind}
        </h2>
        <p className={`${classes.textStyle} ${classes.kindInfoStyle}`}>
          {inKindInfo}
        </p>
      </div>

      <DonateIcons />

      <div>
        <h2 className={`${classes.subHeaderStyle} ${classes.volunteerStyle}`}>
          {volunteer}
        </h2>
        <p className={`${classes.textStyle} ${classes.volunteerInfoStyle}`}>
          {volunteerInfo}
        </p>
        <CustomButton
          text={"Contact Us"}
          customClass={classes.contactButton}
          link="/contact"
        />
      </div>
    </div>
  )
}
