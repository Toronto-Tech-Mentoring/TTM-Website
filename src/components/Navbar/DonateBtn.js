import React from "react"
import Confetti from "react-dom-confetti"
import styled from "styled-components"
import HeartWhite from "../../images/navbar/heart-white.svg"
import HeartPurple from "../../images/navbar/heart-purple.svg"


// The style components were used as an easy way to change the button color on hover
const StyledButton = styled.button`
  background: #873fe2;
  border-radius: 300px;
  border-style: solid;
  border-color: #873fe2;
  width: 15%;
  max-width: 156px;
  min-width: 96px;
  height: 48px;
  color: #fff;
  padding-left: 32px;
  display:"flex"
  align-items: center;
  display:inline-blok;


  &:hover {
    background: #ffff;
    border-style: solid;
    border-width: medium;
    border-color: #873fe2;
    color: #873fe2;
  }
`
const StyledText = styled.p`
  display: inline-block;
  font-size: 18px;
  height: fit-content;
  margin-left: 8px;
  margin-bottom: 8px;
  margin-top: 8px;
  padding-right: 8px;
  float: left;
`

const StyledImg = styled.img`
    width: 17px;
    float: left;
    transition: transform 300ms ease-in-out;

    ${StyledButton}:hover &{
      transform: scale(1.5)
    }
`

const config = {
  angle: "90",
  spread: "360",
  startVelocity: "25",
  elementCount: "50",
  dragFriction: "0.17",
  duration: "1500",
  stagger: "2",
  width: "15px",
  height: "15px",
  perspective: "499px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
}

class DonateBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {confetti:false, imgSrc: HeartWhite }
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleMouseOver() {
    this.setState({imgSrc: HeartPurple , buttonHovered:true})
  }

  handleMouseOut() {
    this.setState({confetti: false, imgSrc: HeartWhite, buttonHovered: false})
  }

  handleOnClick(){
    this.setState({confetti: true})
  }


  // The mouse over events need to be placed on the button tag to update the heart as well
  render() {
    return (
      <StyledButton
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onClick={this.handleOnClick}
      >
        <StyledText>Donate</StyledText>
        <StyledImg
          src={this.state.imgSrc}
          alt="heart color"
          onClick={this.handleOnClick}
        />
        <Confetti active={this.state.confetti} config={config} />
      </StyledButton>
    )
  }
}

export default DonateBtn
