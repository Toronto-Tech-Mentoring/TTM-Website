import React from "react"

import TheBottomLineSection from "./TheBottomLineSection"
import OurRootsSection from "./OurRootsSection"
import TimelineSection from "./TimelineSection"
import WhyTechAndValuesDrivenSection from "../WhyTechSVG/index"
import { SkylineFooter as SkylineFooterSVG } from "../SkylineSVG"

export default function AboutUs() {
  return (
    <div>
      <WhyTechAndValuesDrivenSection />
      <TheBottomLineSection />
      <OurRootsSection />
      <TimelineSection />
      <SkylineFooterSVG />
    </div>
  )
}
