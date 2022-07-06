import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as cheetoRight } from '../../images/cheetohs/cheetohRight.svg';

export default function CheetoRight({ customClass }) {
  return <img alt="cheetoRight" className={customClass} src={cheetoRight} />;
}

CheetoRight.propTypes = {
  customClass: PropTypes.objectOf(PropTypes.string),
};

CheetoRight.defaultProps = {
  customClass: {},
};
