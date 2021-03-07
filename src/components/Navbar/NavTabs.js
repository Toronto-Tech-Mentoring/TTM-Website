import React, { useEffect } from "react"
import { Link } from "gatsby"
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCaretDown
} from '@fortawesome/free-solid-svg-icons'
import DonateBtn from "./DonateBtn"
import BurgerMenu from "./BurgerMenu"
import Logo from "./Logo"
import "./NavAccessibility.css"
import { useStyles } from "./navtabsStyle"

/** sizing  navbar padding based on viewport**/

export default function NavTabs() {
  const listItems = [
    {
      id: "who_we_are",
      path: "/who-we-are/",
      title: "Who we are"
    },
    {
      id: "how_it_works",
      path: "/how-it-works/",
      title: "How it works"
    },
  ]
  // const listItems = [
  //   {
  //     id: "client",
  //     path: "/client/",
  //     title: "Client",
  //   },
  //   {
  //     id: "volunteer",
  //     path: "/volunteer/",
  //     title: "Volunteer",
  //   },
  //   {
  //     id: "partners",
  //     path: "/partners/",
  //     title: "Partners",
  //   },
  //   {
  //     id: "sponsors",
  //     path: "/sponsors/",
  //     title: "Sponsors",
  //   },
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

  const classes = useStyles()

  const renderListItems = () => {
    return listItems.map(item => (
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
    ))
  }

  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add("user-is-tabbing")

      window.removeEventListener("keydown", handleFirstTab)
      window.addEventListener("mousedown", handleMouseDownOnce)
    }
  }

  function handleMouseDownOnce() {
    document.body.classList.remove("user-is-tabbing")

    window.removeEventListener("mousedown", handleMouseDownOnce)
    window.addEventListener("keydown", handleFirstTab)
  }

  useEffect(() => {
    window.addEventListener("keydown", handleFirstTab)
  })

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
      <Link to="/landing" id="landing"><Logo /></Link>
      <ul className={classes.navtabs}>
        {renderListItems()}
        <li class={classes.navitem}>
         <Button
          // to={item.path}
          // id={item.id}
          className={classes.navlink}
          activeClassName={classes.active}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ textTransform : 'none', fontFamily: 'Poppins', fontWeight: '400'}}
        >
          How to help
          <FontAwesomeIcon style={{ paddingLeft: '5px'}} icon={faCaretDown} size="1x" />
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} style={{ fontFamily:'Poppins', letterSpacing: 0, paddingBottom: 0, fontSize: '10px' }}>
                      <Link to="/volunteer" id="volunteer"
                        className={classes.navlink}
                        activeClassName={classes.active}
                      ><MenuItem onClick={handleClose}>Volunteer with us</MenuItem></Link>
                    <Link to="/partners" id="partners"
                        className={classes.navlink}
                        activeClassName={classes.active}
                      ><MenuItem onClick={handleClose}>Partner with us</MenuItem></Link>
                    <Link to="/sponsors" id="sponsors"
                        className={classes.navlink}
                        activeClassName={classes.active}
                      ><MenuItem onClick={handleClose}>Sponsor us</MenuItem></Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </li>
        <li class={classes.navitem}>
          <Link
          to="/contact"
          id="contact"
          className={classes.navlink}
          activeClassName={classes.active}
        >
          Contact Us
        </Link>
        </li>
        <div class="ui vertical divider" style={{paddingRight:"16px", color:"#c4c4c4"}}>|</div>
        <DonateBtn />
      </ul>
      <div className={classes.burgerMenu}>
        <BurgerMenu>{renderListItems()}</BurgerMenu>
      </div>
    </div>
  )
}
