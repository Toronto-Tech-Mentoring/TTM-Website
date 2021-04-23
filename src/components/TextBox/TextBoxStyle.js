import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    textBox: {
        position: "absolute",
        width: "calc(66vw + 32px)",
        [theme.breakpoints.down("768")]: {
            width: "calc(42.3vw + 136.8px)",
        },
    },
}))

export { useStyles }