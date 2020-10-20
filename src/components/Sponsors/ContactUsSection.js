import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//
import CustomButton from '../CustomButton';
import { CheetoLeft, CheetoRight } from '../Cheetos';

const useStyles = makeStyles(theme => ({
    contactButton: {
        backgroundColor: '#873FE2',
        cursor: 'pointer',
        color: 'red',
    },

    cLeft: {
        marginTop: '200px',
    },
    cRight: {

    },
}))

export default function ContactUsSection(){
    const classes = useStyles();

    return (
        <div>
            <div style={{display: 'inline'}}>
                <span className={classes.cLeft}>
                    <CheetoLeft customClass={classes.cLeft} />
                </span>
                <h2 style={{textAlign: 'center'}}>
                    If you have a way to help that isn’t listed above, or have any questions about donating.
                </h2>
                <span className={classes.cRight}>
                    <CheetoRight />
                </span>
            </div>
            <div style={{textAlign: 'center', marginTop: '30px', marginBottom: '30px'}}>
                <CustomButton text={"Contact Us"} customClass={classes.contactButton} />
            </div>
        </div>
    )
}