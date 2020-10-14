import React from "react";

import People from '../../images/about-us/bottom-line/people.svg';
import GridContainerTextPic from '../shared/GridContainerTextPic';

export default function TheBottomLineSection() {

    const title = "The bottom line"
    const content = "If you’re facing housing precarity in Toronto and want to learn 'tech' skills, we want to help you. Free of charge."
    const question = "Not sure if you qualify?"
    const buttonText = "Contact Us"

    return (
        <GridContainerTextPic title={title} content={content} displayCheetoh={true} displayHiddenComponent={true} hiddenQuestion={question} hiddenButtonText={buttonText} image={People}/>
    )
};

