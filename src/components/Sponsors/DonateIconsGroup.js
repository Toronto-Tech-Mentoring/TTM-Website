import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import DonateIcons from '../../images/sponsors/donateIcons.svg';

const useStyles = makeStyles((theme) => ({
    image: {
        width: 'calc(34.2vw - 19px)',
        height: 'auto'
    },
}));


export default function DonateIconsGroup() {
    const classes = useStyles();

    return (
        <img src={DonateIcons} className={classes.image}/>
    )
};