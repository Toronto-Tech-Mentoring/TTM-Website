import React from "react"
import { makeStyles } from "@material-ui/core/styles"


import BoldedHeader from "../BoldedHeaderText/BoldedHeader"
import TextBox from "../TextBox/TextBox"
import Content from "../DecoratedText/DecoratedText"
import CheetoLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetoRight from "../../images/cheetohs/cheetohRight.svg"
import { useStyles } from "../Cheetos/cheetohStyle"
import { SkylineHeader as SkylineHeaderSVG } from "../SkylineSVG"

const useGenericStyles = makeStyles(theme => ({
  textContent:{
    textAlign: "left",
    marginTop: "-5px",
  }
}))

export default function VolunteerWithUs() {
  const cheetohclasses = useStyles()
  const classes = useGenericStyles()
  const headerText = "Volunteer With Us"
  const content =
    "Toronto Tech Mentoring is a group of dedicated volunteers who want to help vulnerable young people access tech skills. Our volunteer team comes from a wide range of backgrounds, bringing a myriad of different life experiences and skill sets. "

  return (
    <div>
      <CheetoLeft
        className={cheetohclasses.cheetohLeftMirrored}
        style={{ "margin-top": "-1em" }}
        alt="cheetohLeft"
      />
      <TextBox
        style={{
          "margin-top": "135px",
          "margin-right": "calc(37vw - 138px)",
          "padding-right": "0",
        }}
      >
        <BoldedHeader
          headerText={headerText}
          style={{ "font-size": "calc(1.3vw + 1em)" }}
        />
        <Content
          content={content}
          className={classes.textContent}
          style={{ "text-align": "left", "margin-top": "-5px" }}
        />
        <CheetoRight
          className={cheetohclasses.cheetohRightMirrored}
          style={{ "margin-top": "calc(1vh + 1px)", "margin-right": "auto" }}
          alt="cheetohRight"
        />
      </TextBox>
      <SkylineHeaderSVG />
    </div>
  )
}
