import React from "react"

import ThankYou from "./ThankYou"
import VitalRole from "./VitalRole"
import PartnerCards from "./PartnerCards"
import LastSection from "./LastSection"
import styles from "./Partners.module.css"

export default function Partners() {
  return (
    <div className={styles.rainbowImgHack}>
      <ThankYou />
      <VitalRole />
      <PartnerCards />
      <LastSection />
    </div>
  )
}
