import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import VolunteeringIcons from "../../images/volunteers/watering-can.svg"

const useStyles = makeStyles(theme => ({
  imageWrapper: {
    position: "relative",
    top: "0",
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

export default function VolunteeringIconsGroup(props) {
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
