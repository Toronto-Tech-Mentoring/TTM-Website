import React from "react";
import { makeStyles } from '@material-ui/core';

import Cheetoh from '../../images/cheetohs/cheetoRight.svg';
import GroupedCard from '../shared/GroupedCards';
import ImageOne from '../../images/sponsors/partner/laptop.svg';
import ImageTwo from '../../images/sponsors/partner/software.svg';
import ImageThree from '../../images/sponsors/partner/workspaces.svg';
import ImageFour from  '../../images/sponsors/partner/training.svg'
    

const listCards = [
    {
    image: ImageOne,
    text: 'Laptops for accessability',
    style: {
     width: 'calc(8vw + 11.4px)',
     minWidth: '72px',
     height: 'auto'
    },
    },
    {
      text: 'Software or server subscriptions',
      image: ImageTwo,
       style: {
        width: 'calc(14vw - 21px)',
        minWidth: '86px',
        height: 'auto'
        },
    },
      {
        image: ImageThree,
        text: 'Workspaces where we can host our sessions',
       style: {
        width: 'calc(7.4vw + 37px)',
        minWidth: '86px',
        height: 'auto'
    },
      
    },
     {
         image: ImageFour,
         text: 'Access to additional training and workshops',
        style: {
        width: 'calc(10.4vw + 35px)',
        minWidth: '115px',
        height: 'auto'
    },
      
    }
  ]

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
    CardContainer: {
        position: 'relative',
        left: 'calc(5vw + 17px)',
        right: 'calc(5vw + 17px)',
        bottom: 'calc(5vw + 58px)',
        top: '81px',
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: '18px',
        color: '#FFFFFF',
        lineHeight:'27px',
        marginTop: 'cal(4.7vw - 68px)',
        [theme.breakpoints.down('sm')]: {
            marginTop: '-32px',
            fontSize: '16px',
        },
         [theme.breakpoints.down('360')]: {
             fontSize: '14px',
             lineHeight:'24px',
        },
    }
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
            <div className={classes.CardContainer}>
                <GroupedCard
                listCards = {listCards}
            />
            </div>
            
        </div>
    )
};