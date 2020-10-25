import React from "react";
import { makeStyles } from '@material-ui/core';

import Cheetoh from '../../images/cheetohs/cheetoRight.svg';


// Images 
import ImageOne from '../../images/sponsors/partner/laptop.svg';
import ImageTwo from '../../images/sponsors/partner/software.svg';
import ImageThree from '../../images/sponsors/partner/workspaces.svg';
import ImageFour from '../../images/sponsors/partner/training.svg'

//  Cards flex container
import GroupedCardContainer from '../shared/GroupedCardsContainer';
    
// Cards objects array
/********************************************************
    Each card object contains 3 propersties:
    - image: image path
    - text: image title
    - cardStyle: card JSS properties object
*********************************************************/
const listCards = [
    {
        image: ImageOne,
        text: 'Laptops for accessability',
        cardStyle: {
            width: 'calc(2.8vw + 129px)',
            minWidth: '114px',
            height: '100%',
            margin:'24px'
        },
    },
    {
        text: 'Software or server subscriptions',
        image: ImageTwo,
        cardStyle: {
            width: 'calc(4.3vw + 117px)',
            minWidth: '149px',
            height: '100%',
            margin:'24px'
        },
    },
    {
        image: ImageThree,
        text: 'Workspaces where we can host our sessions',
        cardStyle: {
            width: 'calc(3.7vw + 160px)',
            minWidth: '187px',
            height: '100%',
            margin:'24px'
        },
      
    },
    {
        image: ImageFour,
        text: 'Access to additional training and workshops',
        cardStyle: {
            width: 'calc(3.6vw + 168px)',
            minWidth: '188px',
            height: '100%',
            margin:'24px'
        },
      
    }
];

// image title (text) properties
const imageTextStyle = {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '18px',
    color: '#FFFFFF',
    lineHeight: '27px',
    sm: {
        fontSize: '16px',
    },
    xs: {
        fontSize: '14px',
        lineHeight: '24px',
    },
};

// Cards flex container JSS object
const cardsContainerStyle = {
    width: 'calc(90vw - 34px)',
    marginLeft: 'calc(5vw - 17px)',
    sm: {
        marginTop: '-32px',
    },
    xs: {
        fontSize: '14px',
        lineHeight: '24px',
    },
};

const useStyles = makeStyles((theme) => ({

     container: {
        height: 'calc(-3.4vw + 830px)',
        width: '100%',
        maxHeight: '1144px',
        backgroundColor:'#4529AE',
        [theme.breakpoints.down('542')]: {
            height: '1144px',
        },
    }, 

      textBox: {
          width: 'calc(14.7vw + 527px)',
          margin: '0px auto 16px auto',
          paddingTop:'96px',
           [theme.breakpoints.down('542')]: {
               width: 'calc(73vw + 77px)',
        }, 
    },

    title: {
        color: '#FFFFFF',
        marginBottom: '16px',
        fontFamily: 'Josefin Sans',
        fontWeight: 600,
        fontSize: '28px',
        lineHeight: '44px',
        textAlign:'center',

        // Tablet 
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
            lineHeight: '38px',
        },

        // Mobile
        [theme.breakpoints.down('360')]: {
            fontSize: '20px',
            lineHeight: '32px',
        },
    },
    
    firstParagraphContainer: {
        width: '100%',
        display: "inline-flex",
        alignItems: "center",
         justifyContent: "space-between",
    },

    firstParagraph: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '31px',
        width: 'calc(3.6vw + 504px)',
        textAlign: 'center',

        // Tablet 
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            lineHeight: '27px',
            width: 'calc(51vw + 142px)',
        },

        // Mobile 
        [theme.breakpoints.down('360')]: {
            fontSize: '14px',
            lineHeight: '24px',
        },
        
    },

    secondParagraph: {
        color: '#FFFFFF',
        fontFamily: 'Josefin Sans',
        fontWeight: 600,
        fontSize: '22px',
        lineHeight: '35px',
        width: 'calc(3.6vw + 504px)',
        textAlign: 'center',
        margin:'calc(4.7vw + 11px) auto 0 auto',

        // Tablet 
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
            lineHeight: '38px',
            width: 'calc(51vw + 142px)',
             marginTop:'48px',
        },

        [theme.breakpoints.down('542')]: {
            marginTop:'64px',
            fontSize: '18px',
            lineHeight: '29px',
        },
        
    },

      cheetohLeft: {
          width: 'calc(1.39vw + 13px)',
          transform: 'scaleX(-1) '
        },

    cheetohRight: {
        width: 'calc(1.39vw + 13px)',
    }, 
}));


export default function TheBottomLineSection() {
    const classes = useStyles();
    const title = "Partner with Us"
    const firstParagraph = "The Accelerator Project has a need for essential resources that will help us offer our program which inturn contributes to helping the LGBTQ homeless youth community."
    const secondParagraph = "In particular, we are generally in need of..."

    return (
        <div className={classes.container}>
            <div className={classes.textBox}>
                <div className={classes.title}>{title}</div>
                <div className={classes.firstParagraphContainer}>
                    <Cheetoh className={classes.cheetohLeft}/>
                    <div className={classes.firstParagraph}>{firstParagraph}</div>
                    <Cheetoh className={classes.cheetohRight}/>
                </div>
                <div className={classes.secondParagraph}>{secondParagraph}</div> 
            </div>
            
            {/* Cards flex container:  
               - cardContainerStyle,  and listCards are passed as props 
               to the reusable component in GroupedCardsContainer.js
               - imageTextStyle is passed as props to reusable components GroupedCardsContainer.js 
                  then ImageCardWithTile.js
            */}
             <GroupedCardContainer
                cardsContainerStyle={cardsContainerStyle}
                listCards={listCards}
                imageTextStyle = {imageTextStyle}
            />
         
            
        </div>
    )
};