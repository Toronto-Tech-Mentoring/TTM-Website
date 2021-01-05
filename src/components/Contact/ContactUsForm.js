import React from "react"

import { Grid } from "@material-ui/core"
import { TextField } from "@material-ui/core"
import { Select } from "@material-ui/core"
import { RadioGroup } from "@material-ui/core"
import { Radio } from "@material-ui/core"
import { InputLabel } from "@material-ui/core"
import { MenuItem } from "@material-ui/core"
import { Button } from "@material-ui/core"

import styled from "styled-components"

const LastName = new styled(TextField)`
    .MuiInput-underline:before {
        border-bottom: 1px solid #873FE2;
    }
    
    && .MuiInput-underline:hover:before {
        border-bottom: 2px solid #873FE2;
    }
    .MuiInput-underline:after {
        border-bottom: 2px solid #873FE2;
    }
    .MuiInputBase-root{
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;        
        color: #4529AE;
    }
    .MuiFormLabel-root {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;   
        color: #404040;
    }
`
const FirstName = new styled(TextField)`
    padding-right: 46px !important;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color:  #404040;


    .MuiInput-underline:before {
        border-bottom: 1px solid #873FE2;
    }

    && .MuiInput-underline:hover:before {
        border-bottom: 2px solid #873FE2;
    }
    .MuiInput-underline:after {
        border-bottom: 2px solid #873FE2;
    }

    .MuiInputBase-root{
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;        
        color: #4529AE;
    }

    .MuiFormLabel-root {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;   
        color: #404040;
    }
`

const PhoneNumber = new styled(TextField)`
    padding-right: 46px !important;

    .MuiInput-underline:before {
        border-bottom: 1px solid #873FE2;
    }
    
    && .MuiInput-underline:hover:before {
        border-bottom: 2px solid #873FE2;
    }

    .MuiInput-underline:after {
        border-bottom: 2px solid #873FE2;
    }

    .MuiInputBase-root{
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;        
        color: #4529AE;
    }
    .MuiFormLabel-root {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;   
        color: #404040;
    }
    `

const EmailAddress = new styled(TextField)`
    .MuiInput-underline:before {
        border-bottom: 1px solid #873FE2;
    }
  
    && .MuiInput-underline:hover:before {
        border-bottom: 2px solid #873FE2;
    }
    .MuiInput-underline:after {
        border-bottom: 2px solid #873FE2;
    }
    .MuiInputBase-root{
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;        
        color: #4529AE;
    }
    .MuiFormLabel-root {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;   
        color: #404040;
    }

`

const PreferredPronouns = new styled(RadioGroup)`
    .MuiInput-underline:before {
        border-bottom: 1px solid #873FE2;
      }
      
      && .MuiInput-underline:hover:before {
        border-bottom: 2px solid #873FE2;
      }
      .MuiInput-underline:after {
        border-bottom: 2px solid #873FE2;
      }
`

const StyledQuestion = new styled(InputLabel)`
    margin-top: 32px !important;
    font-family: Poppins !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-size: 14px !important;
    line-height: 31px !important;
    color: #404040 !important;
`

const SheHer = new styled(Radio)`
.MuiRadio-colorPrimary{
    background: #4529AE !important;
    border-color:  #873FE2;
    border: 2px solid #4529AE;
    box-sizing: border-box;
    border-radius: 24px;
}
`

const HeHim = new styled(Radio)`
`

const TheyThem = new styled(Radio)`

`

const Other = new styled(Radio)`
`

const StyledGrid = new styled(Grid)`
    padding-bottom: 50px;
    padding-left: 16.5%;
`

const StyledDropDown = new styled(Select)`
    width: 50% !important;
    font-family: Poppins !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 18px !important;
    line-height: 27px !important;
    color: #4529AE !important;

    .MuiSelect-icon {
        color: #BF8FFF !important;
    }
`

const StyledMenuItem = new styled(MenuItem)`
    width: 100% !important;
    font-family: Poppins !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-size: 14px !important;
    line-height: 150% !important;
`

const StyledInput = new styled(TextField)`
    width: 80% !important;
    .MuiInput-underline:before {
        border-bottom: 1px solid #873FE2;
    }

    && .MuiInput-underline:hover:before {
        border-bottom: 2px solid #873FE2;
    }
    .MuiInput-underline:after {
        border-bottom: 2px solid #873FE2;
    }
    .MuiInputBase-root{
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;        
        color: #4529AE;
    }
    .MuiFormLabel-root {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;   
        color: #404040;
    }

`

const StyledButton = new styled(Button)`
    margin-top: 32px;
    width: 201px;
    height: 51px;
    background-color: #873FE2;
    border-radius: 300px;
    color: #FFFFFF;

    .MuiButton-label {
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        text-transform: none;
    }

    && {
        box-shadow: none;
        &:hover{
        background-color: #BF8FFF;
        }
        &:active {
          background-color: #FFFFFF;
          color: #873FE2; 
        }
      }
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledInputLabel = new styled(InputLabel)`
    padding-top: 8px !important;
    font-family: Poppins !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-size: 18px !important;
    line-height: 27px !important;
    color: #4F4F4F !important;
`

export default function ContactUsForm() {
  const handleChange = event => {
    setReason(event.target.value)
  }
  const [reason, setReason] = React.useState("")

  return (
    <>
      <StyledGrid justify="left" alignItems="center">
        <FirstName label="First Name"></FirstName>
        <LastName label="Last Name"></LastName>
        <br></br>
        <PhoneNumber label="Phone Number"></PhoneNumber>
        <EmailAddress label="Email"></EmailAddress>
        <br></br>
        <StyledQuestion>What's Your Preferred Pronoun?</StyledQuestion>
        <PreferredPronouns checked="false">
          <StyledDiv>
            <SheHer color="primary" />
            <StyledInputLabel>She/Her</StyledInputLabel>
          </StyledDiv>

          <StyledDiv>
            <HeHim color="primary" />
            <StyledInputLabel>He/Him</StyledInputLabel>
          </StyledDiv>

          <StyledDiv>
            <TheyThem color="primary" />
            <StyledInputLabel>They/Them</StyledInputLabel>
          </StyledDiv>

          <StyledDiv>
            <Other color="primary" />
            <StyledInputLabel>Other</StyledInputLabel>
          </StyledDiv>
        </PreferredPronouns>
        <br></br>
        <StyledQuestion>What Are You Interested In?</StyledQuestion>
        <StyledDropDown value={reason} onChange={handleChange}>
          <StyledMenuItem value={"Sponsoring or donating to the program"}>
            Sponsoring or donating to the program
          </StyledMenuItem>
          <StyledMenuItem value={"Participating in the program"}>
            Participating in the program
          </StyledMenuItem>
          <StyledMenuItem value={"Volunteering with the program"}>
            Volunteering with the program
          </StyledMenuItem>
          <StyledMenuItem value={"Partnering with the program"}>
            Partnering with the program
          </StyledMenuItem>
          <StyledMenuItem value={"Other"}>Other</StyledMenuItem>
        </StyledDropDown>
        <StyledQuestion>Message</StyledQuestion>
        <StyledInput
          multiline
          variant="outlined"
          rows={8}
          placeholder="Enter additional information here"
          disableUnderline
        ></StyledInput>
        <br></br>
        <StyledButton size="medium" color="primary">
          Send
        </StyledButton>
      </StyledGrid>
    </>
  )
}
