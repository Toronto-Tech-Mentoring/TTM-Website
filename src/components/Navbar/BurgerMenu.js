import React from "react"
import { slide as Menu } from "react-burger-menu"
export default function BurgerMenu(props) {
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "calc(1.4vw + 19px)",
      height: "calc(0.7vw + 15px)",
      left: "calc(2.2vw + 7px)",
      top: "16px",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      width: "fit-content",
    },
    bmMenu: {
      background: "#FFFFFF",
      width: "calc(7.5vw + 119px)",
      fontSize: "1.15em",
      boxShadow: "4px 0px 4px rgba(0, 0, 0, 0.2)",
      paddingTop: "40px",
      marginRight:"3px"
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
       position: "absolute", 
      padding: "0",
      margin: "0",
      display: "listItem",
    },
      bmItem: {
          width: "calc(7.5vw + 119px)",
          outline: "none",
    },
    bmOverlay: {
        background: "rgba(0, 0, 0, 0.1)",
    },
  }

  return <Menu styles={styles}>{props.children}</Menu>
}
