import React from "react"

import Grid from "@material-ui/core/Grid"

import BoldedHeader from "../BoldedHeaderText/BoldedHeader"
import TextBox from "../TextBox/TextBox"
import Content from "../DecoratedText/DecoratedText"
import CheetoLeft from "../../images/cheetohs/cheetohLeft.svg"
// import CheetoRight from "../../images/cheetohs/cheetohRight.svg"
import { useStyles } from "../Cheetos/cheetohStyle"
import styled from "styled-components"

const StyledGrid = new styled(Grid)`
    padding-bottom: 50px;
`

export default function GetInTouch() {
  const classes = useStyles()
  const headerText = "Get in touch"
  const content =
    "Fill in the form below and we'll be happy to be in touch soon."

  return (
    <div>
      <StyledGrid>
        <CheetoLeft
          className={classes.cheetohLeftMirrored}
          style={{ "margin-top": "-1.6em" }}
          alt="cheetohLeft"
        />
        <TextBox
          style={{
            "margin-top": "135px",
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
        </TextBox>
      </StyledGrid>
    </div>
  )
}
