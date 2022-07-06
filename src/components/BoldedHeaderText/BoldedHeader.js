import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './BoldedHeaderStyle';

export default function BoldedHeaderText({ style, headerText }) {
  const classes = useStyles();

  return (
    <p className={classes.headerText} style={style}>
      {headerText}
    </p>
  );
}

BoldedHeaderText.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  headerText: PropTypes.string.isRequired,
};

BoldedHeaderText.defaultProps = {
  style: {},
};
