import React from "react"

import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import ClientSideRendering from "../utils/ClientRendering"
import "../styles/global.css"

export default function MainLayout({ children }) {
  return (
    <ClientSideRendering>
      <NavBar />
      {children}
      <Footer />
    </ClientSideRendering>
  )
}
