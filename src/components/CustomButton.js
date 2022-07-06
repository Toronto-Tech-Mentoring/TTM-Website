import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
//
const useStyles = makeStyles(() => ({
  contactButton: {
    borderRadius: '300px',
    width: '200px',
    height: '50px',
    fontSize: '18px',
    borderStyle: 'none',
    fontFamily: 'Poppins',
  },
}));

export default function CustomButton({
  text,
  customClass,
  customStyles,
  link,
}) {
  const classes = useStyles();

  return (
    <a href={link}>
      <button
        type="button"
        style={customStyles}
        className={`${classes.contactButton} ${customClass}`}
      >
        {text}
      </button>
    </a>
  );
}

CustomButton.propTypes = {
  customClass: PropTypes.objectOf(PropTypes.string),
  customStyles: PropTypes.objectOf(PropTypes.string),
  text: PropTypes.string,
  link: PropTypes.string,
};

CustomButton.defaultProps = {
  customClass: {},
  customStyles: {},
  text: '',
  link: '',
};
