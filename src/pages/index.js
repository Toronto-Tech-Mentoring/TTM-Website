import React from "react"
import { MainLayout } from "../layout";
import { HowAreWeDifferentSection, TheBottomLineSection, OurRootsSection, TimelineSection, WhyTechSection} from "../components/Home";
import { CitySVG as SecondBackgroundCitySVG, CitySVG2 as FirstBackgroundCitySVG} from "../components/SVG";

export default function Home(){
  return (
    <MainLayout>
      <FirstBackgroundCitySVG />  
      {/* @Hanlin and @Saint -> The line of code is the back city SVG.
        Feel free to use it or replace it with your own. 
       */}
      <WhyTechSection/>
      <HowAreWeDifferentSection /> 
      <TheBottomLineSection />
      <OurRootsSection />
      <TimelineSection />
      <SecondBackgroundCitySVG />

    </MainLayout>
  )
}
