import React from "react"

import FirstSection from "./FirstSection"
import WhoWeServe from "./WhoWeServe"
import Applying from "./Applying"
// import TimelineSection from "./TimelineSection"
// import { SkylineFooter as SkylineFooterSVG } from "../SkylineSVG"
// import SecondSection from "./SecondSection"

export default function HowItWorks() {
  return (
    <div>
      <FirstSection />
      <WhoWeServe />
      <Applying />
      {/* <SecondSection />
      <OurRootsSection />
      <TimelineSection />
      <SkylineFooterSVG /> */}
    </div>
  )
}
