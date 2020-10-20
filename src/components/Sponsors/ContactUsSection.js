import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//
import CustomButton from '../CustomButton';
import { CheetoLeft, CheetoRight } from '../Cheetos';

const useStyles = makeStyles(theme => ({
    contactButton: {
        backgroundColor: '#873FE2',
        borderRadius: '3020px',
        cursor: 'pointer',
        color: 'red',
    } 
}))

export default function ContactUsSection(){
    const classes = useStyles();

    return (
        <div style={{textAlign: 'center'}}>
            <div style={{display: 'inline'}}>
                {/* <CheetoLeft /> */}
                <h2>
                    If you have a way to help that isn’t listed above, or have any questions about donating.
                </h2>
                {/* <CheetoRight /> */}
            </div>
            <CustomButton text={"Contact Us"} customClass={classes.contactButton} />
        </div>
    )
}