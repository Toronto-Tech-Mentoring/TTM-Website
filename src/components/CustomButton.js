import React from "react"
import { makeStyles } from "@material-ui/core/styles"
//
const useStyles = makeStyles(theme => ({
  contactButton: {
    borderRadius: "300px",
    width: "200px",
    height: "50px",
    fontSize: "18px",
    borderStyle: "none",
    fontFamily: "Poppins",
  },
}))

/** @Component: CustomButton
 * Takes three properties
 * 1) text - as the inner text
 * 2) customClass - Use this prop as one additional class to the button depending on your needs, recommended to use useStyles class
 * 3) customStyle - Use this prop to override some changes to classes
 */

export default function CustomButton({ text, customClass, customStyles }) {
  const classes = useStyles()

  return (
    <button
      style={customStyles}
      className={`${classes.contactButton} ${customClass}`}
    >
      {text}
    </button>
  )
}
