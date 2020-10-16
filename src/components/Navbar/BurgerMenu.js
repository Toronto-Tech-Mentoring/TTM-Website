import React from "react";
import { slide as Menu } from 'react-burger-menu';
export default function BurgerMenu(props) {

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: props.burgerMenuButtonPosition,
      top: '10px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width: props.sideBarWidth,
    },
    bmMenu: {
      background: '#FFFFFF',
      padding: '2.5em 1.5em 0',
      width: props.sideBarWidth,
      minWidth: '140px',
      maxWidth: '300px',
      fontSize: '1.15em',
      marginTop: '2px',
      padding: '0px',
      boxShadow: "4px 2px 4px rgba(0, 0, 0, 0.3)",
      padding: "0",
      margin: "0",
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      width: props.sideBarWidth,
      padding: "0",
      margin: "0",
      display: 'block'
    },
    bmItem: {
      marginRight: "2px",
      outline: "none",
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return (
    <Menu styles={styles}>
      {props.children}
    </Menu>
  );
}
