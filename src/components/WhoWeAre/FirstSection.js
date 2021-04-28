import React from "react"

import BoldedHeader from "../BoldedHeaderText/BoldedHeader"
import TextBox from "../TextBox/TextBox"
import Content from "../DecoratedText/DecoratedText"
import CheetoLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetoRight from "../../images/cheetohs/cheetohRight.svg"
import { useStyles } from "../Cheetos/cheetohStyle"
import { firstSectionStyles } from "../../styles/firstSectionStyles"
import SkylineTop from "../../components/SkylineTop"

export default function VolunteerRunOrg() {
  const classes = useStyles()
  const styles = firstSectionStyles
  const headerText = "We are an entirely volunteer run organization."
  const content =
    "Our diverse team includes talented technologists, educators, program managers, and activists. We come from different professional backgrounds and many different walks of life — all tied together by our common goal: to help young people and adults that are underhoused, face barriers and adversity to write their own stories."

  return (
    <div style={styles.container}>
      <CheetoLeft
        className={classes.cheetohLeftMirrored}
         style={{ marginTop: "-20", marginLeft: "- 10px",  }}
        alt="cheetohLeft"
      />
      <TextBox
       style={{
          "margin-left": "10px",
          "margin-right": "calc(45.5vw - 145px)",
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
