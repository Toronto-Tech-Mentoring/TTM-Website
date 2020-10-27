import React from "react";
import { makeStyles } from '@material-ui/core';

import Cheetoh from '../../images/cheetohs/cheetoRight.svg';


// Images 
import ImageOne from '../../images/sponsors/partner/laptop.svg';
import ImageTwo from '../../images/sponsors/partner/software.svg';
import ImageThree from '../../images/sponsors/partner/workspaces.svg';
import ImageFour from '../../images/sponsors/partner/training.svg'

//  Cards flex container
import GroupedCards from '../shared/GroupedCards';
    
// Cards JSON
/*********************************************************************
    Each card object contains 3 propersties:
    - image: image path
    - text: image title
    - style: object containing style objects for the container and the image
*********************************************************/
const listCards = [
    {
        image: ImageOne,
        text: 'Laptops for accessability',
        style: {
            cardStyle: {
                maxWidth:'170px'
            },  
            imageStyle: {
                width: 'calc(8vw + 11px)',
                minWidth: '72px',
                padding: '20px',
                // '@media screen and (max-width: 1090px)': {
                //   width: '72px',
                // },
            },
        }
     
    },
    {
        text: 'Software or server subscriptions',
        image: ImageTwo,
        style: {
            cardStyle: {
                maxWidth:'180px'
            },  
            imageStyle: {
                width: 'calc(7.4vw + 29px)',
                minWidth: '86px',
                padding: '20px',
                // '@media screen and (max-width: 1090px)': {
                // width: '86px',
                // },
            }
        }

    },
    {
        image: ImageThree,
        text: 'Workspaces where we can host our sessions',
        style: {
            cardStyle: {
                maxWidth:'214px'
            },  
            imageStyle: {
                width: 'calc(7.4vw + 37px)',
                minWidth:'94px',
                padding: '20px',
                // '@media screen and (max-width: 1090px)': {
                // width: '94px',
                // },
            }
         }
    },
    {
        image: ImageFour,
        text: 'Access to additional training and workshops',
        style: {
            cardStyle: {
                maxWidth:'220px'
            },  
            imageStyle: {
                width: 'calc(10.4vw + 35px)',
                minWidth:'115',
                padding: '20px',
                // '@media screen and (max-width: 1090px)': {
                // width: '115px',
                // },
            }
        }
      
    }
];

// Cards flex container style object
const cardsContainerStyle = {
    maxWidth: '1024px',
    margin: '10px auto 10px auto',
    display: "flex",
    alignItems: "flex-end",
    flexWrap:'wrap',
    justifyContent: "space-between",
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '18px',
    color: '#FFFFFF',
    lineHeight: '27px',
    textAlign: 'center',
    padding: '0 50px 125px 50px',
    '@media screen and (max-width: 1040px)': {
        maxWidth: '540px',
        fontSize: '16px',
        paddingBotton: '95px'
    },
    '@media screen and (max-width:560px)': {
        maxWidth: '300px',
        fontSize: '14px',
        lineHeight: '24px',
        justifyContent: "space-around",
          paddingBotton: '64px'
    }
};

const useStyles = makeStyles((theme) => ({

     container: {
        height: 'fit-content',
        width: '100%',
        backgroundColor:'#4529AE',
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
             <GroupedCards
                cardsContainerStyle={cardsContainerStyle}
                listCards={listCards}
            />      
        </div>
    )
};