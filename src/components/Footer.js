import React from 'react';
import { Link } from "gatsby";
import Avatar from '@material-ui/core/Avatar';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';

const styles = {
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '80px',
        zIndex: '999',
    },
    footerUl: {
        display: 'inline-block',
    },
    footerLi: {
        display: 'inline-block',
        padding: '0px 10px',
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
            </div>
        </footer>
    )
}