import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    contents: {
        fontFamily: "Poppins",
        fontSize: "18px",
        lineHeight: "31px",
        padding: "5px",
        marginBottom: "-5px",
        [theme.breakpoints.down("768")]: {
            padding: "0px",
            paddingRight: "0px",
            textAlign: "center",
            fontSize: "px",
        },
        [theme.breakpoints.down("360")]: {
            fontSize: "14px",
            lineHeight: "27px",
        },

    },
}))

export { useStyles }