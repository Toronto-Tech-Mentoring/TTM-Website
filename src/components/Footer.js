import React from 'react';
import { Link } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '75px',
        zIndex: '999',
        display: 'flex',
        alignItems: 'center',
    },
    footerUl: {
        display: 'inline-block',
        paddingRight: '80px',
        paddingTop: '20px',
        [theme.breakpoints.down('md')]: {
            paddingRight: '10px',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            margin: '0px',
            paddingLeft:'20px',
        },
    },
    iconUl: {
        display: 'inline-block',
        paddingRight: '80px',
        height: '100%',
        marginBottom: '15px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '3vw',
            paddingRight: '0px'
        },
    },
    footerLi: {
        display: 'inline-block',
        padding: '0px 10px',
        margin: '0',
        [theme.breakpoints.down('md')]: {
            padding: '0px 5px',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },
    linkText: {
        color: 'black',
        fontFamily: 'Poppins',
        fontSize: '16px',
        textDecoration: 'none',
    },
    footerLinks: {
        float: 'right',
        [theme.breakpoints.down('xs')]: {
            float: 'left'
        },
    },
    copyrightDiv: {
        float: 'left',
        paddingLeft: '100px',
        fontFamily: 'Poppins',
        alignItems: 'center',
        fontSize: '16px',
        paddingTop: '20px',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '10px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '20px',
            fontSize: '14px',
            margin: '0px',
            paddingTop: '5px',
        },
    },
    iconLi: {
        display: 'inline-block',
        padding: '12px 10px 0px 10px',
        [theme.breakpoints.down('xs')]: {
            padding: '12px 2px 0px 2px',
        },
    },
    iconDiv: {
        float: 'right',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    iconAvatar: {
        backgroundColor: '#4529AE',
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            fontSize: '8px',
            width: '30px',
            height: '30px'
        },
    },
    active: {
        color: '#873FE2'
    },
    hideIcon: {
        [theme.breakpoints.between('md', 'xl')]: {
            display: 'none'
        },
    },
    copyright:{
        [theme.breakpoints.down('xs')]: {
            position:'relative',
            bottom:'8px',
            fontSize:'15px'
        },
    }
}));

export default function Footer() {
    const classes = useStyles();

    const linkList = [{
        id: 'client',
        path: '/client/',
        title: 'Client',
    }, {
        id: 'volunteer',
        path: '/volunteer/',
        title: 'Volunteer',
    }, {
        id: 'partners',
        path: '/partners/',
        title: 'Partner',
    }, {
        id: 'sponsors',
        path: '/sponsors/',
        title: 'Sponsors',
    }, {
        id: 'home',
        path: '/',
        title: 'About us',
    }]

    const renderLinks = () => {
        return linkList.map(item => (
            <li className={classes.footerLi} key={item.id}>
                <Link to={item.path} className={classes.linkText} activeStyle={{ color: '#873FE2' }}>{item.title}</Link>
            </li>
        ))
    };

    return (
        <footer>
            <div className={classes.iconDiv}>
                <ul className={classes.iconUl}>
                    <li className={classes.iconLi}>
                        <a href="https://www.instagram.com/">
                            <Avatar className={classes.iconAvatar}>
                                <InstagramIcon />
                            </Avatar>
                        </a>
                    </li>
                    <li className={classes.iconLi}>
                        <a href="#">
                            <Avatar className={classes.iconAvatar}>
                                <InstagramIcon />
                            </Avatar>
                        </a>
                    </li>
                    <li className={classes.iconLi}>
                        <a href="https://twitter.com/?lang=en">
                            <Avatar className={classes.iconAvatar}>
                                <TwitterIcon />
                            </Avatar>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={classes.footerLinks}>
                <ul className={classes.footerUl}>
                    {renderLinks()}
                </ul>
            </div>
            <div className={classes.copyrightDiv}>
                <span className={classes.copyright}>&copy; 2020 Toronto Tech Mentoring</span>
                <Hidden smUp>
                    <ul className={classes.iconUl}>
                        <li className={classes.iconLi}>
                            <a href="https://www.instagram.com/">
                                <Avatar className={classes.iconAvatar}>
                                    <InstagramIcon />
                                </Avatar>
                            </a>
                        </li>
                        <li className={classes.iconLi}>
                            <a href="#">
                                <Avatar className={classes.iconAvatar}>
                                    <InstagramIcon />
                                </Avatar>
                            </a>
                        </li>
                        <li className={classes.iconLi}>
                            <a href="https://twitter.com/?lang=en">
                                <Avatar className={classes.iconAvatar}>
                                    <TwitterIcon />
                                </Avatar>
                            </a>
                        </li>
                    </ul>
                </Hidden>
            </div>
        </footer>
    )
}