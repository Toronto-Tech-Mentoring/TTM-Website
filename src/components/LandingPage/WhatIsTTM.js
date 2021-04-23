import React from "react"

import BoldedHeader from "../BoldedHeaderText/BoldedHeader"
import TextBox from "../TextBox/TextBox"
import Content from "../DecoratedText/DecoratedText"
import RainbowHeart from "../../images/about-us/rainbowHeart.svg"
import CheetoLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetoRight from "../../images/cheetohs/cheetohRight.svg"
import { useStyles } from "../Cheetos/cheetohStyle"
import SkylineTop from "../../components/SkylineTop"



export default function WhatiIsTTM() {
  const classes = useStyles()
  const styles = {
    container: {
      width: "100vw",
      position: "relative",
      left: "0px",
      height: "calc(100vh - 80px)",
      maxHeight:"700px",
      overflow: "hidden",
      margin: "0px",
      padding: "0px"
    }
}


  const headerText = "What is Toronto Tech Mentoring?"
  const content =
    "We aim to empower homeless and underhoused individuals in Toronto through technology skills, mentorship and other learning supports to achieve professional, entrepreneurial or personal goals. Our core program delivers mentorship for marginalized young people (including LGBTQ+)."

  return (
    <div style={styles.container} >
     
      <TextBox
        style={{
          "margin-top": "135px",
          "margin-right": "calc(46.5vw - 151px)",
          "padding-right": "0",
        }}
      >
         <CheetoLeft
        className={classes.cheetohLeftMirrored}
        style={{ "margin-top": "-1.6em" }}
        alt="cheetohLeft"
      />
        <BoldedHeader
          headerText={headerText}
          style={{ "font-size": "calc(1.3vw + 1em)" }}
        />
        <Content
          content={content}
          extra={<RainbowHeart style={{ "margin-left": "15px" }} />}
          style={{
            "font-family": "Poppins",
            "font-size": "calc(0.37vw + 12.7px)",
            "text-align": "left",
            "margin-top": "-5px",
          }}
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
