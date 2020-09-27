import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import background1 from '../../images/partners/partner-organization/background1.svg';
import background2 from '../../images/partners/partner-organization/background2.svg';
import background3 from '../../images/partners/partner-organization/background3.svg';
import helping from '../../images/partners/partner-organization/helping.svg';
import house from '../../images/partners/partner-organization/house.svg';
import training from '../../images/partners/partner-organization/training.svg';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#4529AE',
    },
    card: {
        display: 'inline-block',
        maxWidth: '328px',
        height: '100%',
        borderRadius: '30px',
        margin: '0px 25px',
        marginTop: '-5px',
        [theme.breakpoints.down('md')]: {
            maxWidth: '220px',
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '40px',
        },
    },
    contents: {
        fontFamily: 'Poppins',
        textAlign: 'center',
        color: 'black',
        fontSize: '16px',
        lineHeight: '27px',
        marginBottom: '27px',
        [theme.breakpoints.down('md')]: {
            marginBottom: '10px',
            fontSize: '14px',
            lineHeight: '24px',
            padding: '0px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '10px',
            lineHeight: '20px',
        },
    },
    imgDiv: {
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'center',
        textAlign: "center",
        // marginTop: '80px',
        height: "140px",
        [theme.breakpoints.down('md')]: {
            // marginTop: '40px',
            height: '86px',
        },
    },
    bg1: {
        marginTop: '80px',
        [theme.breakpoints.down('md')]: {
            backgroundSize: '81px 97px',
            marginTop: '50px',
        },
    },
    bg2: {
        marginTop: '90px',
        [theme.breakpoints.down('md')]: {
            backgroundSize: '122px 71px',
            marginTop: '60px',
        },
    },
    bg3: {
        marginTop: '60px',
        [theme.breakpoints.down('md')]: {
            backgroundSize: '85px 86px',
            marginTop: '40px',
        },
    },
    help: {
        position: "relative",
        top: '13px',
        left: '-5px',
        [theme.breakpoints.down('md')]: {
            height: '60%',
            top: '12px',
            left: '0px'
        },
    },
    house: {
        position: "relative",
        [theme.breakpoints.down('md')]: {
            height: '80%',
        },
    },
    training: {
        position: "relative",
        top: '20px',
        [theme.breakpoints.down('md')]: {
            height: '70%',
            top: '18px',
        },
    },
    text: {
        color: 'white',
        fontFamily: 'Josefin Sans',
        fontSize: '28px',
        fontWeight: 600,
        lineHeight: '44px',
        textAlign: 'center',
        marginBottom: '60px',
        [theme.breakpoints.down('md')]: {
            fontSize: '22px',
            lineHeight: '37px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
            lineHeight: '29px',
            marginBottom: '40px',
        },
    },
    question:{
        width:'70%',
        [theme.breakpoints.down('sm')]: {
            width:'100%',
        },
    },
    titleSpacing: {
        marginTop: '96px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '39px',
        },
    },
    contactBotton: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '27px',
        borderStyle:'none',
        textAlign: 'center',
        backgroundColor:'white',
        color:'#873FE2',
        borderRadius: '300px',
        padding:'14px 24px',
        marginBottom:'94px',
        [theme.breakpoints.down('sm')]: {
            padding:'10px 16px',
            fontSize: '14px',
            lineHeight: '24px',
            marginBottom:'74px'
        },
    }
}));

export default function Cards() {
    const classes = useStyles();

    return (
        <>
        <Grid className={classes.root} container alignItems="center" justify="center" style={{ textAlign: 'center' }}>
            <Grid item xs={12}>
                <p className={`${classes.titleSpacing}  ${classes.text}`}>We currently partner with organizations that are:</p>
            </Grid>
            <Grid item md={1.5} lg={1.5} xl={2}></Grid>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={2}>
                <Card className={classes.card}>
                    <div className={`${classes.imgDiv}  ${classes.bg1}`} style={{ backgroundImage: `url(${background1}` }}>
                        <img className={classes.help} alt="helping each other" src={helping} />
                    </div>
                    <CardContent>
                        <p className={classes.contents}>
                            Working to help vulnerable youth and young adults
            </p>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={2}>
                <Card className={classes.card}>
                    <div className={`${classes.imgDiv}  ${classes.bg2}`} style={{ backgroundImage: `url(${background2}` }}>
                        <img className={classes.house} alt="house and tree" src={house} />
                    </div>
                    <CardContent>
                        <p className={classes.contents}>
                            Tackling homelessness, or providing shelter
            </p>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={2}>
                <Card className={classes.card}>
                    <div className={`${classes.imgDiv}  ${classes.bg3}`} style={{ backgroundImage: `url(${background3}` }}>
                        <img className={classes.training} alt="training support" src={training} />
                    </div>
                    <CardContent>
                        <p className={classes.contents}>
                            Providing skills training for underhoused or vulnerable populations
                        </p>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={1.5} lg={1.5} xl={2}></Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
                <p className={classes.text}>Are you part of an organization that could benefit from partnering with us?</p>
            </Grid>
            <Grid item xs={12}>
                <button className={classes.contactBotton}>Contact Us</button>
            </Grid>
        </Grid>
        </>
    );
}