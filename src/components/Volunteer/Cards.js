import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

// import TextBox from '../TextBox/TextBox'
import GroupedCards from '../shared/GroupedCards';

import BlobOne from "../../images/volunteers/WhatDoVolunteersDo/blob1.svg"
import BlobTwo from "../../images/volunteers/WhatDoVolunteersDo/blob2.svg"
import BlobThree from "../../images/volunteers/WhatDoVolunteersDo/blob3.svg"
import ImageOne from "../../images/volunteers/WhatDoVolunteersDo/highFive.svg"
import ImageTwo from "../../images/volunteers/WhatDoVolunteersDo/group.svg"
import ImageThree from "../../images/volunteers/WhatDoVolunteersDo/meeting.svg"

const cardsJson = [

    {   header:'Mentors',
        body: <img src={ImageOne} style={{ backgroundImage: `url(${BlobOne}` }} width='100%' height='auto' margin= 'auto' alt='high five image' />,    
        footer: 'Our mentors work directly with our clients to help them achieve their own goals in learning tech skills.',
        style: {
            cardContainer: {
                width: '328px',
                height: '334px',
                borderRadius: '30px',
                backgroundColor: 'white',
                display: 'inline-block',
            },  
            bodyWrapper: {
                padding: '25px 114px 42px 114px',
                display:'inline-block'
            },
            header:{
                fontFamily: 'Josefin Sans',
                fontWeight: '600',
                fontStyle: 'normal',
                fontSize: '22px',
                lineHeight: '38px',
                display: 'flex',
                textAlign: 'center',
                color: '#873FE2',
                justifyContent: 'center',
                paddingTop: '24px'
            },
            footer:{
                fontFamily: 'Poppins',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '27px',
                display: 'flex',
                textAlign: 'center',
                color: '#000000',
                justifyContent: 'center',
            },
        }
    },
    {   header:'Program Development',
       body: <img src={ImageTwo} style={{ backgroundImage: `url(${BlobTwo}` }} width='100%' height='auto' margin= 'auto' alt='group image' />,
        footer: 'Our program development teams help our program run, including consistently evaluating and improving how we operate.',
        style: {
            cardContainer: {
                width: '328px',
                height: '334px',
                borderRadius: '30px',
                backgroundColor: 'white',
                display: 'inline-block'
            },  
            bodyWrapper: {
                padding: '39px 114px 23px 114px',
                display:'inline-block'
            },
            header:{
                fontFamily: 'Josefin Sans',
                fontWeight: '600',
                fontStyle: 'normal',
                fontSize: '22px',
                lineHeight: '38px',
                display: 'flex',
                textAlign: 'center',
                color: '#873FE2',
                justifyContent: 'center',
                paddingTop: '24px'
            },
            footer:{
                fontFamily: 'Poppins',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '27px',
                display: 'flex',
                textAlign: 'center',
                color: '#000000',
                justifyContent: 'center',
            },
        }
    },
    {
        header: 'External Outreach',
        body: <img src={ImageThree} style={{ backgroundImage: `url(${BlobThree}` }} width='100%' height='auto' margin= 'auto' alt='laptops for accessibility' />,
        footer: 'Our external outreach team works with our delivery partners, sponsors and our outward facing communications.',
        style: {
            cardContainer: {
                width: '328px',
                height: '334px',
                borderRadius: '30px',
                backgroundColor: 'white',
                display: 'inline-block'
            },  
            bodyWrapper: {
                padding: '47px 117px 26px 111px',
                display:'inline-block'
            },
            header:{
                fontFamily: 'Josefin Sans',
                fontWeight: '600',
                fontStyle: 'normal',
                fontSize: '22px',
                lineHeight: '38px',
                display: 'flex',
                textAlign: 'center',
                color: '#873FE2',
                justifyContent: 'center',
                paddingTop: '24px'
            },
            footer:{
                fontFamily: 'Poppins',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '27px',
                display: 'flex',
                textAlign: 'center',
                color: '#000000',
                justifyContent: 'center',
            },
        },
    }
];

const cardsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
};

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