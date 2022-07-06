import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './TextBoxStyle';

export default function TextBox({ style, children }) {
  const classes = useStyles();

  return (
    <div className={classes.textBox} style={style}>
      {children}
    </div>
  );
}

TextBox.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};

TextBox.defaultProps = {
  style: {},
};
