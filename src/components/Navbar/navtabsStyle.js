import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  navbar: {
    position: "sticky",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "80px",
    background: "#FFFFFF",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "0px",
    color: "black",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Poppins",
    zIndex: 2000,
    [theme.breakpoints.down("1040")]: {
      height: "56px",
    },
    [theme.breakpoints.down("400")]: {
      height: "48px",
    },
  },
  navtabs: {
    width: "fit-content",
    height: "80px",
    float: "right",
    marginRight: "calc(25vw - 240px)",
    padding: "0",
    margin: "0",
    listStyle: "none",
    display: "inline-flex",
    alignItems: "center",
    [theme.breakpoints.down("1040")]: {
      height: "56px",
      marginRight: "calc(2.22vw + 7px)",
    },
    [theme.breakpoints.down("400")]: {
      height: "48px",
      marginRight: "calc(1.8vw + 9px)",
    },
  },
  navitem: {
    marginBottom: "-1px",
    display: "inline-block",
    [theme.breakpoints.down("1040")]: {
      display: "none",
    },
  },

  navlink: {
    width:"136px",
    maxWidth: "136px",
    minWidth: "86px",
    fontSize: "16px",
    textAlign: "center",
    lineHeight: "80px",
    color: "black",
    padding: "0px",
    display: "block",
    textDecoration: "none",
    borderStyle: "none",
    [theme.breakpoints.down("1040")]: {
      width: "auto",
      lineHeight: "56px",
      maxWidth: "100%",
      minWidth: "104px",
    },
    [theme.breakpoints.down("400")]: {
      lineHeight: "48px",
      maxWidth: "100%",
      minWidth: "104px",
    },
    "&:hover": {
      color: "#873FE2",
    },
  },
  active: {
    color: "#873FE2",
    boxShadow: "0px 2px 0px #873FE2",
    [theme.breakpoints.down("1040")]: {
      boxShadow: "3px 0px 0px #873FE2",
      marginRight: "2.5px",
    },
  },
  burgerMenu: {
    display: "none",
    [theme.breakpoints.down("1040")]: {
      display: "block",
    },
  },
}))

export { useStyles }
