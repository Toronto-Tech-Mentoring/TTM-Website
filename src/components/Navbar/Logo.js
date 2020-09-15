import React from "react"
import LogoTtm from "../../images/navbar/logo-ttm.png"
import './Navbar.css'


export default function Logo() {
  return (
      <div>
        <img className="logo" src={LogoTtm} alt="TTM logo"/>
        <h6 className="d-inline mt-auto mb-auto">Toronto Tech Mentoring</h6>
    </div>
  )
}