import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "500px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}))

export { useStyles }
