import React from "react"

import Grid from "@material-ui/core/Grid"
import { TextField } from "@material-ui/core"
import { Select } from "@material-ui/core"
import { RadioGroup } from '@material-ui/core';
import { Radio } from "@material-ui/core"
import { FormControl } from "@material-ui/core"

import styled from "styled-components"

const LastName = new styled(TextField)`
width: 280px;

`
const FirstName = new styled(TextField)`
    padding-right:46px;
    width: 280px;
    padding-bottom: 16px;
`

const PhoneNumber = new styled(TextField)`
    padding-right:46px;
    width: 280px;

`

const EmailAddress = new styled(TextField)`
width: 280px;

`

const PreferredPronouns = new styled(RadioGroup)`
    margin-top: 32px;
    width: 24px;

`;

const PronounQuestion = new styled.div`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 31px;
color: #404040;
`;

const SheHer = new styled(Radio)`

`;

const HeHim = new styled(Radio)`
`;

const TheyThem = new styled(Radio)`

`;

const Other = new styled(Radio)`
`;

const StyledGrid = new styled(Grid)`
    padding-bottom: 50px;
    padding-left: 16.5%;
    `;

export default function ContactUsForm() {
  return (
    <div>
      <StyledGrid justify="left" alignItems="center">
        <FirstName required label="First Name"></FirstName>
        <LastName required label="Last Name"></LastName>
        <br></br>
        <PhoneNumber label="Phone Number"></PhoneNumber>
        <EmailAddress required label="Email"></EmailAddress>
        <br></br>
        <PronounQuestion>What's Your Preferred Pronoun?</PronounQuestion>
        <PreferredPronouns checked = "false">
            <SheHer ></SheHer>
            <HeHim></HeHim>
            <TheyThem></TheyThem>
            <Other></Other>
        </PreferredPronouns>
      </StyledGrid>
    </div>
  )
}
