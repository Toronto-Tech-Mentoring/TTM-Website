import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import SVGLoad from "../SVGLoad/SVG"
import Hands from "../../images/sponsors/thankyou/hands.svg"
import SkylineFooter from "../../components/SkylineSVG/SkylineFooter"

const useStyles = makeStyles(theme => ({
  container: {
    height: "488px",
    width: "100%",
  },
  backgroundBlob: {
    position: "absolute",
    margin: "59px 0px 0px 77px",
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
  },
  handsStyle: {
    position: "absolute",
    margin: "240px 0px 0px 715px",
  },
}))

export default function ThankYou() {
  const classes = useStyles()
  return (
    <>
      <Grid className={classes.container}>
        <Grid>
          <svg
            width="1050"
            height="579"
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
        </Grid>

        <Grid className={classes.handsStyle}>
          <SVGLoad image={Hands} alt="sponsorStars" />
        </Grid>
      </Grid>

      <SkylineFooter />
    </>
  )
}
