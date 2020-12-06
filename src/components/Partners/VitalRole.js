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
import DataAnalyse from "../../images/partners/vital-role/data_analyse.svg"

export default function VitalRole() {
  const title = "The vital role out partners play:"
  const content1 =
    "A learning environment requires safety, and stability. Each client that comes through our program has faced, and often still is facing, significant adversity."
  const content2 =
    "Our delivery partners provide a safe and stable environment, so that our clients are able to focus on learning a new skill, and planning for a better future. \nCurrently, some of the wrap-around supports that our delivery partners provide are shelter & transitional housing, access to transport, and health and well-being support."

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
          <Hidden smDown>
            <PContent
              content={content2}
              style={{ "text-align": "left" }}
              hideCheetohs={["sm", "xs", "lg", "md", "xl"]}
            />
          </Hidden>
          <Hidden mdUp>
            <SVGLoad image={DataAnalyse} alt="dataAnalyseSVG" />
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
          <SVGLoad image={DataAnalyse} alt="dataAnalyseSVG" />
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
