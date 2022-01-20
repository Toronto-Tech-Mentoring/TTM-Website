import React from "react"
import { ReactComponent as cheetoLeft } from "../../images/cheetohs/cheetoLeft.svg"

export default function CheetoLeft({ customClass }) {
  return <img alt="cheetoLeft" className={customClass} src={cheetoLeft} />
}
