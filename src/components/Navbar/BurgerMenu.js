/* eslint-disable no-undef */
/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';

export default function BurgerMenu({ children }) {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: 'calc(1.4vw + 19px)',
      height: 'calc(0.7vw + 15px)',
      left: 'calc(2.2vw + 7px)',
      top: '16px',
    },
    bmBurgerBars: {
      background: '#373a47',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      width: 'fit-content',
      top: '56px',
    },
    bmMenu: {
      background: '#FFFFFF',
      width: 'calc(100vw)',
      fontSize: '1.15em',
      boxShadow: '4px 0px 4px rgba(0, 0, 0, 0.2)',
      // paddingTop: "40px",
      // marginRight:"3px",
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      position: 'absolute',
      padding: '0',
      margin: '0',
      display: 'listItem',
    },
    bmItem: {
      width: 'calc(8.5vw + 130px)',
      outline: 'none',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.1)',
    },
  };

  const isMenuOpen = function (state) {
    // eslint-disable-next-line no-undef
    const { body } = document;
    if (state.isOpen) {
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
    } else {
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <Menu onStateChange={isMenuOpen} styles={styles}>
      {children}
    </Menu>
  );
}

BurgerMenu.propTypes = {
  children: PropTypes.node.isRequired,
};
