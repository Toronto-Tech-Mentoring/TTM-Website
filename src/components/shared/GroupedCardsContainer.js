import React from "react";
import { makeStyles } from '@material-ui/core';

import ImageCard from './ImageCardWithTitle'

export default function GroupedCardsContainer(props) {
    const useStyles = makeStyles((theme) => ({
        container: {
            width: props.cardsContainerStyle.width,
            marginLeft: props.cardsContainerStyle.marginLeft,
            display: "flex",
            alignItems: "flex-end",
            flexWrap:'wrap',
            justifyContent: "space-between",
            [theme.breakpoints.down('sm')]:props.cardsContainerStyle.sm,
            [theme.breakpoints.down('sm')]:props.cardsContainerStyle.xs 
        }
    }));
    const classes = useStyles();

    const renderListCards = () => {
        return props.listCards.map(cardObject => ( <
            ImageCard cardObject = { cardObject }
            key = { cardObject.text }
            imageTextStyle = { props.imageTextStyle }
            />
        ))
    }

    return ( <div className = { classes.container } > { renderListCards() } </div>   )
};