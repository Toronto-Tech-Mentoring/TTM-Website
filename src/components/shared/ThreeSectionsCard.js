/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core';

export default function ImageCard({ card }) {
  const useStyles = makeStyles(card.style);
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      <div className={classes.header}>{card.header}</div>
      <div className={classes.bodyWrapper}>{card.body}</div>
      <div className={classes.footer}>{card.footer}</div>
    </div>
  );
}
