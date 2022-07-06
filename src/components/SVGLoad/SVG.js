/* eslint-disable react/prop-types */
import React from 'react';

import { useStyles } from './SVGStyle';

export default function SVGLoad({ image, style }) {
  const PicSVG = image;
  const classes = useStyles();

  return <PicSVG className={classes.svgSettings} style={style} />;
}
