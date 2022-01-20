import React from "react"

import BoldedHeader from "../BoldedHeaderText/BoldedHeader"
import TextBox from "../TextBox/TextBox"
import Content from "../DecoratedText/DecoratedText"
// import styles from "./HeroText.module.css"
import { ReactComponent as RainbowHeart } from "../../images/about-us/rainbowHeart.svg"
import { ReactComponent as CheetoLeft } from "../../images/cheetohs/cheetohLeft.svg"
import { ReactComponent as CheetoRight } from "../../images/cheetohs/cheetohRight.svg"
import { useStyles } from "../Cheetos/cheetohStyle"
import { SkylineHeader }from "../SkylineSVG"

export default function WhatiIsTTM() {
  const classes = useStyles()
  const headerText = "What is Toronto Tech Mentoring?"
  const content =
    "We aim to empower homeless and underhoused individuals in Toronto through technology skills, mentorship and other learning supports to achieve professional, entrepreneurial or personal goals. Our core program delivers mentorship for marginalized young people (including LGBTQ+)."

  return (
    <div>
      <CheetoLeft
        className={classes.cheetohLeftMirrored}
        style={{ marginTop: "-1.6em" }}
        alt="cheetohLeft"
      />
      <TextBox
        style={{
          marginTop: "135px",
          marginRight: "calc(46.5vw - 151px)",
          paddingRight: "0",
        }}
      >
        <BoldedHeader
          headerText={headerText}
          style={{ fontSize: "calc(1.3vw + 1em)" }}
        />
        <Content
          content={content}
          extra={<RainbowHeart style={{ marginLeft: "15px" }} />}
          style={{
            fontFamily: "Poppins",
            fontSize: "calc(0.37vw + 12.7px)",
            textAlign: "left",
            marginTop: "-5px",
          }}
          hideCheetohs={["sm", "xs", "lg", "md", "xl"]}
        />
        <CheetoRight
          className={classes.cheetohRightMirrored}
          style={{ marginTop: "calc(1vh + 1px)" }}
          alt="cheetohRight"
        />
      </TextBox>
      <SkylineHeader />
    </div>
  )
}
