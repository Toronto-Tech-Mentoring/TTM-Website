import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby"
import './Navbar.css'
import DonateBtn from "./DonateBtn"
import Logo from  "./Logo"

class NavTabs extends Component {
  state = {
    currentPage: "home",
  };

  handlePageChange = event => {
    event.preventDefault()
    let page = event.target.id
    this.setState({ currentPage: page });
    console.log(this.state.currentPage)
  }
  
  render() {
    return (
      <div className="navbar">
            <Logo/>
            <ul className="nav nav-tabs float-right text-dark">
              <li className="nav-item">
                <Link
                  to="/client/"
                  id="client"
                  onClick={this.handlePageChange}
                  className={this.state.currentPage === "client" ? "nav-link active" : "nav-link"}
                >
                  Client
                </Link>
            </li>
             <li className="nav-item">
                <Link
                  to="/volunteer/"
                  id ="volunteer"
                  onClick={this.handlePageChange}
                  className={this.state.currentPage === "volunteer" ? "nav-link active" : "nav-link"}
                >
                  Volunteer
              </Link>
              </li>
             <li className="nav-item">
                <Link
                  to="/partners/"
                  id ="partners"
                  onClick={this.handlePageChange}
                  className={this.state.currentPage === "partners" ? "nav-link active" : "nav-link"}
                >
                  Partners
              </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sponsors/"
                  id="sponsors"
                  onClick={this.handlePageChange}
                  className={this.state.currentPage === "sponsors" ? "nav-link active" : "nav-link"}
                >
                  Sponsors
              </Link>
            </li>
             <li className="nav-item">
                <Link
                  to="/"
                  id ="home"
                  onClick={this.handlePageChange}
                  className={this.state.currentPage === "home" ? "nav-link active" : "nav-link"}
                >
                  About Us
              </Link>
              </li>
             <li className="nav-item">
                <Link
                  to="/contact/"
                  id ="contact"
                  onClick={this.handlePageChange}
                  className={this.state.currentPage === "contact" ? "nav-link active" : "nav-link"}
                >
                  Contact
              </Link>
              </li>
            <DonateBtn/>
          </ul>
        
       </div>  
    );
  }
}
export default NavTabs;
