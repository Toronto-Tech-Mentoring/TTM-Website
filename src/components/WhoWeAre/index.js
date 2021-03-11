import React from "react"

import FirstSection from "./FirstSection"
import TheBottomLineSection from "./TheBottomLineSection"
import OurRootsSection from "./OurRootsSection"
import TimelineSection from "./TimelineSection"
import WhyTechAndValuesDrivenSection from "../WhyTechSVG/index"
import { SkylineFooter as SkylineFooterSVG } from "../SkylineSVG"

export default function AboutUs() {
  return (
    <div>
      <FirstSection />
      <WhyTechAndValuesDrivenSection />
      <TheBottomLineSection />
      <OurRootsSection />
      <TimelineSection />
      <SkylineFooterSVG />
    </div>
  )
}
