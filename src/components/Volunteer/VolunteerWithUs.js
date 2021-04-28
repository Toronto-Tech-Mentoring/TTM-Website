import React from "react"

import BoldedHeader from "../BoldedHeaderText/BoldedHeader"
import TextBox from "../TextBox/TextBox"
import Content from "../DecoratedText/DecoratedText"
import CheetoLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetoRight from "../../images/cheetohs/cheetohRight.svg"
import { useStyles } from "../Cheetos/cheetohStyle"
import { firstSectionStyles } from "../../styles/firstSectionStyles"
import SkylineTop from "../../components/SkylineTop"

export default function VolunteerWithUs() {
  const classes = useStyles()
  const styles = firstSectionStyles
  const headerText = "Volunteer With Us"
  const content =
    "Toronto Tech Mentoring is a group of dedicated volunteers who want to help vulnerable young people access tech skills. Our volunteer team comes from a wide range of backgrounds, bringing a myriad of different life experiences and skill sets. "

  return (
    <div style={styles.container}> 
      <CheetoLeft
        className={classes.cheetohLeftMirrored}
        style={{ "margin-top": "-1em" }}
        alt="cheetohLeft"
      />
      <TextBox
        style={{
          "margin-left": "10px",
          "margin-right": "calc(46.5vw - 151px)",
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
      <SkylineTop />
    </div>
  )
}
