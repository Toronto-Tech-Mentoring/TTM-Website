import React from "react"
import styles from "./HeroText.module.css"
import titleRight from "../../images/about-us/bottom-line/titleRight.svg"
import titleLeft from "../../images/about-us/bottom-line/titleLeft.svg"
import rainbowHeart from "../../images/rainbowHeart.svg"

export default function HeroText(props) {
  return (
    <div className={styles.position}>
      <img
        className={styles.center}
        alt="title decoration left"
        src={titleLeft}
      />
      <div className="heroContainer">
        <h1 className={styles.hero}>{props.heroText}</h1>
        <p className={styles.bodyText}>{props.heroBodyText}</p>
        <img className={styles.f} alt="rainbow heart" src={rainbowHeart} />
      </div>
      <img
        className={styles.center}
        alt="title decoration right"
        src={titleRight}
      />
    </div>
  )
}
