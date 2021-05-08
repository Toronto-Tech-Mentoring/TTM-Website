import React from 'react';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles'
import ImgOpt from '../../utils/ImageOptimise.js'
const useStyles = makeStyles(theme => ({
    sectionContainer: {
        height: "calc(100vh - 205px)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        transition: "padding 0.2s ease",
    }
}))

export default function FirstSectionContainer(props){
    const classes = useStyles()
    const skyline = "covid1.jpg"

    return (
        <Box className={classes.sectionContainer} style={{ backgroundImage: `url(${<ImgOpt filename={skyline}/>})` }}>
            {props.children}
        </Box>
    )
}