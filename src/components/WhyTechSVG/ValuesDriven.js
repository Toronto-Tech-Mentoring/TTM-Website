import React from "react";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    
    root: {
        [theme.breakpoints.down('xl')]: {
            paddingLeft: 450
          },
    },
    cssHeaderText: {
        fontFamily: 'Josefin Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '65px',
        display: 'flex',
        alignItems: 'center',
        color: '#000000',
        textDecoration: 'underline #FF7500'
    },
    cssBodyText: {
        fontFamily: 'poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '31px',
        display: 'flex',
        alignItems: 'center',
        color: '#404040'
    }

}));

export default function ValuesDriven() {
    
    const classes = useStyles();
    
    return (

        <Grid item xs={12} md={4} lg={3} xl={2.5}>

            <div className={classes.root} >

                <svg width="841" height="444" viewBox="0 0 841 444" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M410.525 346.229C481.326 358.236 563.701 344.438 629.605 340.352C704.73 335.694 774.052 409.759 797.332 375.253C820.597 340.769 724.79 283.031 709.33 242.482C692.771 199.052 761.598 152.967 694.009 117.729C625.656 82.0925 526.251 105.299 440.333 102.238C381.819 100.154 328.189 100.225 272.122 102.698C199.088 105.92 108.584 94.1977 63.3727 118.866C15.8564 144.791 14.0918 189.639 37.5359 230.691C60.3031 270.558 120.515 307.072 187.641 336.468C248.07 362.931 339.316 334.152 410.525 346.229Z" fill="#E8D1FF" fill-opacity="0.4"/>

                    <foreignObject className={classes.cssHeaderText} x="120" y="110" width="855" height="536">
                        We are a values-driven organization
                    </foreignObject>

                    <foreignObject className={classes.cssBodyText} x="120" y="160" width="600" height="536">
                        By enabling access to tech education, we strive to democratize the benefits of technology for all, including society’s most marginalized and vulnerable communities. We are an evidence-based organization and are committed to continuous improvement through ongoing evaluation processes.
                    </foreignObject>
                </svg>

            </div>

        </Grid>

    )
};