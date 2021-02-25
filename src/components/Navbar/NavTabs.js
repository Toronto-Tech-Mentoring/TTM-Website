import React, { useEffect } from "react"
import { Link } from "gatsby"

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
    {
      id: "how_to_help",
      path: "/how-to-help/",
      title: "How to help"
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

  return (
    <div className={classes.navbar}>
      <Logo />
      <ul className={classes.navtabs}>
        {renderListItems()}
        <div class="ui vertical divider" style={{paddingRight:"16px", color:"#c4c4c4"}}>|</div>
        <DonateBtn />
      </ul>
      <div className={classes.burgerMenu}>
        <BurgerMenu>{renderListItems()}</BurgerMenu>
      </div>
    </div>
  )
}
