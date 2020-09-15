import React from "react"
import { MainLayout } from "../layout";
import { HowAreWeDifferentSection, TheBottomLineSection } from "../components/Home";

export default function Home() {
  return (
    <MainLayout>
      <p>This is Home (About-us) page</p>
      <HowAreWeDifferentSection />
      <TheBottomLineSection />
    </MainLayout>
  )
}
