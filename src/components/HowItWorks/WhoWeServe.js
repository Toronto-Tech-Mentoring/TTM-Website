import React from "react"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

import GridContainer from "../GridContainer/GridContainer"
import TextBox from "../TextBox/TextBox"
import Title from "../SectionTitle/Title"
import PContent from "../DecoratedText/DecoratedText"
import SVGLoad from "../SVGLoad/SVG"
import Group from "../../images/how-it-works/Group99.svg"

export default function VitalRole() {
  const title = "Who do we serve?"
    const title2 = "What you can expect to get out of it?"
  const content1 =
    "We provide tech mentoring to anyone who has faced housing instability and is interested in learning tech skills."
  const content2 =
    "We don’t prescribe a certain project or learning outcome. Instead, we work with you to develop your own goals and a project that aligns with those."

  return (
    <GridContainer>
      <Grid item xs={12}>
        {/* This is whitespace container which can be adjusted */}
        <Container maxWidth="large">
          <Typography component="div" style={{ height: "10vh" }} />
        </Container>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextBox
          style={{
            "padding-right": "calc(1.96vw + 8.94px)",
            "padding-left": "calc(19.4vw - 53.7px)",
            "padding-bottom": "30px"

          }}
        >
          <Title
            title={title}
            style={{ "text-align": "left" }}
            hideCheetohs={["sm", "xs", "lg", "md", "xl"]}
          />
          <PContent
            content={content1}
            style={{ "text-align": "left" }}
            hideCheetohs={["sm", "xs", "lg", "md", "xl"]}
          />

        </TextBox>
        <TextBox  style={{
            "padding-right": "calc(1.96vw + 8.94px)",
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
              style={{ "text-align": "left" }}
              hideCheetohs={["sm", "xs", "lg", "md", "xl"]}
            />
          </Hidden>
          <Hidden mdUp>
            <SVGLoad image={Group} alt="group 99 svg" />
            <PContent
              content={content2}
              style={{ "text-align": "left" }}
              hideCheetohs={["sm", "xs", "lg", "md", "xl"]}
            />
          </Hidden>
        </TextBox>
      </Grid>
      <Hidden smDown>
        <Grid item xs={12} md={6}>
          <SVGLoad image={Group} alt="group 99 svg" />
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
