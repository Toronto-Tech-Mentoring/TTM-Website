import React from "react"

import BoldedHeader from "../BoldedHeaderText/BoldedHeader"
import TextBox from "../TextBox/TextBox"
import Content from "../DecoratedText/DecoratedText"
import CheetoLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetoRight from "../../images/cheetohs/cheetohRight.svg"
import { useStyles } from "../Cheetos/cheetohStyle"
import { firstSectionStyles } from "../../styles/firstSectionStyles"
import SkylineTop from "../../components/SkylineTop"

export default function CallForSponsors() {
  const classes = useStyles()
  const styles = firstSectionStyles
  const headerText = "Sponsor Us"
  const content =
    "Toronto Tech Mentoring is an entirely volunteer-run organization. All donations go directly to providing resources to help deliver our tech mentoring program. Help us continue to give young people a chance to access tech skills and change their lives."

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
