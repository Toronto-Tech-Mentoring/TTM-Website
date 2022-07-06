import React from 'react';
import PropTypes from 'prop-types';

import PText from '../ParagraphedText/ParagraphedText';

export default function DecoratedText({
  extra, className, content, style,
}) {
  const extraText = extra;
  return (
    <div>
      <PText
        content={content}
        extra={extraText}
        style={style}
        className={className}
      />
    </div>
  );
}

DecoratedText.propTypes = {
  extra: PropTypes.string,
  content: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.objectOf(PropTypes.string),
};

DecoratedText.defaultProps = {
  extra: '',
  style: {},
  className: {},
};
