import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  headerText: {
    fontFamily: "Josefin Sans",
    color: "black",
    fontWeight: 600,
    marginTop: "5px",
    marginBottom: "5px",
    fontSize: "calc(1.48vw + 14.7px)",
    lineHeight: "calc(2.31vw + 23.7px)",
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
      textAlign: "left",
    },
  },
}))

export { useStyles }
