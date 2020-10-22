import React from "react";
import {Box, Container, makeStyles} from '@material-ui/core';

import Title from '../shared/Title'
import PContent from '../shared/ParagraphedContent'
import ContactButton from '../shared/ContactButton'
import DonateIconsGroup from './DonateIconsGroup'

const useStyles = makeStyles((theme) => ({

     container: {
        height: 'calc(40vw + 134px)',
        marginTop: 'calc(7vw + 94px)',
         padding:'0px'
       
    },
    textBox: {
        float: 'left',
        marginLeft: 'calc(16vw - 94px)',
        width: 'calc(27vw + 198px)',
           [theme.breakpoints.down('xs')]: {
            width: '100%',
        }
    },

    button: {
       width: 'calc(4vw + 122px)' 
    }

}));


export default function TheBottomLineSection() {
    const classes = useStyles();
    const title = "Donate Today"
    const content = "Help us continue to give young people a chance to access tech skills and change their lives."
    const buttonText = "Donate"

    return (
        <Container className={classes.container}>
            <Box className={classes.textBox}>
                <Title title={title} hideCheetohs={["xl","lg","md","sm","xs"]} />
                <PContent content={content}/>
                <ContactButton buttonText={buttonText} className={classes.button}/>
            </Box>
            <DonateIconsGroup />
        </Container>
    )
};

