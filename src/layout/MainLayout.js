import React from "react"

import ClientSideRender from "../utils/ClientRendering"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"

export default function MainLayout({ children }) {

  return (
    <ClientSideRender>
      <NavBar />
      {children}
      <Footer />
    </ClientSideRender>
  )
}
