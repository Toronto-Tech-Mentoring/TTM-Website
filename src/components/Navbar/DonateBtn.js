import React from "react"
import styled from "styled-components"
import HeartWhite from "../../images/navbar/heart-white.png"
import HeartPurple from "../../images/navbar/heart-purple.png"

// The style components were used as an easy way to change the button color on hover
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

class HeartChangeState extends React.Component {
  constructor(props) {
    super(props)
    this.state = { imgSrc: HeartWhite }
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }

  handleMouseOver() {
    this.setState({ imgSrc: HeartPurple })
  }

  handleMouseOut() {
    this.setState({ imgSrc: HeartWhite })
  }

  // The mouse over events need to be placed on the button tag to update the heart as well
  render() {
    return (
      <StyledButton
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onFocus={this.handleMouseOut}
      >
        Donate
        {/* update the state of the heart image to change colours */}
        <img className="heartIcon" src={this.state.imgSrc} alt="heart color" />
      </StyledButton>
    )
  }
}

export default HeartChangeState
