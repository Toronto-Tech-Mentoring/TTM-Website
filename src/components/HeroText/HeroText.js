import React from "react"
import styles from "./HeroText.module.css"
import CheetoLeft from "../Cheetos/cheetoLeft"
import CheetoRight from "../Cheetos/cheetoRight"
import rainbowHeart from "../../images/rainbowHeart.svg"

export default function HeroText(props) {
  return (
    <div className={styles.position}>
      <CheetoLeft />
      <div className="heroContainer">
        <h1 className={styles.hero}>{props.heroText}</h1>
        <p className={styles.bodyText}>{props.heroBodyText}</p>
        <img className={styles.f} alt="rainbow heart" src={rainbowHeart} />
      </div>
      <CheetoRight />
    </div>
  )
}
