import React from "react";
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

import GridContainer from '../shared/GridContainer'
import TextBox from '../shared/TextBox'
import Title from '../shared/Title'
import PContent from '../shared/ParagraphedContent'
import ContactButton from '../shared/ContactButton'
import DonateIcons from '../../images/sponsors/iconsDonate.svg';
import SVGLoad from '../shared/SVG'

export default function TheBottomLineSection() {

    const title = "Donate Today"
    const content = "Help us continue to give young people a chance to access tech skills and change their lives."
    const buttonText = "Donate"

    return (
        <GridContainer>
            <Grid item xs={12} md={6}>
            <TextBox>
                <Title title={title} hideCheetohs={["lg","md"]}/>
                <PContent content={content} hideCheetohs={["sm","xs"]}/>
                <Hidden smDown>
                    <ContactButton buttonText={buttonText}/>
                </Hidden>
            </TextBox>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={DonateIcons} alt="donate icons" />
                <Hidden mdUp>
                    <ContactButton buttonText={buttonText}/>
                </Hidden>
            </Grid>
        </GridContainer>
    )
};

