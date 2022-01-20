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
    [theme.breakpoints.down("1080")]: {
      height: "56px",
      position: "fixed",
    },
    [theme.breakpoints.down("400")]: {
      height: "48px",
      position: "fixed",
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
    [theme.breakpoints.down("1080")]: {
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
    [theme.breakpoints.down("1080")]: {
      display: "none",
    },
  },
  navlink: {
    width: "136px",
    maxWidth: "136px",
    minWidth: "86px",
    fontSize: "16px",
    textAlign: "center",
    lineHeight: "80px",
    color: "black",
    padding: "0px",
    display: "block",
    textDecoration: "none",
      textTransform: "none",
      fontFamily: "Poppins",
      fontWeight: "400",
    borderStyle: "none",
    [theme.breakpoints.down("1080")]: {
      width: "auto",
      lineHeight: "56px",
      textAlign: "left",
      maxWidth: "100%",
      minWidth: "104px",
      width: "100vw",
      maxWidth: "100vw",
      borderTopWidth: "1px",
      borderLeft: 0,
      borderRight: 0,
      borderColor: "#C4C4C4",
      borderStyle: "solid",
      textIndent: "16px",
    },
    [theme.breakpoints.down("400")]: {
      lineHeight: "48px",
      maxWidth: "100%",
      textAlign: "left",
      minWidth: "104px",
      width: "100vw",
      maxWidth: "100vw",
      borderTopWidth: "1px",
      borderLeft: 0,
      borderRight: 0,
      borderColor: "#C4C4C4",
      borderStyle: "solid",
      textIndent: "16px",
    },
    "&:hover": {
      color: "#873FE2",
    },
  },
  verticalDivider: {
    paddingRight: "16px",
    color: "#c4c4c4",
    [theme.breakpoints.down("1080")]: {
      display: "none",
    },
  },
  active: {
    color: "#873FE2",
    boxShadow: "0px 2px 0px #873FE2",
    [theme.breakpoints.down("1080")]: {
      boxShadow: "0px 0px 0px #873FE2",
      borderTopWidth: "2px",
      borderLeft: 0,
      borderRight: 0,
      borderColor: "#873FE2",
      borderStyle: "solid",
    },
  },
  dropDownList: {
    [theme.breakpoints.up("1080")]: {
      boxShadow: "none",
      minWidth: "172px",
    },
  },
  dropDownItemActive: {
    boxShadow: "2px 0px 0px #873FE2",
    [theme.breakpoints.up("1080")]: {
      boxShadow: "none",
      borderLeft: "3px solid #873FE2",
      borderRight: "3px solid #873FE2",
      margin: "0 -1px 0 -1px",
    },
  },
  burgerMenu: {
    display: "none",
    [theme.breakpoints.down("1080")]: {
      display: "block",
    },
  },
}))

export { useStyles }