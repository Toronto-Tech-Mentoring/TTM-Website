import React from "react"
import { Grid } from "@material-ui/core"
import GetInTouch from "../Contact/GetInTouch"
import ContactUsForm from "../Contact/ContactUsForm"
import SkylineTop from "../../components/SkylineTop"

import styled from "styled-components"

const StyledGrid = new styled(Grid)`
    padding-bottom: 50px;
    width: 100vw;
    position: relative;
    padding-left: calc(19.2vw - 52px);
    padding-top: calc(6.6vw + 63px);
    left: 0px;
    height: calc(17vh + 1230px);
    max-height: 1476px;
    overflow: hidden;
    margin: 0px;
    padding-top: calc(6vw + 15px);
`


export default function Contact() {
  return (
    <StyledGrid>
      <GetInTouch />
      <ContactUsForm />
      <SkylineTop/>
    </StyledGrid>
  )
}
