import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './ParagraphedTextStyle';

export default function ParagraphedText({ extra, content, style }) {
  const classes = useStyles();

  return (
    <p className={classes.contents} style={style}>
      {content}
      {extra}
    </p>
  );
}

ParagraphedText.propTypes = {
  extra: PropTypes.string,
  content: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
};

ParagraphedText.defaultProps = {
  extra: '',
  style: {},
};
