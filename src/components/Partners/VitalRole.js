import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import DataAnalyse from '../../images/partners/vital_role/data_analyse.svg';
import TitleRight from '../../images/about-us/bottom-line/titleRight.svg';
import TitleLeft from '../../images/about-us/bottom-line/titleLeft.svg';


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
    dataAnalyse: {
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

export default function VitalRoleSection() {
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
                        <span className={classes.title}>The Vital role out partners play:</span>
                        <TitleRight className={classes.hideTitleStyle} alt="title decoration right"/>
                    </div>
                    <span className={classes.contents}>A learning environment requires safety, and stability.
Each client that comes through our program has faced, and often still is facing, significant adversity. Our delivery partners provide a safe and stable environment, so that our clients are able to focus on learning a new skill, and planning for a better future.

Currently, some of the wrap-around supports that our delivery partners provide are shelter & transitional housing, access to transport, and health and well-being support. </span>
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <DataAnalyse className={classes.dataAnalyse} alt="data_analyse" />
            </Grid>
        </Grid>
    )
};

