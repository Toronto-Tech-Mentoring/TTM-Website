import React from "react"
import { MainLayout } from "../layout"
import {
  HowAreWeDifferentSection,
  TheBottomLineSection,
  OurRootsSection,
  TimelineSection,
} from "../components/Home"
import {
  SkylineHeader as SkylineHeaderSVG,
  SkylineFooter as SkylineFooterSVG,
} from "../components/SkylineSVG"

import LeftAnchoredBubbleText from "../components/Home/LeftAnchoredBubbleText"
import HeroText from "../components/HeroText/HeroText"

export default function Home() {
  return (
    <MainLayout>
      {/* <LeftAnchoredBubbleText/> */}
      <SkylineHeaderSVG />
      {/* @Hanlin and @Saint -> The line of code is the back city SVG.
        Feel free to use it or replace it with your own. 
       */}
      <HeroText
        heroText="What is Toronto Tech Mentoring?"
        heroBodyText="We aim to empower homeless and underhoused individuals in Toronto through technology skills, mentorship and other learning supports to achieve professional, entrepreneurial or personal goals. Our core program delivers mentorship for marginalized young people (including LGBTQ+)"
      />
      <HowAreWeDifferentSection />
      <TheBottomLineSection />
      <OurRootsSection />
      <TimelineSection />
      <SkylineFooterSVG />
    </MainLayout>
  )
}
