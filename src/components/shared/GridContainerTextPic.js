import React from "react";
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

import { useStyles } from './styles/BottomLineVitalRole';
import TitleRight from '../../images/about-us/bottom-line/titleRight.svg';
import TitleLeft from '../../images/about-us/bottom-line/titleLeft.svg';
import ContentLeft from '../../images/about-us/bottom-line/contentLeft.svg';
import ContentRight from '../../images/about-us/bottom-line/contentRight.svg';

export default function GridContainerTextPic(props){
    const classes = useStyles();
    const PicSVG = props.image;
    let splitContent = props.content.split('\n').map((item, i) => <p key={i}>{item}</p>);

    return (
       <Grid container
            className={classes.root}
            justify="center"
            alignItems="center">
            <Grid item xs={12} md={6}>
                <div className={classes.textBox}>
                    {props.displayCheetoh &&
                    <ContentRight className={classes.contentRight} alt="content decoration right"/>
                    }
                    <div>
                        <TitleLeft className={classes.hideTitleStyle} alt="title decoration left"/>
                        <span className={classes.title}>{props.title}</span>
                        <TitleRight className={classes.hideTitleStyle} alt="title decoration right"/>
                    </div>

                    <p className={classes.contents}>{splitContent}</p>
                    {props.displayHiddenComponent &&
                    <Hidden smDown>
                        <p className={classes.question}>{props.hiddenQuestion}</p>
                        <button className={classes.contactButton}>{props.hiddenButtonText}</button>
                    </Hidden>
                    }
                </div>
                <div>
                    {props.displayCheetoh &&
                    <ContentLeft className={classes.contentLeft} alt="content decoration left"/>
                    }
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <PicSVG className={classes.svgSettings} alt="picSVG" />
                {props.displayHiddenComponent &&
                <Hidden mdUp>
                    <p className={classes.question}>{props.hiddenQuestion}</p>
                    <button className={classes.contactButton}>props.buttonText</button>
                </Hidden>
                }
            </Grid>
        </Grid>
    )
}