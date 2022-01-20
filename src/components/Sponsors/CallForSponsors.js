import React from "react"

import BoldedHeader from "../BoldedHeaderText/BoldedHeader"
import TextBox from "../TextBox/TextBox"
import Content from "../DecoratedText/DecoratedText"
import { ReactComponent as CheetoLeft } from "../../images/cheetohs/cheetohLeft.svg"
import { ReactComponent as CheetoRight } from "../../images/cheetohs/cheetohRight.svg"
import { useStyles } from "../Cheetos/cheetohStyle"
import { SkylineHeader as SkylineHeaderSVG } from "../SkylineSVG"

export default function CallForSponsors() {
  const classes = useStyles()
  const headerText = "Sponsor Us"
  const content =
    "Toronto Tech Mentoring is an entirely volunteer-run organization. All donations go directly to providing resources to help deliver our tech mentoring program. Help us continue to give young people a chance to access tech skills and change their lives."

  return (
    <div>
      <CheetoLeft
        className={classes.cheetohLeftMirrored}
        style={{ marginTop: "-1em" }}
        alt="cheetohLeft"
      />
      <TextBox
        style={{
          marginTop: "135px",
          marginRight: "calc(37vw - 100px)",
          paddingRight: "0",
        }}
      >
        <BoldedHeader
          headerText={headerText}
          style={{ fontSize: "calc(1.3vw + 1em)" }}
        />
        <Content
          content={content}
          style={{ textAlign: "left", marginTop: "-5px" }}
        />
        <CheetoRight
          className={classes.cheetohRightMirrored}
          style={{ marginTop: "calc(1vh + 1px)", marginRight: "auto" }}
          alt="cheetohRight"
        />
      </TextBox>
      <SkylineHeaderSVG />
    </div>
  )
}
