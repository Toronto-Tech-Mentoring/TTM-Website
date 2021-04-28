import React from "react"

import BoldedHeader from "../BoldedHeaderText/BoldedHeader"
import TextBox from "../TextBox/TextBox"
import Content from "../DecoratedText/DecoratedText"
// import styles from "./HeroText.module.css"
import CheetoLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetoRight from "../../images/cheetohs/cheetohRight.svg"
import { useStyles } from "../Cheetos/cheetohStyle"
import { SkylineHeader as SkylineHeaderSVG } from "../SkylineSVG"

export default function VolunteerRunOrg() {
  const classes = useStyles()
  const headerText = "We are an entirely volunteer-run organization."
  const content =
    "Our diverse team includes talented technologists, educators, program managers, and activists. We come from different professional backgrounds and many different walks of life — all tied together by our common goal: to help young people and adults that are underhoused, face barriers and adversity to write their own stories."

  return (
    <div>
      <CheetoLeft
        className={classes.cheetohLeftMirrored}
        style={{ "margin-top": "-1.6em" }}
        alt="cheetohLeft"
      />
      <TextBox
        style={{
          "margin-top": "135px",
          "margin-right": "calc(39.5vw - 125px)",
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
          hideCheetohs={["sm", "xs", "lg", "md", "xl"]}
        />
        <CheetoRight
          className={classes.cheetohRightMirrored}
          style={{ "margin-top": "calc(1vh + 1px)" }}
          alt="cheetohRight"
        />
      </TextBox>
      <SkylineHeaderSVG />
    </div>
  )
}
