import React from "react"
import styled from "styled-components"
import HeartWhite from "../../images/navbar/heart-white.png"
import HeartPurple from "../../images/navbar/heart-purple.png"


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

  handleMouseOut(){
      this.setState({imgSrc: HeartWhite})
  }

  render(){
        return (
            <img
              className="heartIcon"
              src={this.state.imgSrc}
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
            />
        )

  }
}
// function Heart() {
//   return (<img className="heartIcon" src={this.state.imgSrc} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}/>)
// }

export default HeartChangeState
