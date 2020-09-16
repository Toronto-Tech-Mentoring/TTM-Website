import React from "react"
import { MainLayout } from "../layout";
import { HowAreWeDifferentSection, TheBottomLineSection, OurRootsSection, TimelineSection } from "../components/Home";
import { CitySVG as SecondBackgroundCitySVG, CitySVG2 as FirstBackgroundCitySVG} from "../components/SVG";
import LeftAnchoredBubbleText from '../components/Home/LeftAnchoredBubbleText'

export default function Home(){
  return (
    <MainLayout>
      {/* <LeftAnchoredBubbleText/> */}
      <FirstBackgroundCitySVG />  
      {/* @Hanlin and @Saint -> The line of code is the back city SVG.
        Feel free to use it or replace it with your own. 
       */}
      <HowAreWeDifferentSection /> 
      <TheBottomLineSection />
      <OurRootsSection />
      <TimelineSection />
      <SecondBackgroundCitySVG />
    </MainLayout>
  )
}
