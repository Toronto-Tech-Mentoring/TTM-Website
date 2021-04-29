import React from "react"

import BoldedHeader from "../BoldedHeaderText/BoldedHeader"
import TextBox from "../TextBox/TextBox"
import Content from "../DecoratedText/DecoratedText"
import RainbowHeart from "../../images/about-us/rainbowHeart.svg"
import CheetoLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetoRight from "../../images/cheetohs/cheetohRight.svg"
import { useStyles } from "../Cheetos/cheetohStyle"
import { firstSectionStyles } from "../../styles/firstSectionStyles"
import SkylineTop from "../../components/SkylineTop"



export default function WhatiIsTTM() {
  const classes = useStyles()
  const styles = firstSectionStyles
  const headerText = "What is Toronto Tech Mentoring?"
  const content =
    "We aim to empower homeless and underhoused individuals in Toronto through technology skills, mentorship and other learning supports to achieve professional, entrepreneurial or personal goals. Our core program delivers mentorship for marginalized young people (including LGBTQ+)."

  return (
    <div style={styles.container} >
        <CheetoLeft
        className={classes.cheetohLeftMirrored}
        style={{ marginTop: "-20", marginLeft: "- 10px",  }}
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
          className={classes.boldedText}
        />
        <Content
          content={content}
          extra={<RainbowHeart style={{ "margin-left": "15px" }} />}
          style={styles.contentStyle}
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
