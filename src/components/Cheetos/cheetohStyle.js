import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    cheetohRight: {
        float: "right",
        transform: "rotate(330deg)",
    },
    cheetohLeft: {
        margin: "-2em 10px 0px 0px",
        float: "left",
        transform: "rotate(330deg)",
    },
    cheetohRightMirrored: {
        float: "right",
        transform: "scaleY(-1) rotate(315deg)",
    },
    cheetohLeftMirrored: {
        float: "left",
        transform: "scaleY(-1) rotate(315deg)",
    },
}))

export { useStyles }