import React from "react"
import { Link } from "gatsby"
import HowAreWeDifferentSection from '../components/HowAreWeDifferentSection'
import LeftAnchoredBubbleText from '../components/LeftAnchoredBubbleText'

export default function Home() {
  return (
    <div>
      <Link to="/contact/">Contact</Link>
      <h1>Hello Gatsby! sadsadsadasd</h1>
      <p>What a world.</p>
      <LeftAnchoredBubbleText/>
      <HowAreWeDifferentSection />
    </div>
  )
}
