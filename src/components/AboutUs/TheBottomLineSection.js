import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import People from '../../images/about-us/bottom-line/people.svg';
import TitleRight from '../../images/about-us/bottom-line/titleRight.svg';
import TitleLeft from '../../images/about-us/bottom-line/titleLeft.svg';
import ContentLeft from '../../images/about-us/bottom-line/contentLeft.svg';
import ContentRight from '../../images/about-us/bottom-line/contentRight.svg';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '500px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        }
    },
    textBox: {
        padding: '0px 16%',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '50px',
        }
    },
    title: {
        fontFamily: 'Josefin Sans',
        color: 'black',
        fontSize: '18px',
        lineHeight: '38px',
        fontWeight: 600,
        paddingBottom: 50, 
        textDecoration: 'underline',
        textDecorationColor: '#FF7500',
        textUnderlinePosition: 'under',
        [theme.breakpoints.down('sm')]: {
            margin: '0px 20px'
        }

    },
    contents: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '27px',
        padding:'5px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px',
            paddingRight: '0px',
            textAlign: 'center',
        }
    },
    question: {
        fontFamily: 'Josefin Sans',
        color: 'black',
        fontWeight: 600,
        marginTop:'20px',
        fontSize: '20px',
        lineHeight: '34px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '40px',
        }
    },
    contactButton: {
        backgroundColor: '#873FE2',
        borderRadius: '300px',
        width: '200px',
        height: '50px',
        fontSize: '18px',
        color: 'white',
        borderStyle: 'none',
        fontFamily: 'Poppins',
        [theme.breakpoints.down('sm')]: {
            marginTop: '30px',
            marginBottom: '50px',
        }
    },
    picDiv: {
        maxWidth: 470,
        maxHeight: 380,
        margin: '0 auto'
    },
    people: {
        width: '80%',
        [theme.breakpoints.up('sm')]: {
            padding: '10%',
        },
    },
    hideTitleStyle: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    contentRight: {
        float:'right',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    contentLeft: {
        margin: '70px 5px 0px -40px',
        float:'left',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    }
}));

export default function TheBottomLineSection() {
    const classes = useStyles();

    return (
        <Grid container
            className={classes.root}
            justify="center"
            alignItems="center">
            <Grid item xs={12} md={6}>
                <div className={classes.textBox}>
                    <div>
                        <TitleLeft className={classes.hideTitleStyle} alt="title decoration left"/>
                        <span className={classes.title}>The bottom line</span>
                        <TitleRight className={classes.hideTitleStyle} alt="title decoration right"/>
                    </div>
                    <ContentRight className={classes.contentRight} alt="content decoration right"/>
                    <span className={classes.contents}>If you’re facing housing precarity in Toronto and want to learn 'tech' skills, we want to help you. Free of charge. </span>
                    <ContentLeft className={classes.contentLeft} alt="content decoration left"/>
                    <Hidden smDown>
                        <p className={classes.question}>Not sure if you qualify?</p>
                        <button className={classes.contactButton}>Contact us</button>
                    </Hidden>
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <People className={classes.people} alt="people" />
                <Hidden mdUp> 
                    <p className={classes.question}>Not sure if you qualify?</p>
                    <button className={classes.contactButton}>Contact us</button>
                </Hidden>
            </Grid>
        </Grid>
    )
};

