import React from "react";
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import DonateBtn from "./DonateBtn"
import Logo from  "./Logo"


const useStyles = makeStyles({
   root: {
            margin: "0px",
            padding: "0px",
            boxSizing: "border-box"
        },
  navbar: {
            position: "sticky",
            left: "0%",
            right: "0%",
            top: "0%",
            height: "80px",
            background: "#FFFFFF",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "0 8.3%",
            color: "black",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between"
        },
  navtabs: {
            width: "fit-content",
            height: "80px",
            float: "right!important",
            display: "flex",
            flexWrap: "wrap",
            paddingLeft: "0",
            marginBottom: "0",
            listStyle: "none",
            marginTop: "0"
        },
  navitem: {
            marginBottom: "-1px"
  },
  
      navlink: {
            width: "104px",
            fontSize: "16px",
            textAlign: "center",
            lineHeight: "80px",
            color: "black",
            padding: "0px",
            display: "block",
            textDecoration: "none",
  },
         active: {
            boxShadow: "0px 2px 0px #873FE2",
            lineHeight: "80px",
            color: "#873FE2!important"
        }
        
});



function NavTabs() {
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

  const renderListItems = () => {
    return listItems.map(item => (
      <li className={classes.navitem}>
        <Link
          to={item.path}
          id={item.id}
          className={classes.navlink}
          activeStyle={{ color: '#873FE2', lineHeight:'78px', boxShadow:"0px 2px 0px #873FE2" }}
        >
          {item.title}
        </Link>
      </li>
    ))
  }
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.navbar}>
            <Logo/>           
            <ul className={classes.navtabs}>
              {renderListItems()}
              <DonateBtn/>
            </ul>
        </div> 
      </div>
    );
  }
export default NavTabs;
