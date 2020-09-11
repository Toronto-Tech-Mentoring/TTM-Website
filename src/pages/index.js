import React from "react"
import { Link } from "gatsby"
import HowAreWeDifferentSection from '../components/HowAreWeDifferentSection'

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <h1>Hello Gatsby! sadsadsadasd</h1>
      <p>What a world.</p>
      <HowAreWeDifferentSection />
    </div>
  )
}
