import React from "react";
import { slide as Menu } from 'react-burger-menu';
import { makeStyles } from '@material-ui/core/styles';




 
export default function BurgerMenu ({children}) {
//   showSettings (event) {
//     event.preventDefault();
//   }
    const useStyles = makeStyles({

    bmBurgerButton: {
        width: '36px',
        height: '30px',
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
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
        height: '100%'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'inline-block'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
});

  const classes = useStyles();

    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <Menu>
            {children}
        {/* <a id="home" className={classes.menuItem} href="/">Home</a>
        <a id="about" className={classes.menuItem} href="/about">About</a>
        <a id="contact" className={classes.menuItem} href="/contact">Contact</a> */}
        {/* <a onClick={ this.showSettings } className="menuItem--small" href="">Settings</a> */}
      </Menu>
    );
  }

