import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.p`
display: flex;
align-items: flex-end;
width: 80%;
height: 15rem;`;

export default function Quote({ quote }) {
  return <Container> {quote} </Container>;
}

Quote.propTypes = {
  quote: PropTypes.string
};
