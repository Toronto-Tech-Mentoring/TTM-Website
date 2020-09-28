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
        marginTop: '20px',

        [theme.breakpoints.up('lg')]: {
            paddingRight: '100px',
            fontSize:'22px',
        },
        [theme.breakpoints.down('md')]: {
            paddingRight: '10px',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            margin: '20px',
            paddingLeft:'20px',
        },
    },
    iconUl: {
        display: 'inline-block',
        paddingRight: '40px',
        height: '100%',
        marginTop:'0px',
        marginBottom: '10px',
        [theme.breakpoints.up('lg')]: {
            paddingRight: '80px',
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 'calc(( 100% - 187px - 274px - 180px ) * 0.2)',
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
        [theme.breakpoints.down('md')]: {
            fontSize: '12px',
        },
    },
    footerLinks: {
        float: 'right',
        [theme.breakpoints.down('xs')]: {
            float: 'left',
            paddingRight:'calc(100% - 317px)'
        },
    },
    copyrightDiv: {
        float: 'left',
        paddingLeft: '50px',
        fontFamily: 'Poppins',
        alignItems: 'center',
        paddingTop: '20px',

        [theme.breakpoints.up('lg')]: {
            paddingRight: '140px',
            fontSize:'22px'
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: '25px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '20px',
            margin: '0px',
            paddingTop: '10px',
        },
    },
    iconLi: {
        display: 'inline-block',
        padding: '12px 10px 0px 10px',
        [theme.breakpoints.down('xs')]: {
            padding: '10px 3px 0px 3px',
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
        fontSize: '16px',
        [theme.breakpoints.down('md')]: {
            fontSize:'12px',
        },
        [theme.breakpoints.down('xs')]: {
            position:'relative',
            bottom:'8px',
            fontSize:'12px'
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
                        <a href="https://www.instagram.com/civictechto">
                            <Avatar className={classes.iconAvatar}>
                                <InstagramIcon />
                            </Avatar>
                        </a>
                    </li>
                    <li className={classes.iconLi}>
                        <a href="https://twitter.com/CivicTechTO">
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
                            <a href="https://www.instagram.com/civictechto">
                                <Avatar className={classes.iconAvatar}>
                                    <InstagramIcon />
                                </Avatar>
                            </a>
                        </li>
                        <li className={classes.iconLi}>
                            <a href="https://twitter.com/CivicTechTO">
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
