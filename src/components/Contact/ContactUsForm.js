import React from "react"

import Grid from "@material-ui/core/Grid"
import { TextField } from "@material-ui/core"
import { Select } from "@material-ui/core"
import { RadioGroup } from '@material-ui/core';
import { Radio } from "@material-ui/core"
import { FormControl } from "@material-ui/core"
import { Input } from "@material-ui/core"
import { InputLabel } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Button } from '@material-ui/core';

import styled from "styled-components";

const LastName = new styled(TextField)`
    width: 280px;
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
`;
const FirstName = new styled(TextField)`
    padding-right:46px;
    width: 280px;
    padding-bottom: 16px;
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
    padding-right:46px;
    width: 280px;

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
    `;

const EmailAddress = new styled(TextField)`
    width: 280px;
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

`;

const PreferredPronouns = new styled(RadioGroup)`
    width: 24px;
    .MuiInput-underline:before {
        border-bottom: 1px solid #873FE2;
      }
      
      && .MuiInput-underline:hover:before {
        border-bottom: 2px solid #873FE2;
      }
      .MuiInput-underline:after {
        border-bottom: 2px solid #873FE2;
      }
`;

const StyledQuestion = new styled(InputLabel)`
    margin-top: 32px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 31px;
    color: #404040;
`;

const SheHer = new styled(Radio)`
.MuiRadio-colorPrimary{
    background: #4529AE;
    border-color:  #873FE2;
    border: 2px solid #4529AE;
    box-sizing: border-box;
    border-radius: 24px;
}
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

const StyledDropDown = new styled(Select)`
      width: 364px;
`;

const StyledMenuItem = new styled(MenuItem)`

`;

const StyledInput = new styled(TextField)`
    width: 615px;
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

`;

const StyledButton = new styled(Button)`
    margin-top: 32px;
    width: 201px;
    height: 51px;
    background-color:#873FE2;
    border-radius: 300px;

    .MuiButton-label {
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #FFFFFF;
        text-transform: none;
    }
`;

const StyledDiv = styled.div`
     display:flex;
    flex-direction:row;

`;

const StyledInputLabel = new styled(InputLabel)`
    padding-top: 8px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #4F4F4F;
`;
export default function ContactUsForm() {
    const handleChange = (event) => {
        setReason(event.target.value);
    };
    const [reason, setReason] = React.useState('');

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
                        <SheHer color="primary"/>
                        <StyledInputLabel>She/Her</StyledInputLabel>
                    </StyledDiv>

                    <StyledDiv>                 
                       <HeHim color="primary"/>
                        <StyledInputLabel>He/Him</StyledInputLabel>
                    </StyledDiv>
                    
                    <StyledDiv>                 
                       <TheyThem color="primary"/>
                        <StyledInputLabel>They/Them</StyledInputLabel>
                    </StyledDiv>

                    <StyledDiv>                 
                       <Other color="primary"/>
                        <StyledInputLabel>Other</StyledInputLabel>
                    </StyledDiv>
                </PreferredPronouns>
                <br></br>
                <StyledQuestion>What Are You Interested In?</StyledQuestion>
                <StyledDropDown
                    value={reason}
                    onChange={handleChange}
                >
                    <StyledMenuItem value={"Sponsoring or donating to the program"}>Sponsoring or donating to the program</StyledMenuItem>
                    <StyledMenuItem value={"Reason 2"}>Reason 2</StyledMenuItem>
                    <StyledMenuItem value={"Reason 3"}>Reason 3</StyledMenuItem>

                </StyledDropDown>
                <StyledQuestion>Message</StyledQuestion>
                <StyledInput multiline variant="outlined" rows={8} placeholder="Enter additional information here" disableUnderline></StyledInput>
                <br></br>
                <StyledButton size="medium" color="primary">
                    Send
        </StyledButton>
            </StyledGrid>
        </>
    )
}
