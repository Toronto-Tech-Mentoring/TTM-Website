import React, { useEffect } from "react"
import Skylinehead from "../../images/skyline/skylineheader.svg"
import styles from "./skyline.module.css"

export default function SkylineHeaderSVG() {
  // const [currentSrc, updateSrc] = useState(null)
  // const src = skylinehead

  // useEffect(() => {
  //   // start loading original image
  //   const imageToLoad = new Image()
  //   imageToLoad.src = src
  //   imageToLoad.onload = () => {
  //     // When image is loaded replace the src and set loading to false
  //     updateSrc(src)
  //   }
  // }, [src])
  // useEffect(() => {
  //   const imageList = [skylinehead]
  //   imageList.forEach((image) => {
  //     new Image().src = image
  //   });
  // }, [])

  // return <img className={styles.spacing} alt="city" src={require(skylinehead)} />
  return (
    <div>
      <Skylinehead style={{height: 'auto', width: '100%'}} />
    </div>
  )
}
