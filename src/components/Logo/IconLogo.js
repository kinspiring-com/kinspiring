import React from 'react';
import PropTypes from 'prop-types';
import IconImage from './kinspiring_250x300.png';
import config from '../../config';

const IconLogo = props => {
  const { className, ...rest } = props;
  return <img className={className} src={IconImage} alt={config.siteTitle} {...rest} />;
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
