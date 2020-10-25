import React, {useEffect } from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import DonateBtn from "./DonateBtn"
import BurgerMenu from "./BurgerMenu"
import Logo from "./Logo"
import "./NavAccessibility.css"

/** sizing  navbar padding based on viewport**/

export default function NavTabs() {
  const listItems = [
    {
      id: "client",
      path: "/client/",
      title: "Client",
    },
    {
      id: "volunteer",
      path: "/volunteer/",
      title: "Volunteer",
    },
    {
      id: "partners",
      path: "/partners/",
      title: "Partners",
    },
    {
      id: "sponsors",
      path: "/sponsors/",
      title: "Sponsors",
    },
    {
      id: "home",
      path: "/",
      title: "About us",
    },
    {
      id: "contact",
      path: "/contact/",
      title: "Contact",
    },
  ]

  /** @function renderListItems */
  // This function takes in a list of object "listItems",
  // loop through each item and for each item,
  // render a <li></li> that represents a tab on a navbar.
  /** @function
   * @name renderListItems */

  const useStyles = makeStyles((theme) => ({
    navbar: {
      position: "sticky",
      top: "0%",
      left: "0%",
      right: "0%",
      height: "80px",
      background: "#FFFFFF",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      padding: "0px",
      color: "black",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "Poppins",
      zIndex: 2000,
      [theme.breakpoints.down('1040')]: {
        height: '56px',
      },
      [theme.breakpoints.down('400')]: {
        height: '48px',
      },
    },
    navtabs: {
      width: "fit-content",
      height: "80px",
      float: "right",
      marginRight: "calc(25vw - 240px)",
      padding: "0",
      margin: "0",
      listStyle: "none",
      display: "inline-flex",
      alignItems: "center",
      [theme.breakpoints.down('1040')]: {
        height: "56px",
        marginRight: 'calc(2.22vw + 7px)'
      },
      [theme.breakpoints.down('400')]: {
        height: "48px",
        marginRight: "calc(1.8vw + 9px)"
      },
    },
    navitem: {
      marginBottom: "-1px",
      display: "inline-block",
      [theme.breakpoints.down('1040')]: {
          display:"none"
      }
    },

    navlink: {
      width:'calc(18.2vw - 136px)',
      maxWidth: '104px',
      minWidth: "86px",
      fontSize: "16px",
      textAlign: "center",
      lineHeight: "80px",
      color: "black",
      padding: "0px",
      display: "block",
      textDecoration: "none",
      borderStyle: "none",
      [theme.breakpoints.down('1040')]: {
        width:'auto',
        lineHeight: "56px",
        maxWidth: '100%',
         minWidth: "104px",
      },
      [theme.breakpoints.down('400')]: {
        lineHeight: "48px",
        maxWidth: '100%',
          minWidth: "104px",
      },
      "&:hover": {
        color: "#873FE2",
      },
    },
    active: {
        color: "#873FE2",
        boxShadow: "0px 2px 0px #873FE2",
        [theme.breakpoints.down('1040')]: {
        boxShadow: "3px 0px 0px #873FE2"
      },
    },
    burgerMenu: {
      display: 'none',
      [theme.breakpoints.down('1040')]: {
          display: 'block',
      },
    },
  }))

  const classes = useStyles()

  const renderListItems = () => {
    return listItems.map(item => (
      <li className={classes.navitem}
        key={item.id}
      >
        <Link
          to={item.path}
          id={item.id}
          className={classes.navlink}
          activeClassName= {classes.active}
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

  return (
    <div className={classes.navbar}>
      <Logo/>
      <ul className={classes.navtabs}>
        {renderListItems()}
        <DonateBtn/>
      </ul>
      <div className={classes.burgerMenu}>
        <BurgerMenu
        >
          {renderListItems()}
        </BurgerMenu>
      </div>
    </div>
  )
}
