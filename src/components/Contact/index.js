import React from "react"
import { Grid } from "@material-ui/core"
import GetInTouch from "../Contact/GetInTouch"
import ContactUsForm from "../Contact/ContactUsForm"
import SkylineTopSvg from "../../images/skyline/fullSkyline.svg"

import styled from "styled-components"

const StyledGrid = new styled(Grid)`
    padding-bottom: 50px;
    width: 100vw;
    position: relative;
    padding-left: calc(18.6vw - 44px);
    padding-top: calc(6.6vw + 63px);
    left: 0px;
    max-height: 1476px;
    overflow: hidden;
    margin: 0px;
    box-sizing: border-box;
    padding-top: calc(6vw + 15px);
`

const skylineStyle = {
  height: "calc(17.5vw + 470px)",
  maxHeight: "760px",
  width: "auto",
  position: "absolute",
  bottom: "0%",
  marginLeft: "calc(23vw - 1500px)"
}

export default function Contact() {
  return (
    <StyledGrid>
      <GetInTouch />
      <ContactUsForm />
      <SkylineTopSvg style={skylineStyle} />
    </StyledGrid>
  )
}
