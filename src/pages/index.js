import React from "react"
import { MainLayout } from "../layout";
import AboutUs from "../components/AboutUs"


import LeftAnchoredBubbleText from "../components/Home/LeftAnchoredBubbleText"
import HeroText from "../components/HeroText/HeroText"

export default function Home() {
  return (
    <MainLayout>
      <AboutUs/>
    </MainLayout>
  )
}
