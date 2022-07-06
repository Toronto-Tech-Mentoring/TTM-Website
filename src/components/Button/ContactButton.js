import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './ContactButtonStyle';

export default function ContactButton({ style, buttonText }) {
  const classes = useStyles();

  return (
    <button type="button" className={classes.contactButton} style={style}>
      {buttonText}
    </button>
  );
}

ContactButton.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  buttonText: PropTypes.string.isRequired,
};

ContactButton.defaultProps = {
  style: {},
};
