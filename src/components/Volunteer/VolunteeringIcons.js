import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import VolunteeringIcons from "../../images/volunteers/watering-can.svg"

const useStyles = makeStyles(theme => ({
  imageWrapper: {
    position: "relative",
    width: "calc(36vw - 57px)",
    top: "calc(-240px - 1%)",
    left: "calc(61vw - 26px)",
    height: "calc(28.9vw + 39px)",
    paddingTop: "130px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "160px",
      height: "calc(5.6vw + 205px)",
    },
    [theme.breakpoints.down("542")]: {
      paddingTop: "295px",
      width: "calc(21vw + 58px)",
    },
  },
  image: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.up("1440")]: {
      width: "509px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(21vw + 58px)",
      [theme.breakpoints.down("542")]: {
        width: "calc(21vw + 58px)",
      },
    },
  },
}))

export default function VolunteeringIconsGroup() {
  const classes = useStyles()
  return (
    <div className={classes.imageWrapper}>
      <img
        src={VolunteeringIcons}
        className={classes.image}
        alt="Volunteering icons"
      />
    </div>
  )
}
