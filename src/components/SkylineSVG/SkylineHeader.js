import React from "react"
import Skylinehead from "../../images/skyline/skylineheader.svg"
import styles from "./skyline.module.css"

export default function SkylineHeaderSVG() {

  return (
    <div className={styles.moveUp}>
      <Skylinehead className={styles.skylineSettings} />
    </div>
  )
}
