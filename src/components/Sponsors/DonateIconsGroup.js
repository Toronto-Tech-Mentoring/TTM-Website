import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import DonateIcons from '../../images/sponsors/donateIcons.svg';

const useStyles = makeStyles((theme) => ({
    image: {
        position: 'fixed',
        right: 'calc(14.7% - 94px)',
        bottom : '97px',
        width: 'calc(34.2vw - 19px)',
        height: 'auto'
    },
        // Tablet to Mobile
        [theme.breakpoints.down('md')]: {
            right: 'calc(1% + 11px)',
            bottom : '97px',
            width: 'calc(26vw + 47px)',
        },
}));


export default function DonateIconsGroup() {
    const classes = useStyles();
    return (
        <img src={DonateIcons} className={classes.image}/>
    )
};