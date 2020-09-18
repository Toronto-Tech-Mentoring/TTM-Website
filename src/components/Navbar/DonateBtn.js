import React from "react"
import Confetti from "react-dom-confetti"
import styled from "styled-components"
import HeartWhite from "../../images/navbar/heart-white.png"
import HeartPurple from "../../images/navbar/heart-purple.png"
import posed from "react-pose"


// The style components were used as an easy way to change the button color on hover
const StyledButton = styled.button`
  background: #873fe2;
  border-radius: 24px;
  border-style: none;
  width: 156px;
  height: 48px;
  margin: 8px;
  color: #fff;
  padding-left: 32px;
  padding-right: 32px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;


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
  margin: auto;
  float: left;
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

const PopAnimation = posed.img({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.5,
  },
  press: {
    scale: 1.1,
  },
  attention: {
    scale: 1.8,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 0,
    },
  },
})

class HeartChangeState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {confetti:false, imgSrc: HeartWhite }
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleMouseOver() {
    this.setState({ imgSrc: HeartPurple })
  }

  handleMouseOut() {
    this.setState({confetti: false, imgSrc: HeartWhite })
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
        <PopAnimation
          src={this.state.imgSrc}
          alt="heart color"
          onClick={this.handleOnClick}
          style={{width:"17px", float:"right"}}
        />
        <Confetti active={this.state.confetti} config={config} />
      </StyledButton>
    )
  }
}

export default HeartChangeState
