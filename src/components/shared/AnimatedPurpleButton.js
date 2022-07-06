import React from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#873FE2',
    borderRadius: '300px',
    color: 'white',
    borderStyle: 'none',
    width: '100%',
    height: '100%',
    fontSize: '18px',
    fontFamily: 'Poppins',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('542')]: {
      fontSize: '14px',
      width: '120px',
    },
    '&:hover, &:focus': {
      background: '#ffff',
      borderStyle: 'solid',
      borderWidth: 'medium',
      borderColor: '#873fe2',
      color: '#873fe2',
    },
  },
}));

export default function AnimatedPurpleButton({ buttonText }) {
  const classes = useStyles();
  return <Button className={classes.button}>{buttonText}</Button>;
}

AnimatedPurpleButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
