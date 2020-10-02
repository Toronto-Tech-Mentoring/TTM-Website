import React from 'react';
import { Link } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        height: '75px',
        zIndex: '999',
        verticalAlign: 'middle',
        borderTop: '1px solid #C4C4C4',
        marginTop:'-4px',
    },
    footerUl: {
        display: 'inline-block',
        paddingRight: '80px',
        marginTop: '20px',

        [theme.breakpoints.up('lg')]: {
            paddingRight: '50px',
            fontSize: '22px',
        },
        [theme.breakpoints.down('md')]: {
            paddingRight: '10px',
        },
        [theme.breakpoints.down(750)]: {
            display: 'block',
            margin: '20px',
            paddingLeft: '10px',
        },
    },
    iconUl: {
        display: 'inline-block',
        paddingRight: '40px',
        height: '100%',
        marginTop: '0px',
        marginBottom: '10px',
        [theme.breakpoints.up('lg')]: {
            paddingRight: '80px',
        },
        [theme.breakpoints.down(750)]: {
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
        [theme.breakpoints.down(750)]: {
            display: 'block',
        },
    },
    linkText: {
        color: 'black',
        fontFamily: 'Poppins',
        fontSize: '1.5vw',
        textDecoration: 'none',
        [theme.breakpoints.down(750)]: {
            fontSize: '3vw',
        },
    },
    footerLinks: {
        float: 'right',
        [theme.breakpoints.down(750)]: {
            float: 'left',
            paddingRight: 'calc(100% - 200px)',
            marginTop:'20px'
        },
    },
    copyrightDiv: {
        float: 'left',
        paddingLeft: '50px',
        fontFamily: 'Poppins',
        alignItems: 'center',
        paddingTop: '20px',
        fontSize: '1.5vw',

        [theme.breakpoints.up('lg')]: {
            paddingLeft: '8vw',
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: '6vw',
        },
        [theme.breakpoints.down(750)]: {
            paddingLeft: '30px',
            margin: '0px',
            paddingTop: '10px',
        },
    },
    iconLi: {
        display: 'inline-block',
        padding: '12px 10px 0px 10px',
        [theme.breakpoints.down(750)]: {
            padding: '10px 3px 0px 3px',
        },
    },
    iconDiv: {
        float: 'right',
        [theme.breakpoints.down(750)]: {
            display: 'none'
        },
    },
    iconAvatar: {
        backgroundColor: '#4529AE',
        color: 'white',
        [theme.breakpoints.up('lg')]: {
            width: '50px',
            height: '50px'
        },
        [theme.breakpoints.down(750)]: {
            fontSize: '8px',
            width: '40px',
            height: '40px'
        },
    },
    active: {
        color: '#873FE2'
    },
    Icon: {
        [theme.breakpoints.up('lg')]: {
            fontSize: '9vw',
        },
        [theme.breakpoints.down(750)]: {
            fontSize: '1.5vw',
        },
    },
    hideIcon: {
        [theme.breakpoints.between('md', 'xl')]: {
            display: 'none'
        },
    },
    copyright: {
        fontSize: '1.5vw',
        [theme.breakpoints.down(750)]: {
            position: 'relative',
            bottom: '8px',
            fontSize: '3vw',
        },
    },
    hideMobileIcon: {
        display:'none',
        [theme.breakpoints.down(750)]: {
            display: 'inline-block',
            paddingLeft:'8vw',
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
        <footer className={classes.footer}>
            <div className={classes.iconDiv}>
                <ul className={classes.iconUl}>
                    <li className={classes.iconLi}>
                        <a href="https://www.instagram.com/civictechto">
                            <Avatar className={classes.iconAvatar}>
                                <InstagramIcon className={classes.icon} />
                            </Avatar>
                        </a>
                    </li>
                    <li className={classes.iconLi}>
                        <a href="https://twitter.com/CivicTechTO">
                            <Avatar className={classes.iconAvatar}>
                                <TwitterIcon className={classes.icon} />
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
                <div className={classes.hideMobileIcon}>
                    <ul className={classes.iconUl}>

                        <li className={classes.iconLi}>
                            <a href="https://www.instagram.com/civictechto">
                                <Avatar className={classes.iconAvatar}>
                                    <InstagramIcon className={classes.icon} />
                                </Avatar>
                            </a>
                        </li>
                        <li className={classes.iconLi}>
                            <a href="https://twitter.com/CivicTechTO">
                                <Avatar className={classes.iconAvatar}>
                                    <TwitterIcon className={classes.icon} />
                                </Avatar>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
