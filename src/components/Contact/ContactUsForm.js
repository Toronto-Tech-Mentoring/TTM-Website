/* eslint-disable radix */
import React, { useEffect } from 'react';

import {
  Grid,
  TextField,
  Select,
  RadioGroup,
  Radio,
  InputLabel,
  MenuItem,
  Button,
} from '@material-ui/core';
import styled from 'styled-components';
import { IMaskInput } from 'react-imask';
import PropTypes from 'prop-types';
import validator from 'validator';
import { SkylineHeader as SkylineHeaderSVG } from '../SkylineSVG';

const LastName = styled(TextField)`
  width: calc(11.5vw + 115px);
  .MuiInput-underline:before {
    border-bottom: 1px solid #873fe2;
  }

  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid #873fe2;
  }
  .MuiInput-underline:after {
    border-bottom: 2px solid #873fe2;
  }
  .MuiInput-underline.Mui-error:after {
    border-bottom: 2px solid #f44336;
  }
  .MuiInputBase-root {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #4529ae;
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
const FirstName = styled(TextField)`
  width: calc(11.5vw + 115px);
  padding-right: 46px !important;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #404040;

  .MuiInput-underline:before {
    border-bottom: 1px solid #873fe2;
  }

  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid #873fe2;
  }
  .MuiInput-underline:after {
    border-bottom: 2px solid #873fe2;
  }
  .MuiInput-underline.Mui-error:after {
    border-bottom: 2px solid #f44336;
  }

  .MuiInputBase-root {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #4529ae;
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

const PhoneNumber = styled(TextField)`
  width: calc(11.5vw + 115px);
  padding-right: 46px !important;

  .MuiInput-underline:before {
    border-bottom: 1px solid #873fe2;
  }

  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid #873fe2;
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid #873fe2;
  }
  .MuiInput-underline.Mui-error:after {
    border-bottom: 2px solid #f44336;
  }

  .MuiInputBase-root {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #4529ae;
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

const TextMaskCustom = React.forwardRef((props, ref) => {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const EmailAddress = styled(TextField)`
  width: calc(3.7vw + 229px);
  .MuiInput-underline:before {
    border-bottom: 1px solid #873fe2;
  }

  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid #873fe2;
  }
  .MuiInput-underline:after {
    border-bottom: 2px solid #873fe2;
  }
  .MuiInputBase-root {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #4529ae;
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

const PreferredPronouns = styled(RadioGroup)`
  .MuiInput-underline:before {
    border-bottom: 1px solid #873fe2;
  }

  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid #873fe2;
  }
  .MuiInput-underline:after {
    border-bottom: 2px solid #873fe2;
  }
`;

const StyledQuestion = styled(InputLabel)`
  margin-top: 32px !important;
  font-family: Poppins !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 14px !important;
  line-height: 31px !important;
  color: #404040 !important;
`;

const SheHer = styled(Radio)`
  .MuiRadio-colorPrimary {
    background: #4529ae !important;
    border-color: #873fe2;
    border: 2px solid #4529ae;
    box-sizing: border-box;
    border-radius: 24px;
  }
`;

const HeHim = styled(Radio)``;

const TheyThem = styled(Radio)``;

const Other = styled(Radio)``;

const StyledGrid = styled(Grid)`
  padding-bottom: 50px;
  padding-left: calc(19.2vw - 52px);
`;

const Interests = [
  'Sponsoring or donating to the program',
  'Participating in the program',
  'Volunteering with the program',
  'Partnering with the program',
  'Other',
];
const StyledDropDown = styled(Select)`
  width: 50% !important;
  font-family: Poppins !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 18px !important;
  line-height: 27px !important;
  color: #4529ae !important;

  .MuiSelect-icon {
    color: #bf8fff !important;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  width: 100% !important;
  font-family: Poppins !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 14px !important;
  line-height: 150% !important;
`;

const StyledInput = styled(TextField)`
  width: calc(26.7vw + 231px) !important;
  .MuiInput-underline:before {
    border-bottom: 1px solid #873fe2;
  }

  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid #873fe2;
  }
  .MuiInput-underline:after {
    border-bottom: 2px solid #873fe2;
  }
  .MuiInputBase-root {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #4529ae;
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

const StyledButton = styled(Button)`
  &.MuiButton-root {
    margin-top: 32px;
    width: 201px;
    height: 51px;
    background-color: #873fe2;
    border-radius: 300px;
    color: #ffffff;

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
      &:hover {
        background-color: #bf8fff;
      }
      &:active {
        background-color: #ffffff;
        color: #873fe2;
      }
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledInputLabel = styled(InputLabel)`
  padding-top: 8px !important;
  font-family: Poppins !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 18px !important;
  line-height: 27px !important;
  color: #4f4f4f !important;
`;

// const SubmitText = styled.p(() => ({
//   fontSize: 14,
//   fontWeight: 700,
// }));

// const axios = require('axios');

// const endpoints = {
//   contact: '/.netlify/functions/sendEmail',
// };

function ContactUsForm() {
  const errorDict = {
    first: { errorState: false, helperText: '' },
    last: { errorState: false, helperText: '' },
    phone: { errorState: false, helperText: '' },
    email: { errorState: false, helperText: '' },
  };

  const [error, setError] = React.useState(errorDict);

  function addError(name, errorString) {
    setError((prevErrorDict) => ({
      ...prevErrorDict,
      [name]: {
        errorState: true,
        helperText: `${errorString}`,
      },
    }));
  }

  function removeError(name) {
    setError((prevErrorDict) => ({
      ...prevErrorDict,
      [name]: {
        errorState: false,
        helperText: '',
      },
    }));
  }

  const [values, setValues] = React.useState({
    first: '',
    last: '',
    phone: '',
    email: '',
    pronoun: 'other',
    interests: '',
    message: '',
  });

  const handleInterestChange = (event) => {
    const {
      target: { value },
    } = event;
    setValues({
      // On autofill we get a stringified value.
      ...values,
      interests: value,
    });
  };

  const handlePhoneChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    // eslint-disable-next-line no-restricted-globals
    if (event.target.value.length !== 14) {
      addError(event.target.name, 'Please provide a valid phone number');
    } else {
      removeError(event.target.name);
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'first':
        if (value === '') {
          addError(name, `Please provide a ${name} name`);
        } else {
          setValues({
            // On autofill we get a stringified value.
            ...values,
            first: value,
          });
          removeError(name);
        }
        break;
      case 'last':
        if (value === '') {
          addError(name, `Please provide a ${name} name`);
        } else {
          setValues({
            // On autofill we get a stringified value.
            ...values,
            last: value,
          });
          removeError(name);
        }
        break;
      case 'email':
        // eslint-disable-next-line no-restricted-globals
        if (!validator.isEmail(value)) {
          addError(name, 'Please provide a valid email address');
        } else {
          setValues({
            // On autofill we get a stringified value.
            ...values,
            email: value,
          });
          removeError(name);
        }
        break;
      case 'pronoun':
        setValues({
          ...values,
          pronoun: value,
        });
        break;
      case 'interests':
        setValues({
          ...values,
          interests: value,
        });
        break;
      case 'message':
        setValues({
          ...values,
          message: value,
        });
        break;
      default:
        break;
    }
  };

  // const [submitted, setSubmitted] = React.useState(false);
  const [submitErrors, setSubmitErrors] = React.useState(false);

  useEffect(() => {
    let submit = true;
    // eslint-disable-next-line no-restricted-syntax
    for (const value of Object.values(error)) {
      if (!value.errorState) {
        // eslint-disable-next-line no-restricted-syntax
        for (const [keyInner, valueInner] of Object.entries(values)) {
          if (valueInner === '' && keyInner !== 'message') {
            submit = false;
            break;
          }
        }
      } else {
        submit = false;
        break;
      }
    }
    if (submit) {
      setSubmitErrors(true);
    } else {
      setSubmitErrors(false);
    }
  }, [values, error]);

  return (
    <form
      name="contact-us"
      data-netlify="true"
      method="POST"
      action="/home"
      netlify-honeypot="bot-field"
    >
      {/* This is needed when using gatsby to generate the form submissions https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-static-site-generators */}
      <input type="hidden" name="form-name" value="contact-us" />
      <StyledGrid justify="left" alignItems="center">
        <FirstName
          label="First Name"
          name="first_name"
          id="first_name_input"
          onChange={handleFieldChange}
          error={error.first.errorState}
          helperText={error.first.helperText}
        />
        <LastName
          label="Last Name"
          name="last_name"
          id="last_name_input"
          onChange={handleFieldChange}
          error={error.last.errorState}
          helperText={error.last.helperText}
        />
        <br />

        <PhoneNumber
          label="Phone Number"
          name="phone"
          id="phone_number"
          value={values.phone}
          onChange={handlePhoneChange}
          error={error.phone.errorState}
          helperText={error.phone.helperText}
          InputProps={{
            inputComponent: TextMaskCustom,
          }}
        />
        <EmailAddress
          label="Email"
          name="email"
          id="email_address"
          onChange={handleFieldChange}
          error={error.email.errorState}
          helperText={error.email.helperText}
        />
        <br />
        <StyledQuestion>Your Preferred Pronoun?`</StyledQuestion>
        <PreferredPronouns checked="false">
          <StyledDiv>
            <SheHer
              checked={values.pronoun === 'sheher'}
              type="radio"
              value="sheher"
              id="sheher"
              name="sheher_pronoun"
              color="primary"
              onChange={handleFieldChange}
            />
            <StyledInputLabel for="sheher">She/Her</StyledInputLabel>
          </StyledDiv>

          <StyledDiv>
            <HeHim
              checked={values.pronoun === 'hehim'}
              type="radio"
              value="hehim"
              id="hehim"
              name="hehim_pronoun"
              color="primary"
              onChange={handleFieldChange}
            />
            <StyledInputLabel for="hehim">He/Him</StyledInputLabel>
          </StyledDiv>

          <StyledDiv>
            <TheyThem
              checked={values.pronoun === 'theythem'}
              type="radio"
              value="theythem"
              id="theythem"
              name="theythem_pronoun"
              color="primary"
              onChange={handleFieldChange}
            />
            <StyledInputLabel for="theythem">They/Them</StyledInputLabel>
          </StyledDiv>

          <StyledDiv>
            <Other
              checked={values.pronoun === 'other'}
              type="radio"
              value="other"
              id="other"
              name="other_pronoun"
              color="primary"
              onChange={handleFieldChange}
            />
            <StyledInputLabel for="other">Other</StyledInputLabel>
          </StyledDiv>
        </PreferredPronouns>
        <br />
        <StyledQuestion>What Are You Interested In?</StyledQuestion>
        <StyledDropDown
          onChange={handleInterestChange}
          value={values.interests}
          name="interests"
          id="interests"
        >
          {Interests.map((interest) => (
            <StyledMenuItem key={interest} value={interest}>
              {interest}
            </StyledMenuItem>
          ))}
        </StyledDropDown>
        <StyledQuestion>Message</StyledQuestion>
        <StyledInput
          multiline
          id="message"
          variant="outlined"
          rows={8}
          placeholder="Enter additional information here"
          disableUnderline
          onChange={handleFieldChange}
          name="message"
          value={values.message}
        />
        <br />
        {submitErrors ? (
          <StyledButton type="submit" size="medium">
            Send
          </StyledButton>
        ) : (
          <StyledButton disabled size="medium">
            Send
          </StyledButton>
        )}
      </StyledGrid>
      <SkylineHeaderSVG />
    </form>
  );
}

export default ContactUsForm;
