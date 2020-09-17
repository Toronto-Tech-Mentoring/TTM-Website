import React from "react"
import skylinehead from "../../images/skyline/skylineheader.svg"
import styles from "./skyline.module.css"

export default function SkylineHeaderSVG() {
  return <img className={styles.spacing} alt="city" src={skylinehead} />
}
