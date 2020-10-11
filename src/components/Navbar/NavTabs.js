import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';

import DonateBtn from "./DonateBtn"
import BurgerMenu from "./BurgerMenu"
import Logo from  "./Logo"
import "./NavAccessibility.css"


/** sizing  navbar padding based on window width**/
 

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
    });
    
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
    
      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    // Navbar and childs slyle properties
    let navbarPadding,navbarHeight, navitemWidth, logoWidth, logoFontSize; 
    let buttonHeight, buttonWidth, buttonFontSize, heartWidth;
    let navtabsDisplay, burgerMenuDisplay;
    
    if (windowSize.width >= 1040) {
      navbarPadding = (windowSize.width / 4 - 240).toFixed(1);
      navbarHeight = 80;
      navitemWidth = ((windowSize.width - 720) / 5.5).toFixed(1);
      logoFontSize = 20;
      logoWidth = 48;
      buttonHeight = 48;
      buttonWidth = 156;
      navtabsDisplay = "inline-block"
      burgerMenuDisplay = "none"
      buttonFontSize = 18;
      heartWidth=17
    } else if (windowSize.width >400 && windowSize.width < 1040) {
      navbarPadding = (windowSize.width / 45 + 7).toFixed(1);
      navbarHeight = 58;
      logoWidth = 40;
      logoFontSize = 16;
      buttonHeight = 40;
      buttonWidth = 105;
      navtabsDisplay = "none";
      burgerMenuDisplay = "inline-block";
      buttonFontSize = 14;
      heartWidth=15;
    } else if(windowSize.width <=400){
      navbarPadding = 14; // small screen
      navbarHeight = 48;
      logoWidth = 30;
      logoFontSize = 12;
      buttonHeight = 32;
      buttonWidth = 96;
      navtabsDisplay = "none";
      burgerMenuDisplay = "inline-block";
      buttonFontSize = 12;
      heartWidth=13;
    }
    
    const responsiveStyle = {
      navbarPadding,
      navitemWidth, 
      navbarHeight,
      logoWidth,
      logoFontSize,
      buttonHeight,
      buttonWidth,
      navtabsDisplay,
      burgerMenuDisplay,
      buttonFontSize,
      heartWidth,
    };
    return responsiveStyle;
  }

function NavTabs() {
  const responsiveNavbar = useWindowSize();
  const listItems = [{
    id: 'client',
    path: '/client/',
    title: 'Client',
  },{
    id: 'volunteer',
    path: '/volunteer/',
    title: 'Volunteer',
  },{
    id: 'partners',
    path: '/partners/',
    title: 'Partners',
  },{
    id: 'sponsors',
    path: '/sponsors/',
    title: 'Sponsors',
  },{
    id: 'home',
    path: '/',
    title: 'About us',
  },{
    id: 'contact',
    path: '/contact/',
    title: 'Contact',
  }]

  /** @function renderListItems */
  // This function takes in a list of object "listItems",
  // loop through each item and for each item,
  // render a <li></li> that represents a tab on a navbar.
  /** @function
   * @name renderListItems */

  
  const useStyles = makeStyles({
  navbar: {
            position: "sticky",
            top: "0%",
            left: "0%",
            right:"0%",
            height: responsiveNavbar.navbarHeight+"px",
            background: "#FFFFFF",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "0 "+responsiveNavbar.navbarPadding+"px",
            color: "black",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: 'Poppins',
            zIndex:99,
        },
    navtabs: {
            width: "fit-content",
            height: responsiveNavbar.navbarHeight,
            float: "right",
            padding: "0",
            margin: "0",
            listStyle: "none",
           display: "flex", 
            alignItems: "center",
        },
  navitem: {
    marginBottom: "-1px",
    display:responsiveNavbar.navtabsDisplay
  },

      navlink: {
            width: responsiveNavbar.navitemWidth + "px",
            maxWidth: "104px",
            minWidth:"86px",
            fontSize: "16px",
            textAlign: "center",
            lineHeight: responsiveNavbar.navbarHeight+"px",
            color: "black",
            padding: "0px",
            display: "block",
            textDecoration: "none",
  },
         active: {
            boxShadow: "0px 2px 0px #873FE2",
            color: "#873FE2!important"
        }

});

  const classes = useStyles();

  const renderListItems = () => {
    return listItems.map(item => (
      <li className={classes.navitem}>
        <Link
          to={item.path}
          id={item.id}
          className={classes.navlink}
          activeStyle={{ color: '#873FE2', boxShadow:"0px 2px 0px #873FE2" }}
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
  },);


  return (
        <div className={classes.navbar} >
            <Logo
                logoFontSize={responsiveNavbar.logoFontSize}
                logoWidth={responsiveNavbar.logoWidth}
      />
       <BurgerMenu>
         {renderListItems()}
        </BurgerMenu>
       <ul className={classes.navtabs}>
              {renderListItems()}
              <DonateBtn
                buttonHeight = {responsiveNavbar.buttonHeight}
                buttonWidth={responsiveNavbar.buttonWidth}
                buttonFontSize={responsiveNavbar.buttonFontSize}
                heartWidth={responsiveNavbar.heartWidth}
             />
        </ul>
        </div>
    );
  }

export default NavTabs;
