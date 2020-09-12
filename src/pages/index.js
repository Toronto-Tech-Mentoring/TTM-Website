import React from "react"
import { Link } from "gatsby"
import HowAreWeDifferentSection from '../components/HowAreWeDifferentSection'
import LeftAnchoredBubbleText from '../components/LeftAnchoredBubbleText'
import aboutUsTexts from '../texts/pg-about-us'

export default function Home() {
  return (
    <div>
      <Link to="/contact/">Contact</Link>
      <h1>Hello Gatsby! sadsadsadasd</h1>
      <p>What a world.</p>
      <HowAreWeDifferentSection />
      <LeftAnchoredBubbleText
        headerText={aboutUsTexts.whyTechHeader}
        bodyText={aboutUsTexts.whyTechBody}/>
    </div>
  )
}
