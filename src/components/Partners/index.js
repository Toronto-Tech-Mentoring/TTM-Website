import React from "react"

import VitalRole from "./VitalRole"
import PartnerCards from "./PartnerCards"
import LastSection from "./LastSection"
import HeroText from "../HeroText/HeroText"
import { SkylineHeader as SkylineHeaderSVG } from "../SkylineSVG"
import styles from "./Partners.module.css"

export default function Partners() {
  return (
    <div className={styles.rainbowImgHack}>
      <HeroText
        heroText="Thank you for partnering with us"
        heroBodyText="The Accelerator Project is part of an ecosystem of programs aimed at addressing homelessness in Toronto. Our delivery partners help facilitate our programs, and provide wrap-around support to allow our clients to focus on learning tech skills and building their futures."
      />
      <SkylineHeaderSVG />
      <VitalRole />
      <PartnerCards />
      <LastSection />
    </div>
  )
}
