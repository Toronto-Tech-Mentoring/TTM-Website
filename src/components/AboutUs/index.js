import React from "react"
import { MainLayout } from "../../layout";
import HowAreWeDifferentSection from './HowAreWeDifferentSection';
import TheBottomLineSection  from './TheBottomLineSection';
import OurRootsSection from './OurRootsSection';
import TimelineSection from './TimelineSection';
import LeftAnchoredBubbleText from './LeftAnchoredBubbleText'
import { CitySVG as SecondBackgroundCitySVG, CitySVG2 as FirstBackgroundCitySVG} from "../SVG";


export default function Home(){
  return (
    <div>
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
    </div>
  )
}