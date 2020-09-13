import React from "react";
import styled from "styled-components";
import Heart from "./Heart"


// function Heart() {
//   return (<img className="heartIcon" src={this.state.imgSrc} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}/>)
// }

const StyledButton = styled.button`
  background: #873fe2;
  border-radius: 24px;
  border-style: none;
  width: 156px;
  height: 48px;
  margin: 8px;
  color: #fff;

  &:hover {
    background: #ffff;
    border-style: solid;
    border-width: medium;
    border-color: #873fe2;
    color: #873fe2;
  }
`

function DonateBtn() {
  return <StyledButton> Donate <Heart/></StyledButton>
}

export default DonateBtn
