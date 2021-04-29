import React from "react"

import BoldedHeader from "../BoldedHeaderText/BoldedHeader"
import TextBox from "../TextBox/TextBox"
import Content from "../DecoratedText/DecoratedText"
// import styles from "./HeroText.module.css"
import CheetoLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetoRight from "../../images/cheetohs/cheetohRight.svg"
import { useStyles } from "../Cheetos/cheetohStyle"
import { firstSectionStyles } from "../../styles/firstSectionStyles"
import SkylineTop from "../../components/SkylineTop"

export default function VolunteerRunOrg() {
  const classes = useStyles()
  const styles = firstSectionStyles
  const headerText = "Join our program!"
  const content =
    "Toronto Tech Mentoring was built to address some of the major gaps in accessing skills training for people who’ve faced adversity. If you’ve faced, or are facing, housing instability, we want to help you reach your tech learning goals."
  return (
    <div style={styles.container}>
      <CheetoLeft
        className={classes.cheetohLeftMirrored}
        style={{ "margin-top": "-1.6em" }}
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
          hideCheetohs={["sm", "xs", "lg", "md", "xl"]}
        />
        <CheetoRight
          className={classes.cheetohRightMirrored}
          style={{ "margin-top": "calc(1vh + 1px)" }}
          alt="cheetohRight"
        />
      </TextBox>
      <SkylineTop />
    </div>
  )
}
