import React from 'react';
import Hidden from '@material-ui/core/Hidden';

import { useStyles } from './DecoratedTextStyle'
import PText from '../ParagraphedText/ParagraphedText'
import CheetohLeft from '../../images/cheetohs/cheetohLeft.svg';
import CheetohRight from '../../images/cheetohs/cheetohRight.svg';

export default function DecoratedText(props){
    const classes = useStyles();
    // let splitContent = props.content.split('\n').map((item, i) => <p key={i}>{item}</p>);
    const extra = props.extra

    return(
        <div >
            <Hidden  only={props.hideCheetohs}>
                <CheetohRight className={classes.cheetohRight} alt="content decoration right"/>
            </Hidden>
            <PText content={props.content} extra={extra} style={props.style}/>
            {/* <p className={classes.contents} style={props.style}>{splitContent}{extra}</p> */}
            <Hidden  only={props.hideCheetohs}>
                <CheetohLeft className={classes.cheetohLeft} alt="content decoration left"/>
            </Hidden>
        </div>
    )
}