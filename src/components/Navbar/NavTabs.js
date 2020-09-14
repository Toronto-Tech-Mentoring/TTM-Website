import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby"
import './Navbar.css'
import DonateBtn from "./DonateBtn"
import Logo from  "./Logo"

function NavTabs() {
  let path = window.location.pathname;
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
    title: 'Partner',
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

  const renderListItems = (path) => {
    return listItems.map(item => (
      <li className="nav-item">
        <Link
          to={item.path}
          id={item.id}
          className={path === item.path ? "nav-link active" : "nav-link"}
        >
          {item.title}
        </Link>
      </li>
    ))
  }
  
  return (
      <div className="navbar">
            <Logo/>
            <ul className="nav nav-tabs float-right text-dark">
              {renderListItems(path)}
              <DonateBtn/>
            </ul>
       </div>  
    );
  }
export default NavTabs;
