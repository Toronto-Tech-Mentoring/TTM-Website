import React from "react"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core"


import GridContainer from "../GridContainer/GridContainer"
import Title from "../SectionTitle/Title"
import PContent from "../DecoratedText/DecoratedText"
import SVGLoad from "../SVGLoad/SVG"
import Group from "../../images/how-it-works/Group99.svg"

const useStyles = makeStyles(theme => ({
  textBox: {
    paddingRight: "0",
    paddingLeft: "calc(19.4vw - 53.7px)",
    [theme.breakpoints.down("960")]: {
      paddingRight: "calc(36.3vw - 115px)",
      fontSize: "calc(0.49vw + 12.2px)",
      lineHeight: "calc(0.98vw + 20.5px)"
    },
  },
  pcontent: {
    fontSize: "calc(0.37vw + 12.7px)"
  }
}))

export default function VitalRole() {
  const styles = useStyles()
  const title = "Who do we serve?"
    const title2 = "What you can expect to get out of it?"
  const content1 =
    "We provide tech mentoring to anyone who has faced housing instability and is interested in learning tech skills."
  const content2 =
    "We don’t prescribe a certain project or learning outcome. Instead, we work with you to develop your own goals and a project that aligns with those."

  return (
    <GridContainer>
      <Grid item xs={12} md={6}>
        <Box className={styles.textBox}
          style={{
            "padding-left": "calc(19.4vw - 53.7px)",
            "padding-bottom": "30px"

          }}
        >
          <Title
            title={title}
            style={{ "text-align": "left"}}
            hideCheetohs={["sm", "xs", "lg", "md", "xl"]}
          />
          <PContent
            content={content1}
            style={{ "text-align": "left", "fontSize": "calc(0.37vw + 12.7px)"  }}
            hideCheetohs={["sm", "xs", "lg", "md", "xl"]}
          />

        </Box>
        <Box  className={styles.textBox} style={{
            "padding-left": "calc(19.4vw - 53.7px)",
            "padding-top": "30px"
          }}>
          <Title
            title={title2}
            style={{ "text-align": "left" }}
            hideCheetohs={["sm", "xs", "lg", "md", "xl"]}
          />
          <Hidden smDown>
            <PContent
              content={content2}
              style={{ "text-align": "left", "fontSize": "calc(0.37vw + 12.7px)"  }}
              hideCheetohs={["sm", "xs", "lg", "md", "xl"]}
            />
          </Hidden>
          <Hidden mdUp>
            <SVGLoad image={Group} alt="group 99 svg" />
            <PContent
              content={content2}
              style={{ "text-align": "left", "fontSize": "calc(0.37vw + 12.7px)"  }}
              hideCheetohs={["sm", "xs", "lg", "md", "xl"]}
            />
          </Hidden>
        </Box>
      </Grid>
      <Hidden smDown>
        <Grid item xs={12} md={6}>
          <SVGLoad image={Group} alt="group 99 svg" style={{ paddingTop: "0", marginTop: "138px" }}/>
        </Grid>
      </Hidden>
      <Grid item xs={12}>
        <Container maxWidth="large">
          <Typography component="div" style={{ height: "10vh" }} />
        </Container>
      </Grid>
    </GridContainer>
  )
}
