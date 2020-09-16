import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import people from '../../images/about-us/bottom-line/people.svg';
import titleRight from '../../images/about-us/bottom-line/titleRight.svg';
import titleLeft from '../../images//about-us/bottom-line/titleLeft.svg';
import contentLeft from '../../images//about-us/bottom-line/contentLeft.svg';
import contentRight from '../../images//about-us/bottom-line/contentRight.svg';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '500px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        }
    },
    textBox: {
        padding: '0px 10%',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '50px',
        }
    },
    title: {
        fontFamily: 'Josefin Sans',
        color: 'black',
        fontSize: '22px',
        lineHeight: '38px',
        fontWeight: 600,
        textDecoration: 'underline',
        textDecorationColor: '#FF7500',
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
            // width: '100%'
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
        margin:'5px 10px 0px 0px',
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
                        <img className={classes.hideTitleStyle} alt="title decoration left" src={titleLeft} />
                        <span className={classes.title}>The bottom line</span>
                        <img className={classes.hideTitleStyle} alt="title decoration right" src={titleRight} />
                    </div>
                    <img className={classes.contentRight} alt="content decoration right" src={contentRight} />
                    <span className={classes.contents}>If you’re facing housing precarity in Toronto and want to learn 'tech' skills, we want to help you. Free of charge. </span>
                    <img className={classes.contentLeft} alt="content decoration left" src={contentLeft} />
                    <Hidden smDown>
                        <p className={classes.question}>Not sure if you qualify?</p>
                        <button className={classes.contactButton}>Contact us</button>
                    </Hidden>
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <img className={classes.people} alt="people" src={people} />
                <Hidden mdUp>
                    <p className={classes.question}>Not sure if you qualify?</p>
                    <button className={classes.contactButton}>Contact us</button>
                </Hidden>
            </Grid>
        </Grid>
    )
};

