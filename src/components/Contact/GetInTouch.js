import React from "react"

import Grid from "@material-ui/core/Grid"

import BoldedHeader from "../BoldedHeaderText/BoldedHeader"
import TextBox from "../TextBox/TextBox"
import Content from "../DecoratedText/DecoratedText"
import CheetoLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetoRight from "../../images/cheetohs/cheetohRight.svg"
import { useStyles } from "../Cheetos/cheetohStyle"
import { firstSectionStyles } from "../../styles/firstSectionStyles"
import styled from "styled-components"

const StyledGrid = new styled(Grid)`
    padding-bottom: 50px;
`

export default function GetInTouch() {
  const classes = useStyles()
  const styles = firstSectionStyles
  const headerText = "Get in touch"
  const content =
    "Fill in the form below and we'll be happy to be in touch soon."

  return (
    <>
        <CheetoLeft
          className={classes.cheetohLeftMirrored}
          style={{ marginTop: "-20", marginLeft: "- 10px",  }}
           alt="cheetohLeft"
        />
        <TextBox
          style={{
            "width": "calc(25.5vw + 248px)", "position": "relative"
          }}
        >
          <BoldedHeader
          headerText={headerText}
            style={{ "font-size": "calc(1.3vw + 1em)", "margin-left": "5px" }}
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
    </>
  )
}
