import React from "react"
import { MainLayout } from "../layout"
import {
  HowAreWeDifferentSection,
  TheBottomLineSection,
  OurRootsSection,
  TimelineSection,
  WhyTechSection
} from "../components/Home"
import {
  SkylineHeader as SkylineHeaderSVG,
  SkylineFooter as SkylineFooterSVG,
} from "../components/SkylineSVG"

import HeroText from "../components/HeroText/HeroText"

export default function Home() {
  return (
    <MainLayout>
      {/* <LeftAnchoredBubbleText/> */}
      <SkylineHeaderSVG />
      <HeroText
        heroText="What is Toronto Tech Mentoring?"
        heroBodyText="We aim to empower homeless and underhoused individuals in Toronto through technology skills, mentorship and other learning supports to achieve professional, entrepreneurial or personal goals. Our core program delivers mentorship for marginalized young people (including LGBTQ+)"
      />
      <WhyTechSection />
      <HowAreWeDifferentSection />
      <TheBottomLineSection />
      <OurRootsSection />
      <TimelineSection />
      <SkylineFooterSVG />
    </MainLayout>
  )
}
