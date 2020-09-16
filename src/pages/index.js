import React from "react"
import { MainLayout } from "../layout";
import { HowAreWeDifferentSection, TheBottomLineSection, OurRootsSection } from "../components/Home";
import { CitySVG, CitySVG2 } from "../components/SVG";
import LeftAnchoredBubbleText from '../components/Home/LeftAnchoredBubbleText'

export default function Home(){
  return (
    <MainLayout>
      <LeftAnchoredBubbleText/>
      <CitySVG2 />  
      {/* @Hanlin and @Saint -> The line of code is the back city SVG.
        Feel free to use it or replace it with your own. 
       */}
      <HowAreWeDifferentSection /> 
      <TheBottomLineSection />
      <OurRootsSection />
      <CitySVG />
    </MainLayout>
  )
}
