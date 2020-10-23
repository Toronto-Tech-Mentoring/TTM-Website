import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import DonateIcons from '../../images/sponsors/donateIcons.svg';

const useStyles = makeStyles((theme) => ({
    image: {
        float: 'right',
        position: 'relative',
        right: 'calc(12% - 56px)',
        top : '102px',
        width: 'calc(34.2vw - 19px)',
        height: 'auto'
    },
        // Tablet to Mobile
        [theme.breakpoints.between('xs','md')]: {
            right: 'calc(5% - 2px)',
            top: '105px',
            width: 'calc(26vw + 47px)',
    },
         [theme.breakpoints.down('xs')]: {
            top : '-100px',
        },
}));


export default function DonateIconsGroup() {
    const classes = useStyles();
    return (
        <img src={DonateIcons} className={classes.image}/>
    )
};