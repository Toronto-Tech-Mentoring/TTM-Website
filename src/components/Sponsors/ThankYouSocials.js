import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import Instagram from "@material-ui/icons/Instagram"
import Twitter from "@material-ui/icons/Twitter"
import Linkedin from "@material-ui/icons/Linkedin"

const useStyles = makeStyles(theme => ({
  container: {
    width: "166px",
    display: "flex",
    justifyContent: "space-around",
  },
  avatar: {
    width: "50px",
    height: "50px",
    backgroundColor: "#4529AE",
  },
}))

export default function Socials() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <a href="https://www.instagram.com/civictechto">
        <Avatar className={classes.avatar}>
          <Instagram />
        </Avatar>
      </a>
      <a href="https://twitter.com/CivicTechTO">
        <Avatar className={classes.avatar}>
          <Twitter />
        </Avatar>
      </a>
      <a href="https://www.linkedin.com/company/civictechto/">
        <Avatar className={classes.avatar}>
          <Linkedin />
        </Avatar>
      </a>
    </div>
  )
}
