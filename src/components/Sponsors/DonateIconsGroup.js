import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import DonateIcons from '../../images/sponsors/donateIcons.svg';

const useStyles = makeStyles((theme) => ({
    imageWrapper: {
        position: 'relative',
        width: 'calc(36vw - 57px)',
        top: 'calc(-240px - 1%)',
        left: 'calc(61vw - 26px)',
        height: 'calc(40vw + 134px)',
        paddingTop: '130px',
         [theme.breakpoints.down('sm')]: {
            paddingTop: '160px',
            height: 'calc(5.6vw + 205px)',
        },
        [theme.breakpoints.down('542')]: {
            paddingTop: '230px',
            width: 'calc(21vw + 58px)',
        },
    },
    image: {
        width: '100%',
        height: 'auto',
         [theme.breakpoints.up('1440')]: {
            width: '509px',
        },
        [theme.breakpoints.down('sm')]: {
        width: 'calc(21vw + 58px)',
        [theme.breakpoints.down('542')]: {
            width: 'calc(21vw + 58px)',
        },
    },
},
  
}));


export default function DonateIconsGroup() {
    const classes = useStyles();
    return (
        <div className = { classes.imageWrapper }> 
            < img src={DonateIcons} className = { classes.image } />
        </div>
    )
};