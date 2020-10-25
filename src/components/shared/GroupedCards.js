import React from "react";
import { makeStyles } from '@material-ui/core';

import ImageCard from './ImageCardWithTitle'

export default function GroupedCards(props) {
    const useStyles = makeStyles((theme) => ({
        container: {
            width: '100%',
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-between",
        }
    }));
    const classes = useStyles();

 const renderListCards = () => {
    return props.listCards.map(cardObject => (
        <ImageCard cardObject={cardObject}
            key={cardObject.text}
      />
    ))
  }

    return (
        <div className={classes.container}>
            {renderListCards()}
        </div>   
    )
    };