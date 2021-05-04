import React from 'react';
import Title from "../SectionTitle/Title"
import Collapsible from 'react-collapsible';
import GridContainer from '../GridContainer/GridContainer';
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core"
import TextBox from "../TextBox/TextBox"
import Chevron from "../../images/how-it-works/chevron-down.svg"


const useStyles = makeStyles(theme => ({
    openedCollapseBox: {
        border: "2px solid #4529AE",
        fontFamily: "Poppins",
        padding: "24px",
        borderRadius: "10px",
        marginBottom: "15px"
    },
    closedCollapseBox: {
        border: "1px solid #C4C4C4",
        fontFamily: "Poppins",
        padding: "24px",
        borderRadius: "10px",
        marginBottom: "15px",
    },
    textBox: {
        paddingTop: "147px",
        paddingLeft: "calc(19.2vw - 53px)",
        paddingRight: "calc(19.2vw - 53px)",
    },
    triggerStyle: {
        display: "block",
        fontWeight: "400",
        textDecoration: "none",
        color: "black",
        position: "relative",
        paddingRight: "30px",
        "&::after": {
            fontFamily: 'Font Awesome\\ 5 Free',
            fontWeight: "900",
            content: '"\\005e"',
            position: "absolute",
            right: "10px",
            transition: "transform 300ms",
            transform: "rotateZ(180deg)",
            fontSize: "20px"
        }
  },
    openTriggerStyle: {
                display: "block",
        textDecoration: "underline",
        textDecorationColor: "#FF7500",
        textUnderlinePosition: "under",
        fontWeight: "600",
        position: "relative",
        paddingRight: "30px",
        "&::after": {
            fontFamily: 'Font Awesome\\ 5 Free',
            fontWeight: "900",
            content: '"\\005e"',
            position: "absolute",
            right: "10px",
            transition: "transform 300ms",
            fontSize: "20px",
            color: "#4529AE",
    }
}

}))

export default function Faq() {
    const styles = useStyles()

    return (
        <GridContainer>
            <Grid item xs={12}>

                <TextBox style={{
                    paddingLeft: "calc(19.2vw - 53px)",
                    paddingRight: "calc(19.2vw - 53px)",
                }}>
                    <Title title="Frequently asked questions:" />
                    <Collapsible className={styles.closedCollapseBox} openedClassName={styles.openedCollapseBox} triggerClassName={styles.triggerStyle} triggerOpenedClassName={styles.openTriggerStyle} trigger="Do I have to be at one of the partnered shelters or transitional housing programs?">
                        <p>
                            No. We work with anyone facing housing instability.

                        </p>
                    </Collapsible>
                    <Collapsible className={styles.closedCollapseBox} openedClassName={styles.openedCollapseBox} triggerClassName={styles.triggerStyle} triggerOpenedClassName={styles.openTriggerStyle} trigger="Do I need to know anything about computers beforehand?">
                        <p>
                            Our mentors are prepared to meet you where you’re at — no background education needed.

                        </p>
                    </Collapsible>
                    <Collapsible className={styles.closedCollapseBox} openedClassName={styles.openedCollapseBox} triggerClassName={styles.triggerStyle} triggerOpenedClassName={styles.openTriggerStyle} trigger="Do I need to have my own computer?">
                        <p>
                            It’s easier if you have your own computer. But, if you don’t, we’ll try our best to connect you with the tech you’ll need for the program.

                        </p>
                    </Collapsible>
                    <Collapsible className={styles.closedCollapseBox} openedClassName={styles.openedCollapseBox} triggerClassName={styles.triggerStyle} triggerOpenedClassName={styles.openTriggerStyle} trigger="Does this cost money?">
                        <p>
                        This program is 100% free.

                        </p>
                    </Collapsible>
                    <Collapsible className={styles.closedCollapseBox} openedClassName={styles.openedCollapseBox} triggerClassName={styles.triggerStyle} triggerOpenedClassName={styles.openTriggerStyle} trigger="What if I’m not facing housing instability? Can I still participate?">
                        <p>
                            Our program is designed for people who are facing housing instability, but we can refer you to other programs that may be a better fit. We also welcome volunteers of all skill levels if you’d like to get involved.

                        </p>
                    </Collapsible>
                </TextBox>
            </Grid>

        </GridContainer>
    )
}