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
        borderRadius: '30px',
        margin: '0px 25px',
        marginTop: '-5px',
        [theme.breakpoints.only('md')]: {
            maxWidth:'212px',
            maxHeight:'216px'
        },
        [theme.breakpoints.down('sm')]: {
            maxHeight:'260px',
            marginBottom:'40px'
        },
    },
    contents: {
        fontFamily: 'Poppins',
        textAlign: 'center',
        color: 'black',
        fontSize: '16px',
        lineHeight: '27px',
        marginBottom: '27px',
        [theme.breakpoints.between('md', 'lg')]: {
            marginBottom: '27px',
        },
    },
    imgDiv: {
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'center',
        textAlign: "center",
        marginTop: '80px',
        height: "140px",
    },
    innerImage: {
        position: "relative",
    },
}));

export default function Cards() {
    const classes = useStyles();

    return (
        <Grid className={classes.root} container alignItems="center" justify="center" style={{ textAlign: 'center' }}>
            <Grid item xs={12} md={3} lg={4} xl={3}>
                <Card className={classes.card}>
                    <div className={classes.imgDiv} style={{ backgroundImage: `url(${background1}` }}>
                        <img className={classes.innerImage} style={{ top: '13px', left: '-5px' }} alt="helping each other" src={helping} />
                    </div>
                    <CardContent>
                        <p className={classes.contents}>
                            Working to help vulnerable youth and young adults
            </p>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} lg={4} xl={3}>
                <Card className={classes.card}>
                    <div className={classes.imgDiv} style={{ backgroundImage: `url(${background2}` }}>
                        <img className={classes.innerImage} alt="house and tree" src={house} />
                    </div>
                    <CardContent>
                        <p className={classes.contents}>
                            Tackling homelessness, or providing shelter
            </p>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} lg={4} xl={3}>
                <Card className={classes.card}>
                    <div className={classes.imgDiv} style={{ backgroundImage: `url(${background3}`, marginTop: '50px' }}>
                        <img className={classes.innerImage} style={{ top: '20px' }} alt="training support" src={training} />
                    </div>
                    <CardContent>
                        <p className={classes.contents}>
                            Providing skills training for underhoused or vulnerable populations
            </p>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}