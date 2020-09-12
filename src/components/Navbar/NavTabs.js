import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby"
import './Navbar.css'
import DonateBtn from "./DonateBtn"
class NavTabs extends Component {
  state = {
    currentPage: "home",
  };

  handlePageChange = event => {
    event.preventDefault()
    let page = event.target.id
    this.setState({ currentPage: page });
  }
  
  render() {
    return (
      <div className="navbar">
        <h6 className="logo h-100">Toronto Tech Mentoring</h6>
            <ul className="nav nav-tabs float-right">
              <li className="nav-item">
                <Link
                  to="/"
                  id ="about-us"
                  onClick={this.handlePageChange}
                  className={this.state.currentPage === "about-us" ? "nav-link active" : "nav-link"}
                >
                  About Us
              </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/client"
                  id="client"
                  onClick={this.handlePageChange}
                  className={this.state.currentPage === "client" ? "nav-link active" : "nav-link"}
                
                >
                  Client
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sponsors"
                  id="sponsors"
                  onClick={this.handlePageChange}
                  className={this.state.currentPage === "sponsors" ? "nav-link active" : "nav-link"}
                >
                  Sponsors
              </Link>
              </li>
            <DonateBtn/>
          </ul>
        
       </div>  
    );
  }
}
export default NavTabs;
