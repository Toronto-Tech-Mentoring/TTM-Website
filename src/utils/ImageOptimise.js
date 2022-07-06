import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import useNonSvgData from '../hooks/queries/nonsvgs';

function Image(props) {
  const { filename, alt, className } = props;
  const { edges } = useNonSvgData();

  const node = edges.find((n) => n.node.name.includes(filename));

  if (!node.node) {
    return null;
  }
  const image = getImage(node.node);
  return <GatsbyImage alt={alt} image={image} className={className} />;
}

export default Image;

Image.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
