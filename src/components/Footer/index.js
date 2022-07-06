import React from 'react';
import { Link } from 'gatsby';
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
    marginTop: '-4px',
  },
  footerUl: {
    display: 'inline-block',
    paddingRight: '80px',
    marginTop: '20px',

    [theme.breakpoints.up('lg')]: {
      paddingRight: '50px',
    },
    [theme.breakpoints.down('md')]: {
      paddingRight: '10px',
    },
    [theme.breakpoints.down(761)]: {
      display: 'block',
      margin: '20px',
      paddingLeft: '10px',
    },
  },
  iconUl: {
    display: 'inline-block',
    paddingRight: '15px',
    height: '100%',
    marginTop: '0px',
    marginBottom: '10px',
    [theme.breakpoints.up('lg')]: {
      paddingRight: '80px',
    },
    [theme.breakpoints.down(761)]: {
      paddingLeft: '20px',
      paddingRight: '0px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0px',
      paddingRight: '0px',
      marginTop: '5px',
      marginBottom: '0px',
    },
  },
  footerLi: {
    display: 'inline-block',
    padding: '0px 10px',
    margin: '0',
    [theme.breakpoints.down('md')]: {
      padding: '0px 5px',
    },
    [theme.breakpoints.down(761)]: {
      display: 'block',
    },
  },
  linkText: {
    color: 'black',
    '&:hover': {
      color: '#873FE2',
    },
    fontFamily: 'Poppins',
    fontSize: '16px',
    textDecoration: 'none',
    [theme.breakpoints.down(1024)]: {
      fontSize: '12px',
      lineHeight: '27px',
    },
    [theme.breakpoints.down(761)]: {
      fontSize: '14px',
      lineHeight: '24px',
    },
  },
  disabledLink: {
    pointerEvents: 'none',
  },
  footerLinks: {
    float: 'right',
    [theme.breakpoints.down(761)]: {
      float: 'left',
      paddingRight: 'calc(100% - 200px)',
    },
    [theme.breakpoints.down(426)]: {
      height: '135px',
    },
  },
  copyrightDiv: {
    float: 'left',
    paddingLeft: '50px',
    fontFamily: 'Poppins',
    alignItems: 'center',
    paddingTop: '20px',
    verticalAlign: 'middle',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '8vw',
    },
    [theme.breakpoints.down(1024)]: {
      paddingLeft: '3vw',
      paddingTop: '0px',
    },
    [theme.breakpoints.down(761)]: {
      paddingLeft: '30px',
      margin: '0px',
      paddingTop: '0px',
      width: '90%',
    },
  },
  iconLi: {
    display: 'inline-block',
    padding: '12px 10px 0px 10px',
    [theme.breakpoints.down(761)]: {
      padding: '10px 5px 0px 5px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '10px 3px 0px 3px',
    },
  },
  iconDiv: {
    float: 'right',
    [theme.breakpoints.down(761)]: {
      display: 'none',
    },
  },
  iconAvatar: {
    backgroundColor: '#4529AE',
    color: 'white',
    [theme.breakpoints.up('lg')]: {
      width: '50px',
      height: '50px',
    },
    [theme.breakpoints.down(761)]: {
      width: '25px',
      height: '25px',
      paddingbottom: '5px',
    },
  },
  active: {
    color: '#873FE2',
  },
  icon: {
    [theme.breakpoints.up('lg')]: {
      fontSize: '20px',
    },
    [theme.breakpoints.down(761)]: {
      fontSize: '10px',
    },
  },
  hideIcon: {
    [theme.breakpoints.between('md', 'xl')]: {
      display: 'none',
    },
  },
  copyright: {
    fontSize: '18px',
    lineHeight: '31px',
    [theme.breakpoints.down(1024)]: {
      position: 'relative',
      top: '15px',
      fontSize: '14px',
    },
    [theme.breakpoints.down(761)]: {
      fontSize: '14px',
      lineHeight: '24px',
    },
  },
  hideMobileIcon: {
    display: 'none',
    [theme.breakpoints.down(761)]: {
      display: 'inline-block',
      float: 'right',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  const linkList = [
    {
      id: 'how-it-works',
      path: '/how-it-works/',
      title: 'How it works',
    },
    {
      id: 'volunteer',
      path: '/volunteer/',
      title: 'Volunteer',
    },
    {
      id: 'partners',
      path: '/partners/',
      title: 'Partners',
    },
    {
      id: 'sponsors',
      path: '/sponsors/',
      title: 'Sponsors',
    },
    {
      id: 'home',
      path: '/',
      title: 'About us',
    },
  ];

  const renderLinks = () => linkList.map((item) => (
    <li className={classes.footerLi} key={item.id}>
      <Link
        to={item.path}
        className={classes.linkText}
        activeClassName={classes.disabledLink}
        activeStyle={{ color: '#873FE2' }}
      >
        {item.title}
      </Link>
    </li>
  ));

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
        <ul className={classes.footerUl}>{renderLinks()}</ul>
      </div>
      <div className={classes.copyrightDiv}>
        <span className={classes.copyright}>
          &copy; 2020 Toronto Tech Mentoring
        </span>
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
  );
};

export default Footer;
