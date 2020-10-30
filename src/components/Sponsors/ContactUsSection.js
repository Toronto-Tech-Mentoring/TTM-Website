import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BoldedHeader from '../BoldedHeaderText/BoldedHeader'
import CustomButton from '../CustomButton';
import CheetoLeft from '../../images/cheetohs/cheetohLeft.svg';
import CheetoRight from '../../images/cheetohs/cheetohRight.svg';



const useStyles = makeStyles(theme => ({
    contactButton: {
        backgroundColor: '#873FE2',
        cursor: 'pointer',
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '18px',
        height: '50px',
        width: '180px',

        // Screen size: Mobile to Tablet
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '16px',
            height: '40px',
            width: '153px',
        },

        // Screen size: Mobile below
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
            height: '32px',
            width: '120px',
        },
    },

    h2Text: {
        textAlign: 'center',
        fontFamily: 'Josefin Sans',
        fontSize: '28px',
        fontWeight: 600,
        fontStyle: 'normal',
        lineHeight: '29px',
        margin: '0 auto',
        letterSpacing: '0em',

        [theme.breakpoints.up('md')]: {
            // display: 'none'
            fontSize: '28px',
            maxWidth: '600px',
        },

        // Screen size: Tablet To Laptop
        [theme.breakpoints.between('sm', 'md')]: {
            fontFamily: 'Futura',
            fontSize: '28px',
            fontWeight: 500,
            lineHeight: '42px',
        },

        // Screen size: Mobile to Tablet
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '22px',
            maxWidth: '490px',
            lineHeight: '38px',
        },

        // Screen size: Mobile below
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
            maxWidth: '240px',
        },
    },

    cLeft: {
        position: 'relative',

        // Screen size: Mobile to Tablet
        [theme.breakpoints.between('xs', 'sm')]: {
            top: '35px',
            left: 'calc(50% - 300px)',
        },

        // Screen size: Mobile below
        [theme.breakpoints.down('xs')]: {
            top: '65px',
            left: 'calc(50% - 150px)',
        },
    },

    cRight: {
        position: 'relative',
        float: 'right',

        // Screen size: Mobile to Tablet
        [theme.breakpoints.between('xs', 'sm')]: {
            bottom: '65px',
            right: 'calc(50% - 300px)',
        },

        // Screen size: Mobile below
        [theme.breakpoints.down('xs')]: {
            bottom: '118px',
            right: 'calc(50% - 150px)',
        },
    },
    noDisplayOnBigScreen: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    divStyle: {
        marginTop: '96px',
        // Screen size: Mobile below
        [theme.breakpoints.down('xs')]: {
            marginTop: '64px',
        },
    }
}))

export default function ContactUsSection() {
    const classes = useStyles();
    const headerText = "If you have a way to help that isn’t listed above, or have any questions about donating."

    return (
        <div className={classes.divStyle}>
            <div>
                <CheetoLeft className={`${classes.cLeft} ${classes.noDisplayOnBigScreen}`} />
                <BoldedHeader headerText={headerText} style={{'text-align':'center','font-size':'calc(0.926vw + 14.7px)','margin-left':'calc(37vw - 118px)', 'margin-right':'calc(37vw - 118px)'}}/>
                <CheetoRight className={`${classes.cRight} ${classes.noDisplayOnBigScreen}`}/>
            </div>
            <div style={{ textAlign: 'center', marginTop: '45px', marginBottom: '90px' }}>
                <CustomButton text={"Contact Us"} customClass={classes.contactButton} />
            </div>
        </div>
    )
}