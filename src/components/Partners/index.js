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
        heroBodyText="The Accelerator Project is an entirely volunteer-run organization. All donations go directly into offering tech mentoring to young people who have faced adversity."
      />
      <SkylineHeaderSVG />
      <VitalRole />
      <PartnerCards />
      <LastSection />
    </div>
  )
}
