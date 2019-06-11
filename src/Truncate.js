import React from 'react';
import PropTypes from 'prop-types';
import truncateString from './truncateString';

export default function Truncate(props) {
  const {
    className,
    onClick,
    text,
    characterLimit
  } = props;

  return (
    <span
      className={className}
      onClick={onClick}
    >
      {truncateString(text, characterLimit)}
    </span>
  );
}

/**
 * Default
 * @type    {Object}
 */
Truncate.defaultProps = {
  className: undefined,
  onClick: undefined
};

/**
 * Types
 * @type    {Object}
 */
Truncate.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  characterLimit: PropTypes.number.isRequired
};
