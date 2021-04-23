import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    headerText: {
        fontFamily: "Josefin Sans",
        color: "black",
        fontWeight: 600,
        marginBottom: "5px",
        marginTop: "0px",
        fontSize: "36px",
        lineHeight: "57px",
        [theme.breakpoints.down("768")]: {
            textAlign: "left",
            fontSize: "24px",
            lineHeight: "41px"
        },
        [theme.breakpoints.down("360")]: {
            fontSize: "20px",
            lineHeight: "32px"
        },
    },
}))

export { useStyles }