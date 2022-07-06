/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import DonateBtn from './DonateBtn';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import './NavAccessibility.css';
import { useStyles } from './navtabsStyle';

/** sizing  navbar padding based on viewport* */

export default function NavTabs() {
  const listItems = [
    {
      id: 'who_we_are',
      path: '/who-we-are/',
      title: 'Who we are',
    },
    {
      id: 'how_it_works',
      path: '/how-it-works/',
      title: 'How it works',
    },
  ];
  // const listItems = [
  //   {
  //     id: "client",
  //     path: "/client/",
  //     title: "Client",
  //   },
  const dropdownListItems = [
    {
      id: 'volunteer',
      path: '/volunteer/',
      title: 'Volunteer with us',
    },
    {
      id: 'partners',
      path: '/partners/',
      title: 'Partner with us',
    },
    {
      id: 'sponsors',
      path: '/sponsors/',
      title: 'Sponsor us',
    },
  ];
  //   {
  //     id: "home",
  //     path: "/",
  //     title: "About us",
  //   },
  //   {
  //     id: "contact",
  //     path: "/contact/",
  //     title: "Contact",
  //   },
  // ]

  /** @function renderListItems */
  // This function takes in a list of object "listItems",
  // loop through each item and for each item,
  // render a <li></li> that represents a tab on a navbar.
  /** @function
   * @name renderListItems */

  const classes = useStyles();

  const renderListItems = () => listItems.map((item) => (
    <li className={classes.navitem} key={item.id}>
      <Link
        to={item.path}
        id={item.id}
        className={classes.navlink}
        activeClassName={classes.active}
      >
        {item.title}
      </Link>
    </li>
  ));

  const renderDropdownListItems = () => dropdownListItems.map((item) => (
    <li
      className={`${classes.navitem} ${classes.dropDownList}`}
      key={item.id}
    >
      <Link
        to={item.path}
        id={item.id}
        className={classes.navlink}
        activeClassName={classes.active}
        style={{ textIndent: '32px' }}
      >
        {item.title}
      </Link>
    </li>
  ));

  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing');

      window.removeEventListener('keydown', handleFirstTab);
      window.addEventListener('mousedown', handleMouseDownOnce);
    }
  }

  function handleMouseDownOnce() {
    document.body.classList.remove('user-is-tabbing');

    window.removeEventListener('mousedown', handleMouseDownOnce);
    window.addEventListener('keydown', handleFirstTab);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab);
  });

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.navbar}>
      <Logo />
      <ul className={classes.navtabs}>
        {renderListItems()}
        <li className={classes.navitem}>
          <StyledButton
            // to={item.path}
            // id={item.id}
            className={classes.navlink}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onMouseOver={handleToggle}
            disableRipple
          >
            How to help
            <FontAwesomeIcon
              style={{ paddingLeft: '5px' }}
              icon={faCaretDown}
              size="1x"
            />
          </StyledButton>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                      style={{ letterSpacing: 0, paddingBottom: 0 }}
                    >
                      <Link
                        to="/volunteer"
                        id="volunteer"
                        className={`${classes.navlink} ${classes.dropDownList}`}
                        activeClassName={classes.dropDownItemActive}
                      >
                        <MenuItem
                          onClick={handleClose}
                          style={{
                            fontSize: '16px',
                            fontFamily: 'Poppins',
                            width: 'fit-content',
                            minWidth: '172px',
                          }}
                          disableRipple
                        >
                          Volunteer with us
                        </MenuItem>
                      </Link>
                      <Link
                        to="/partners"
                        id="partners"
                        className={`${classes.navlink} ${classes.dropDownList}`}
                        activeClassName={classes.dropDownItemActive}
                      >
                        <MenuItem
                          onClick={handleClose}
                          style={{
                            fontSize: '16px',
                            fontFamily: 'Poppins',
                            width: 'fit-content',
                            minWidth: '172px',
                          }}
                          disableRipple
                        >
                          Partner with us
                        </MenuItem>
                      </Link>
                      <Link
                        to="/sponsors"
                        id="sponsors"
                        className={`${classes.navlink} ${classes.dropDownList}`}
                        activeClassName={classes.dropDownItemActive}
                      >
                        <MenuItem
                          onClick={handleClose}
                          style={{
                            fontSize: '16px',
                            fontFamily: 'Poppins',
                            width: 'fit-content',
                            minWidth: '172px',
                          }}
                          disableRipple
                        >
                          Sponsor us
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </li>
        <li className={classes.navitem}>
          <Link
            to="/contact"
            id="contact"
            className={classes.navlink}
            activeClassName={classes.active}
          >
            Contact Us
          </Link>
        </li>
        <div className={`${classes.verticalDivider} ui vertical divider`}>
          |
        </div>
        <DonateBtn />
      </ul>
      <div className={classes.burgerMenu}>
        <BurgerMenu>
          {renderListItems()}
          <li className={classes.navitem}>
            <Link
              to="#"
              className={classes.navlink}
              activeClassName={classes.active}
              style={{ color: 'black' }}
            >
              How to help
            </Link>
          </li>
          {renderDropdownListItems()}
          <li className={classes.navitem}>
            <Link
              to="/contact"
              id="contact"
              className={classes.navlink}
              activeClassName={classes.active}
            >
              Contact Us
            </Link>
          </li>
        </BurgerMenu>
      </div>
    </div>
  );
}

const StyledButton = withTheme(
  styled(Button)(({ theme }) => ({
    fontFamily: 'Poppins',
    fontWeight: '400',
    '&.Mui-active': {
      color: '#873FE2',
      boxShadow: '0px 2px 0px #873FE2',
      [theme.breakpoints.down('1080')]: {
        boxShadow: '0px 0px 0px #873FE2',
        borderTopWidth: '2px',
        borderLeft: 0,
        borderRight: 0,
        borderColor: '#873FE2',
        borderStyle: 'solid',
      },
    },
  })),
);
