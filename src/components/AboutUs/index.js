import React from "react"
import Grid from '@material-ui/core/Grid';


import WhatIsTTM from './WhatIsTTM'
import HowAreWeDifferentSection from './HowAreWeDifferentSection';
import TheBottomLineSection  from './TheBottomLineSection';
import OurRootsSection from './OurRootsSection';
import TimelineSection from './TimelineSection';
import WhyTechAndValuesDrivenSection from '../WhyTechSVG/index';
import { SkylineFooter as SkylineFooterSVG} from "../SkylineSVG"

export default function AboutUs() {
  return (
    <div>
      <WhatIsTTM />
      <WhyTechAndValuesDrivenSection />
      <HowAreWeDifferentSection />
      <TheBottomLineSection />
      <OurRootsSection />
      <TimelineSection />
      <SkylineFooterSVG />
    </div>
  )
}
