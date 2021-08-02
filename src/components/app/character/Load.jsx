import React from 'react';
import PropTypes from 'prop-types';

export default function Load({ onLoad }){
  return <button onClick={onLoad}> Get a Character!</button>;
}

Load.propTypes = {
  onLoad: PropTypes.func.isRequired
};
