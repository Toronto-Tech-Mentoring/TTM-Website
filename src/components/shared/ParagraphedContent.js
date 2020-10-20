import React from 'react';
import Hidden from '@material-ui/core/Hidden';

import { useStyles } from './styles/ParagraphedContentStyle'
import ContentLeft from '../../images/about-us/bottom-line/contentLeft.svg';
import ContentRight from '../../images/about-us/bottom-line/contentRight.svg';

export default function ParagraphedContent(props){
    const classes = useStyles();
    let splitContent = props.content.split('\n').map((item, i) => <p key={i}>{item}</p>);

    return(
        <div >
            <Hidden  only={props.hideCheetohs}>
                <ContentRight className={classes.contentDecorationRight} alt="content decoration right"/>
            </Hidden>
            <p className={classes.contents} style={props.style}>{splitContent}</p>
            <Hidden  only={props.hideCheetohs}>
                <ContentLeft className={classes.contentDecorationLeft} alt="content decoration left"/>
            </Hidden>
        </div>
    )
}