import React from 'react';
import { Link } from "gatsby";
<<<<<<< HEAD
import Avatar from '@material-ui/core/Avatar';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';

const styles = {
=======
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
>>>>>>> master
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
<<<<<<< HEAD
        height: '80px',
        zIndex: '999',
    },
    footerUl: {
        display: 'inline-block',
=======
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
            paddingRight: '20px',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            paddingLeft: '20px',
            margin: '0px'
        },
    },
    iconUl: {
        display: 'inline-block',
        paddingRight: '80px',
        height: '100%',
        marginBottom: '15px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '10px',
            paddingRight: '0px'
        },
>>>>>>> master
    },
    footerLi: {
        display: 'inline-block',
        padding: '0px 10px',
<<<<<<< HEAD
    },
    footerLinks: {
        float: 'right',
    },
    copyrightDiv: {
        float: 'left',
        paddingLeft: '100px',
    },
    iconAvatar: {
        backgroundColor:'#4529AE',
        color:'white'
    }
}

export default function Footer() {
    return (
        <footer>
            <div style={styles.footerLinks}>
                <ul style={styles.footerUl}>
                    <li style={styles.footerLi}><Link to="/client">Client</Link></li>
                    <li style={styles.footerLi}><Link to="/volunteer">Volunteer</Link></li>
                    <li style={styles.footerLi}><Link to="/partners">Partners</Link></li>
                    <li style={styles.footerLi}><Link to="/sponsors">Sponsors</Link></li>
                    <li style={styles.footerLi}><Link to="/">About Us</Link></li>
                </ul>
                {/* <Avatar style={styles.iconAvatar}>
                    <InstagramIcon />
                </Avatar>
                <Avatar style={styles.iconAvatar}>
                    <TwitterIcon />
                </Avatar> */}
            </div>
            <div style={styles.copyrightDiv}>
                <span>&copy; 2020 Toronto Tech Mentoring</span>
=======
        margin: '0',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
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
        paddingLeft: '3vw',
        fontFamily: 'Poppins',
        alignItems: 'center',
        fontSize: '16px',
        paddingTop: '20px',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '20px',
            fontSize: '14px',
            margin: '0px'
        },
    },
    iconLi: {
        display: 'inline-block',
        padding: '12px 10px 0px 10px',
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
                <span>&copy; 2020 Toronto Tech Mentoring</span>
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
                            <a href="https://twitter.com/?lang=en">
                                <Avatar className={classes.iconAvatar}>
                                    <TwitterIcon />
                                </Avatar>
                            </a>
                        </li>
                    </ul>
                </Hidden>
>>>>>>> master
            </div>
        </footer>
    )
}