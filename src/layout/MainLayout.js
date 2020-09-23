import React from "react"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
export default function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
