import React from "react";
import Grid from '@material-ui/core/Grid';

import GridContainer from '../shared/GridContainer'
import TextBox from '../shared/TextBox'
import Title from '../shared/Title'
import PContent from '../shared/ParagraphedContent'
import ContactButton from '../shared/ContactButton'
import DonateIconsGroup from './DonateIconsGroup'

export default function TheBottomLineSection() {

    const title = "Donate Today"
    const content = "Help us continue to give young people a chance to access tech skills and change their lives."
    const buttonText = "Donate"

    return (
        <GridContainer>
            <Grid item xs={12} md={6}>
            <TextBox>
                <Title title={title} hideCheetohs={["xl","lg","md","sm","xs"]}/>
                <PContent content={content}/>
                <ContactButton buttonText={buttonText}/>
            </TextBox>
            </Grid>
            <DonateIconsGroup />
        </GridContainer>
    )
};

