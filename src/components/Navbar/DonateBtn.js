import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';

import { ReactComponent as HeartWhite } from '../../images/navbar/heart-white.svg';
import { ReactComponent as HeartPurple } from '../../images/navbar/heart-purple.svg';

// The style components were used as an easy way to change the button color on hover
const StyledButton = styled.button`
  background: #873fe2;
  border-radius: 300px;
  border-style: solid;
  border-color: #873fe2;
  color: #fff;
  min-width: 96px;
  height: 48px;
  width: 156px;
  &:hover {
    background: #ffff;
    border-style: solid;
    border-width: medium;
    border-color: #873fe2;
    color: #873fe2;
  }
  @media (max-width: 1200px) {
    width: calc(22vw - 114px);
  }
  @media (max-width: 1040px) {
    font-size: 14px;
    height: 40px;
    width: 105px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
    height: 32px;
    width: 96px;
  }
  @media (max-width: 300px) {
    width: 85px;
    min-width: 85px;
  }
`;

const StyledFont = styled.a`
  display: inline-block;
  padding: 0px;
  padding-right: 8px;
  font-size: 18px;
  font-weight: 500;
  font-family: Poppins;
  @media (max-width: 1040px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
const StyledImg = styled(Box)`
  transition: transform 300ms ease-in-out;
  width: 17px;
  @media (max-width: 1040px) {
    width: 15px;
  }
  @media (max-width: 400px) {
    width: 13px;
  }
  ${StyledButton}:hover & {
    transform: scale(1.5);
  }
`;

class DonateBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgSrc: HeartWhite };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({ imgSrc: HeartPurple });
  }

  handleMouseOut() {
    this.setState({ imgSrc: HeartWhite });
  }

  // The mouse over events need to be placed on the button tag to update the heart as well
  render() {
    const { imgSrc } = this.state;
    return (
      <StyledButton
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <span style={{ width: 'fit-content', margin: 'auto' }}>
          <StyledFont>Donate</StyledFont>
          <StyledImg alt="heart color">{imgSrc}</StyledImg>
        </span>
      </StyledButton>
    );
  }
}

export default DonateBtn;
