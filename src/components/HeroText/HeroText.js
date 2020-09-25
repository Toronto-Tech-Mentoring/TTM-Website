import React from "react"
import styles from "./HeroText.module.css"

import rainbowHeart from "../../images/rainbowHeart.svg"
import cheetoLeft from "../../images/cheetos/cheetoLeft.svg"
import cheetoRight from "../../images/cheetos/cheetoRight.svg"


export default function HeroText(props) {
  return (
    <div className={styles.position}>
      {/* <CheetoLeft /> */}
      <img className={styles.left} alt="cheetoLeft" src={cheetoLeft} />

      <div className="heroContainer">
        <h1 className={styles.hero}>{props.heroText}</h1>
        <p className={styles.bodyText}>
          {props.heroBodyText}
          <img className={styles.f} alt="rainbow heart" src={rainbowHeart} />
        </p>
        <img className={styles.right} alt="cheetoRight" src={cheetoRight} />
      </div>
      {/* <CheetoRight /> */}
    </div>
  )
}
