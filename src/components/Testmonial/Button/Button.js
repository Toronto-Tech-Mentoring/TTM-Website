import React from "react"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
   style: {
    backgroundColor:"red",
    margin: "auto",
   },
   textinput:{
       fontFamily: "Poppins",
       fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "150%",
   }

  }))

const Button = ()=> {  
    const classes= useStyles()
    return ( 
        <div className={classes.style}>
            <p className={classes.textinput}> 
                dsjhshkdsd dsjhsdjk 
            </p>
        </div>
    )
}

export default Button