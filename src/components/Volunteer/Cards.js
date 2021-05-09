import React from "react"
import Grid from "@material-ui/core/Grid"

import GroupedCards from "../shared/GroupedCards"
import BlobOne from "../../images/volunteers/WhatDoVolunteersDo/blob1.svg"
import BlobTwo from "../../images/volunteers/WhatDoVolunteersDo/blob2.svg"
import BlobThree from "../../images/volunteers/WhatDoVolunteersDo/blob3.svg"
import ImageOne from "../../images/volunteers/WhatDoVolunteersDo/highFive.svg"
import ImageTwo from "../../images/volunteers/WhatDoVolunteersDo/group.svg"
import ImageThree from "../../images/volunteers/WhatDoVolunteersDo/meeting.svg"

const cardsJson = [
  {
    header: "Mentors",
    body: (
      <div
        style={{
          backgroundRepeat: `no-repeat`,
          backgroundPosition: "center",
          backgroundImage: `url(${BlobOne}`,
        }}
      >
        <img src={ImageOne} alt="high five"></img>
      </div>
    ),
    footer:
      "Our mentors work directly with our clients to help them achieve their own goals in learning tech skills.",
    style: {
      cardContainer: {
        width: "328px",
        height: "334px",
        borderRadius: "30px",
        backgroundColor: "white",
        display: "inline-block",
        "@media screen and (max-width: 1080px)": {
          margin: "-48px auto 0px auto",
        },
        "@media screen and (max-width: 350px)": {
          width: "95%",
        },
      },
      bodyWrapper: {
        margin: "25px 0px 25px 105px",
        display: "inline-block",
      },
      header: {
        fontFamily: "Josefin Sans",
        fontWeight: "600",
        fontStyle: "normal",
        fontSize: "22px",
        lineHeight: "38px",
        display: "flex",
        textAlign: "center",
        color: "#873FE2",
        justifyContent: "center",
        paddingTop: "24px",
      },
      footer: {
        fontFamily: "Poppins",
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: "16px",
        lineHeight: "27px",
        display: "flex",
        textAlign: "center",
        color: "#000000",
        justifyContent: "center",
        margin: "0px 14px 24px 14px",
      },
    },
  },
  {
    header: "Program Development",
    body: (
      <div
        style={{
          backgroundRepeat: `no-repeat`,
          backgroundPosition: "center",
          backgroundImage: `url(${BlobTwo}`,
        }}
      >
        <img src={ImageTwo} alt="group"></img>
      </div>
    ),
    footer:
      "Our program development teams help our program run, including consistently evaluating and improving how we operate.",
    style: {
      cardContainer: {
        width: "328px",
        height: "334px",
        borderRadius: "30px",
        backgroundColor: "white",
        display: "inline-block",
        margin: "0px 100px",
        "@media screen and (max-width: 1270px)": {
          margin: "0 auto 0px auto",
        },
        "@media screen and (max-width: 1080px)": {
          margin: "48px auto 0px auto",
        },
        "@media screen and (max-width: 350px)": {
          width: "95%",
        },
      },
      bodyWrapper: {
        margin: "25px 0px 8px 70px",
        display: "inline-block",
      },
      header: {
        fontFamily: "Josefin Sans",
        fontWeight: "600",
        fontStyle: "normal",
        fontSize: "22px",
        lineHeight: "38px",
        display: "flex",
        textAlign: "center",
        color: "#873FE2",
        justifyContent: "center",
        paddingTop: "24px",
      },
      footer: {
        fontFamily: "Poppins",
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: "16px",
        lineHeight: "27px",
        display: "flex",
        textAlign: "center",
        color: "#000000",
        justifyContent: "center",
        margin: "0px 14px 24px 14px",
      },
    },
  },
  {
    header: "External Outreach",
    body: (
      <div
        style={{
          backgroundRepeat: `no-repeat`,
          backgroundPosition: "center",
          backgroundImage: `url(${BlobThree}`,
        }}
      >
        <img src={ImageThree} alt="laptops for accessibility"></img>
      </div>
    ),
    footer:
      "Our external outreach team works with our delivery partners, sponsors and our outward facing communications.",
    style: {
      cardContainer: {
        width: "328px",
        height: "334px",
        borderRadius: "30px",
        backgroundColor: "white",
        display: "inline-block",
        "@media screen and (max-width: 1080px)": {
          margin: "48px auto 0px auto",
        },
        "@media screen and (max-width: 350px)": {
          width: "95%",
        },
      },
      bodyWrapper: {
        padding: "25px 0px 0px 75px",
        display: "inline-block",
      },
      header: {
        fontFamily: "Josefin Sans",
        fontWeight: "600",
        fontStyle: "normal",
        fontSize: "22px",
        lineHeight: "38px",
        display: "flex",
        textAlign: "center",
        color: "#873FE2",
        justifyContent: "center",
        paddingTop: "24px",
      },
      footer: {
        fontFamily: "Poppins",
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: "16px",
        lineHeight: "27px",
        display: "flex",
        textAlign: "center",
        color: "#000000",
        justifyContent: "center",
        margin: "10px 14px 24px 14px",
      },
    },
  },
]

const cardsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  paddingTop: "80px",
  marginLeft: "3%",
  marginRight: "3%",
  "@media screen and (max-width: 1080px)": {
    flexDirection: "column",
  },
}

export default function VolunteerCards() {
  return (
    <Grid>
      <GroupedCards
        cardsContainerStyle={cardsContainerStyle}
        cardsJson={cardsJson}
      />
    </Grid>
  )
}
