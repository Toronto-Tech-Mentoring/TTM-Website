import React, { Suspense } from 'react'

import ClientSideRender from "../utils/ClientRendering"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"

export default function MainLayout({ children }) {

  return (
    <ClientSideRender>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
          {children}
        <Footer />
      </Suspense>
    </ClientSideRender>
  )
}
