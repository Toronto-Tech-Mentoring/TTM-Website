import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import { useStyles } from './GridContainerStyle';

export default function GridContainer({ direction, style, children }) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      direction={direction}
      justifyContent="center"
      alignItems="center"
      style={style}
    >
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  direction: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
};

GridContainer.defaultProps = {
  style: {},
};
