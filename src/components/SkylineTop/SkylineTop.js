import React from "react"
import SkylineTopSvg from "../../images/skyline/fullSkyline.svg"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    container: {
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100vw",
        height: "calc(14vw + 151px)",
        maxHeight: "700px",
         [theme.breakpoints.down("768")]: {
              height: "calc(16vw + 136px)",
        },
    },
    skyline: {
        height: "calc(14vw + 151px)",
        width: "auto",
        maxHeight: "700px",
        marginLeft: "0px",
        [theme.breakpoints.down("1435")]: {
         marginLeft: "calc(22vw  - 313px)",
        },
        [theme.breakpoints.down("768")]: {
           height: "calc(16vw + 136px)",
           marginLeft:"calc(27.5vw  - 392px)"
        },
    },
}))

export default function SkylineTop() {
    const classes = useStyles();
    return (<div className={classes.container}>
        <SkylineTopSvg className={classes.skyline}/>
    </div>
    )
}