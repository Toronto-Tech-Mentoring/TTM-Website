import React from "react";
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { useStyles } from './styles/BottomLineVitalRole';
import TitleRight from '../../images/about-us/bottom-line/titleRight.svg';
import TitleLeft from '../../images/about-us/bottom-line/titleLeft.svg';
import ContentLeft from '../../images/about-us/bottom-line/contentLeft.svg';
import ContentRight from '../../images/about-us/bottom-line/contentRight.svg';

export default function GridContainerTextPic(props){
    const classes = useStyles();
    const PicSVG = props.image;
    let contentsClass;
    let titleClass;
    if (props.justified === 'center'){
        contentsClass = classes.contentsCentered;
        titleClass = classes.titleCentered;
    }
    if (props.justified === 'left'){
        contentsClass = classes.contentsLeft;
        titleClass = classes.titleLeft;
    }
    let splitContent = props.content.split('\n').map((item, i) => <p key={i}>{item}</p>);
    let splitContentIndex = props.insertPicBeforePosition;

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
                        {props.displayCheetoh &&
                        <TitleLeft className={classes.hideTitleStyle} alt="title decoration left"/>
                        }
                        <p className={titleClass}>{props.title}</p>
                        {props.displayCheetoh &&
                        <TitleRight className={classes.hideTitleStyle} alt="title decoration right"/>
                        }
                    </div>
                    {splitContentIndex != null &&
                    <div>
                        <p className={contentsClass}>{splitContent.slice(0, splitContentIndex)}</p>
                        <Hidden mdUp>
                            <PicSVG className={classes.svgSettings} alt="picSVG" />
                        </Hidden>
                        <p className={contentsClass}>{splitContent.slice(splitContentIndex, splitContent.length)}</p>
                    </div>
                    }
                    {splitContentIndex == null &&
                    <div>
                        <p className={contentsClass}>{splitContent}</p>
                    </div>
                    }
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
                <Hidden smDown>
                    <PicSVG className={classes.svgSettings} alt="picSVG" />
                </Hidden>
                {splitContentIndex == null &&
                <Hidden mdUp>
                    <PicSVG className={classes.svgSettings} alt="picSVG" />
                </Hidden>
                }
                {props.displayHiddenComponent &&
                <Hidden mdUp>
                    <p className={classes.question}>{props.hiddenQuestion}</p>
                    <button className={classes.contactButton}>{props.hiddenButtonText}</button>
                </Hidden>
                }
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth="large">
                    <Typography component="div" style={{ height: '10vh' }} />
                </Container>
            </Grid>
        </Grid>
    )
}