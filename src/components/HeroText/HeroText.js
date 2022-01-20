import React from "react"
import styles from "./HeroText.module.css"
import { ReactComponent as rainbowHeart } from "../../images/about-us/rainbowHeart.svg"
import { ReactComponent as cheetoLeft } from "../../images/cheetohs/cheetohLeft.svg"
import { ReactComponent as cheetoRight } from "../../images/cheetohs/cheetohRight.svg"

export default function HeroText(props) {
  return (
    <div className={styles.position}>
      <img className={styles.left} alt="cheetoLeft" src={cheetoLeft} />
      <h1 className={styles.hero}>{props.heroText}</h1>
      <div className={styles.bodyText}>
        {props.heroBodyText}
        <img className={styles.heart} alt="rainbow heart" src={rainbowHeart} />
        <img className={styles.right} alt="cheetoRight" src={cheetoRight} />
      </div>
    </div>
  )
}
