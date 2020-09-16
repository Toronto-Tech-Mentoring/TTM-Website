import React from "react"
import { MainLayout } from "../layout";
import { HowAreWeDifferentSection, TheBottomLineSection, OurRootsSection } from "../components/Home";
import { CitySVG, CitySVG2 } from "../components/SVG";

export default function Home(){
  return (
    <MainLayout>
      <p>This is Home (About-us) page</p>
      <CitySVG2 />
      <HowAreWeDifferentSection />
      <TheBottomLineSection />
      <OurRootsSection />
      <CitySVG />
    </MainLayout>
  )
}
