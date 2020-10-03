import React from "react"

import HowAreWeDifferentSection from './HowAreWeDifferentSection';
import TheBottomLineSection  from './TheBottomLineSection';
import OurRootsSection from './OurRootsSection';
import TimelineSection from './TimelineSection';
import ValuesDriven from '../WhyTechSVG/ValuesDriven';
import WhyTech from '../WhyTechSVG/WhyTech';
import Computer from '../WhyTechSVG/ComputerSVG';
import Hands from '../WhyTechSVG/HandsSVG';
import {
  SkylineHeader as SkylineHeaderSVG,
  SkylineFooter as SkylineFooterSVG,
} from "../SkylineSVG"
import HeroText from "../HeroText/HeroText"
import ClientSideRender from "../../utils/ClientRendering"

export default function Home() {
  return (
    <div>
      <SkylineHeaderSVG />
      <HeroText
        heroText="What is Toronto Tech Mentoring?"
        heroBodyText="We aim to empower homeless and underhoused individuals in Toronto through technology skills, mentorship and other learning supports to achieve professional, entrepreneurial or personal goals. Our core program delivers mentorship for marginalized young people (including LGBTQ+)"
      />
      <WhyTech />
      <Hands />
      <ValuesDriven/>
      <HowAreWeDifferentSection />
      <TheBottomLineSection />
      <Computer />
      <OurRootsSection />
      <TimelineSection />
      <SkylineFooterSVG />
    </div>
  )
}
