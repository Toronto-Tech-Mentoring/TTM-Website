import React from "react";
import { makeStyles } from '@material-ui/core';

import ImageCard from './ThreeSectionsCard'
export default function GroupedCards(props) {
    const useStyles = makeStyles({
        container: props.cardsContainerStyle
    });
    const classes = useStyles();
    const renderListCards = () => {
        return props.cardsJson.map(card => (
            <ImageCard
                card={card}
                key = { card.key}
            />
        ))
    }
    return ( < div className = { classes.container } > { renderListCards() } </div>   )
    };