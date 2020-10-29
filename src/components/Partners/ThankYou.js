import React from "react"

import BoldedHeader from '../BoldedHeaderText/BoldedHeader'
import TextBox from '../TextBox/TextBox'
import Content from '../DecoratedText/DecoratedText'
// import styles from "./HeroText.module.css"
import CheetoLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetoRight from "../../images/cheetohs/cheetohRight.svg"
import { useStyles } from "../Cheetos/cheetohStyle"
import {
  SkylineHeader as SkylineHeaderSVG
} from "../SkylineSVG"

export default function WhatiIsTTM() {
    const classes = useStyles()
    const headerText = "Thank you for partnering with us"
    const content = "The Accelerator Project is part of an ecosystem of programs aimed at addressing homelessness in Toronto. Our delivery partners help facilitate our programs, and provide wrap-around support to allow our clients to focus on learning tech skills and building their futures."

  return (
    <div>
        <CheetoLeft className={classes.cheetohLeftMirrored} style={{'margin-top':'-1.6em'}} alt="cheetohLeft" />
        <TextBox style={{'margin-top':'135px', 'margin-right':'calc(46.5vw - 151px)','padding-right':'0'}}>
            <BoldedHeader headerText={headerText} style={{'font-size':'calc(1.3vw + 1em)'}}/>
            <Content content={content} style={{'text-align':'left' , 'margin-top':'-5px'}} hideCheetohs={["sm","xs","lg","md","xl"]}/>
            <CheetoRight className={classes.cheetohRightMirrored} style={{'margin-top':'calc(1vh + 1px)'}} alt="cheetohRight"/>
        </TextBox>
        <SkylineHeaderSVG />
    </div>
  )
}
