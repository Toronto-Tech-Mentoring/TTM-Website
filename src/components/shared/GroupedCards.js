/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core';

import ImageCard from './ThreeSectionsCard';

export default function GroupedCards({ cardsContainerStyle, cardsJson }) {
  const useStyles = makeStyles({
    container: cardsContainerStyle,
  });
  const classes = useStyles();
  const renderListCards = () => cardsJson.map((card) => <ImageCard card={card} key={card.pos} />);
  return <div className={classes.container}>{renderListCards()}</div>;
}
