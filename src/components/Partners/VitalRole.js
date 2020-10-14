import React from "react";

import DataAnalyse from '../../images/partners/vital-role/data_analyse.svg';
import GridContainerTextPic from '../shared/GridContainerTextPic';

export default function TheBottomLineSection() {

    const title = "The vital role out partners play:"
    const content = "A learning environment requires safety, and stability. Each client that comes through our program has faced, and often still is facing, significant adversity.\n Our delivery partners provide a safe and stable environment, so that our clients are able to focus on learning a new skill, and planning for a better future. Currently, some of the wrap-around supports that our delivery partners provide are shelter & transitional housing, access to transport, and health and well-being support."
    const justifyContents = "left"

    return (
        <GridContainerTextPic title={title} content={content} displayCheetoh={false} image={DataAnalyse} insertPicBeforePosition={1} justified={justifyContents}/>
    )
};

