import React from 'react';
import PText from '../ParagraphedText/ParagraphedText'

export default function DecoratedText(props){
    const extra = props.extra

    return(
        <div >
            <PText content={props.content} extra={extra} style={props.style}/>
        </div>
    )
}