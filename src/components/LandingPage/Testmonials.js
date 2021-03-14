import React from "react"; 
import ExpandingTextBox from "../ExpandingTextBox/ExpandingTextBox"
import Button from "../../components/Testmonial/Button/Button"
import ContactButton from "../Button/ContactButton"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({

  
    header: {
        fontFamily: "Josefin Sans",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "22px",
        lineHeight: "38px",
        display: "flex",
        alignItems: "center",
        color: "#000000"
    },
    text: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "27px",
        display: "flex",
        alignItems: "center",
        color: "#000000",
        marginBottom: "16px"
        
    },
    textContainer : {
      width: "49vw",

    },
  
    bottomText: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "31px",
      color: "#000000",
      marginBottom: "24px",
      textAlign: "left",
    },
    names: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "27px",
      color: "#000000",
    },
    textBox:{
        marginBottom: "40px"
    }
  }))

const Testmonials = () =>{
    const classes = useStyles()

    return(
        <> 
        <div>
            <h2 className={classes.header}>Have you faced adversity and want to learn tech skills?</h2>
            <div className={classes.textContainer}>
            <p className={classes.text}>If you are a person facing facing homelessness and housing precarity, we will work with you to give you the tech knowledge, skills and advice to help you achieve your personal, professional or entrepreneurial goals.</p>
            </div>
        <ExpandingTextBox className={classes.textBox}/>
        <ContactButton
        buttonText={"hello"}
        />
</div>
        </>
    )
}

export default Testmonials