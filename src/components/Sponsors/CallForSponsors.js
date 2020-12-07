import React from "react"

import BoldedHeader from "../BoldedHeaderText/BoldedHeader"
import TextBox from "../TextBox/TextBox"
import Content from "../DecoratedText/DecoratedText"
import CheetoLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetoRight from "../../images/cheetohs/cheetohRight.svg"
import { useStyles } from "../Cheetos/cheetohStyle"
import { SkylineHeader as SkylineHeaderSVG } from "../SkylineSVG"

export default function CallForSponsors() {
  const classes = useStyles()
  const headerText = "Call for Sponsors"
  const content =
    "The Accelerator Project is an entirely volunteer-run organization. All donations go directly into offering tech mentoring to young people who have faced adversity."

  return (
    <div>
      <CheetoLeft
        className={classes.cheetohLeftMirrored}
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
          style={{ "text-align": "left", "margin-top": "-5px" }}
        />
        <CheetoRight
          className={classes.cheetohRightMirrored}
          style={{ "margin-top": "calc(1vh + 1px)", "margin-right": "auto" }}
          alt="cheetohRight"
        />
      </TextBox>
      <SkylineHeaderSVG />
    </div>
  )
}
