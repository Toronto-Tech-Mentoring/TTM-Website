/* eslint-disable react/prop-types */
import React from 'react';

import { useStyles } from './TitleStyle';

export default function Title({
  divstyle, className, title, pstyle,
}) {
  const classes = useStyles();

  return (
    <div style={divstyle} className={className}>
      <p className={classes.title} style={pstyle}>
        {title}
      </p>
    </div>
  );
}
