import React from 'react';
import NavBar from '../components/Navbar';

const styles = {
    footer : {
        position: 'fixed',
        width: '1440px',
        height: '80px',
        left: '0px',
        bottom: '0px',
        background:' #FFFFFF',
        marginTop: '100px',
        zIndex: '999',
    }
}

export default function MainLayout({children}){
    return (
        <>
            <NavBar />
            {children}
            <footer style={styles.footer}>
                <h1>This is placeholder for Footer</h1>
            </footer>
        </>
    )
}