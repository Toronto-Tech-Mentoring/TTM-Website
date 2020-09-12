import React from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
// import { Link } from "gatsby"
import Nav from "./Navbar/NavTabs"
import Home from "./Home/Home"
import Client from "./Client/Client"
import Sponsors from "./Sponsors/Sponsors"

export default function Container() {
  return (
  <div>
    <Nav/>
      <Router>
      <div>
        <Switch>
          <Route exact path={"/"}>
            <Home/>
          </Route>
          <Route exact path={"/client"}>
            <Client/>
          </Route>
          <Route exact path={"/sponsors"}>
            <Sponsors/>
          </Route>
          <Route exact path="/home">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  )
}

