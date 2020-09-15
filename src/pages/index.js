import React from "react"
import { MainLayout } from "../layout";
import { HowAreWeDifferentSection } from "../components/Home";
import LeftAnchoredBubbleText from '../components/Home/LeftAnchoredBubbleText'

export default function Home() {
  return (
    <MainLayout>
      <p>This is Home (About-us) page</p>
      <HowAreWeDifferentSection />
      <LeftAnchoredBubbleText/>
    </MainLayout>
  )
}
