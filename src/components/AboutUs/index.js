import React from "react"
import People from "../../images/about-us/bottom-line/people.svg"
import HowAreWeDifferentSection from "./HowAreWeDifferentSection"
import TheBottomLineSection from "./TheBottomLineSection"
import OurRootsSection from "./OurRootsSection"
import TimelineSection from "./TimelineSection"
import WhyTechAndValuesDrivenSection from "../WhyTechSVG/index"
import {
  SkylineHeader as SkylineHeaderSVG,
  SkylineFooter as SkylineFooterSVG,
} from "../SkylineSVG"
import HeroText from "../HeroText/HeroText"

export default function AboutUs() {
  return (
    <div>
      <HeroText
        heroText="What is Toronto Tech Mentoring?"
        heroBodyText="We aim to empower homeless and underhoused individuals in Toronto through technology skills, mentorship and other learning supports to achieve professional, entrepreneurial or personal goals. Our core program delivers mentorship for marginalized young people (including LGBTQ+)."
      />
      <SkylineHeaderSVG />
      <WhyTechAndValuesDrivenSection />
      <HowAreWeDifferentSection />
      <TheBottomLineSection />
      <OurRootsSection />
      <TimelineSection />
      <SkylineFooterSVG />
    </div>
  )
}
