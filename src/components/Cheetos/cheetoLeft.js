import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as cheetoLeft } from '../../images/cheetohs/cheetohLeft.svg';

export default function CheetoLeft({ customClass }) {
  return <img alt="cheetoLeft" className={customClass} src={cheetoLeft} />;
}

CheetoLeft.propTypes = {
  customClass: PropTypes.objectOf(PropTypes.string),
};

CheetoLeft.defaultProps = {
  customClass: {},
};
