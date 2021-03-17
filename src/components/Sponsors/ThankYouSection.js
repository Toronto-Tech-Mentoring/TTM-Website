import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import SVGLoad from "../SVGLoad/SVG"
import Hands from "../../images/sponsors/thankyou/hands.svg"
import SkylineFooter from "../../components/SkylineSVG/SkylineFooter"
import Socials from "./ThankYouSocials"

const useStyles = makeStyles(theme => ({
  container: {
    height: "488px",
    width: "100%",
    [theme.breakpoints.down("769")]: {
      height: "400px",
    },
    [theme.breakpoints.down("600")]: {
      height: "600px",
    },
  },
  backgroundBlob: {
    marginLeft: "5%",
    marginTop: "4%",
    height: "579px",
    width: "73%",
    [theme.breakpoints.down("1025")]: {
      marginTop: "0%",
    },
    [theme.breakpoints.down("769")]: {
      marginTop: "33px",
      width: "100%",
      marginLeft: "0px",
    },
    [theme.breakpoints.down("600")]: {
      visibility: "hidden",
      height: "0px",
      width: "0px",
    },
  },
  backgroundBlobMobile: {
    visibility: "hidden",
    margin: "0px 0px 0px 0px",
    height: "0",
    width: "0",
    [theme.breakpoints.down("600")]: {
      width: "100%",
      marginTop: "50%",
      height: "580px",
      visibility: "visible",
      position: "relative",
    },
    [theme.breakpoints.down("361")]: {
      width: "100%",
      height: "619px",
      marginTop: "60%",
    },
  },
  blobContainer: {
    [theme.breakpoints.down("769")]: {
      height: "450px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  headerText: {
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "28px",
    lineHeight: "42px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
    [theme.breakpoints.down("769")]: {
      width: "245px",
      height: "38px",
      fontSize: "22px",
    },
    [theme.breakpoints.down("600")]: {
      width: "245px",
      fontSize: "20px",
      lineHeight: "32px",
    },
  },
  bodyText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "27px",
    display: "flex",
    align: "center",
    color: "#000000",
    [theme.breakpoints.down("769")]: {
      width: "534px",
      height: "138px",
      fontSize: "16px",
    },
    [theme.breakpoints.down("600")]: {
      width: "330px",
      height: "169px",
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
  handsStyle: {
    position: "absolute",
    marginLeft: "50%",
    marginTop: "22%",
    width: "500px",
    width: "35%",
    height: "287px",
    [theme.breakpoints.down("1200")]: {
      marginTop: "30%",
    },
    [theme.breakpoints.down("769")]: {
      width: "40%",
      marginLeft: "60%",
      marginTop: "35%",
    },
    [theme.breakpoints.down("600")]: {
      width: "0",
      height: "0",
      visibility: "hidden",
    },
  },
  socials: {
    marginLeft: "100px",
  },
}))

export default function ThankYou() {
  const classes = useStyles()
  return (
    <>
      <Grid className={classes.container}>
        <Grid className={classes.handsStyle}>
          <SVGLoad image={Hands} alt="sponsorStars" />
        </Grid>
        <Grid className={classes.blobContainer}>
          <svg
            viewBox="0 0 1050 579"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classes.backgroundBlob}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M521 488C567.5 253.5 1061.55 184.328 1049.51 94.775C1039.12 17.508 376.834 -28.4169 253.7 19.6385C138.702 64.5186 76.93 81.7505 14.9521 183.386C-40.7705 274.764 73.6986 509.815 136 531.5C211.961 557.94 343.526 641.671 521 488Z"
              fill="#E8D1FF"
              fill-opacity="0.4"
            />
            <foreignObject
              x="130"
              y="67"
              width="140"
              height="42"
              className={classes.headerText}
            >
              Thank you!
            </foreignObject>

            <foreignObject
              x="130"
              y="120"
              width="672"
              height="53"
              className={classes.bodyText}
            >
              We are exceedingly grateful to our sponsors, who allow us to
              continue to offer life- changing tech mentoring through our
              program.
            </foreignObject>

            <foreignObject
              x="130"
              y="199"
              width="672"
              height="111"
              className={classes.bodyText}
            >
              Our work would not have been possible without the overwhelmingly
              positive and creative community of Civitech Toronto. Thank you to
              the amazing volunteers, sponsors and community partners who help
              make this space a reality so projects like ours can begin.
            </foreignObject>

            <foreignObject
              x="130"
              y="383"
              width="298"
              height="42"
              className={classes.headerText}
            >
              Help promote our work
            </foreignObject>

            <foreignObject
              x="130"
              y="425"
              width="463"
              height="27"
              className={classes.bodyText}
            >
              Follow us for updates and share with your networks.
            </foreignObject>
          </svg>

          <svg
            viewBox="0 0 360 619"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classes.backgroundBlobMobile}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M223.36 522.536C248.833 271.44 519.477 197.373 512.881 101.482C507.191 18.7471 144.384 -30.4279 76.9297 21.0283C13.9325 69.0846 -19.9071 87.5359 -53.8594 196.364C-84.3849 294.209 -21.6773 545.894 12.452 569.114C54.0642 597.425 126.137 687.082 223.36 522.536Z"
              fill="#E8D1FF"
              fill-opacity="0.4"
            />
            <foreignObject
              x="20"
              y="47"
              width="140"
              height="42"
              className={classes.headerText}
            >
              Thank you!
            </foreignObject>

            <foreignObject
              x="20"
              y="90"
              width="672"
              height="53"
              className={classes.bodyText}
            >
              We are exceedingly grateful to our sponsors, who allow us to
              continue to offer life- changing tech mentoring through our
              program.
            </foreignObject>

            <foreignObject
              x="20"
              y="168"
              width="672"
              height="111"
              className={classes.bodyText}
            >
              Our work would not have been possible without the overwhelmingly
              positive and creative community of Civitech Toronto. Thank you to
              the amazing volunteers, sponsors and community partners who help
              make this space a reality so projects like ours can begin.
            </foreignObject>

            <foreignObject
              x="20"
              y="414"
              width="298"
              height="42"
              className={classes.headerText}
            >
              Help promote our work
            </foreignObject>

            <foreignObject
              x="20"
              y="451"
              width="463"
              height="27"
              className={classes.bodyText}
              style={{ width: "259px" }}
            >
              Follow us for updates and share with your networks.
            </foreignObject>
          </svg>
        </Grid>
      </Grid>

      <Socials className={classes.socials} />
      <SkylineFooter />
    </>
  )
}
