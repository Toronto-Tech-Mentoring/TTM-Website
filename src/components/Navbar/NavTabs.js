import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby"
import './Navbar.css'
import DonateBtn from "./DonateBtn"
import Logo from  "./Logo"

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

  const renderListItems = () => {
    return listItems.map(item => (
      <li className="nav-item">
        <Link
          to={item.path}
          id={item.id}
          className='nav-link'
          activeStyle={{ color: '#873FE2', lineHeight:'78px', boxShadow:"0px 2px 0px #873FE2" }}
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
              {renderListItems()}
              <DonateBtn/>
            </ul>
       </div>  
    );
  }
export default NavTabs;
