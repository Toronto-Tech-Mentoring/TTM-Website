import React from "react"
import WhatIsTTM from "./WhatIsTTM"
import HowAreWeDifferentSection from "./HowAreWeDifferentSection"
import WhyTech from "./WhyTech"
 import Testmonials from "./Testmonials"
 import { SkylineFooter as SkylineFooterSVG } from "../SkylineSVG"


export default function LandingPage() {
  return (
    <>
      <WhatIsTTM />
      <HowAreWeDifferentSection />
      <WhyTech />
      <Testmonials />
      <SkylineFooterSVG />
    </>
  )
}
