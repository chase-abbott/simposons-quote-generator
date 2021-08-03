import React from 'react';
import styled from 'styled-components';
import QuoteContainer from '../../containers/QuoteContainer.jsx';

const CenterComponent = styled.div`
display: flex;
justify-content: center;`;

export default function App() {
  return (
    <CenterComponent>
      <QuoteContainer/> 
    </CenterComponent>
  );
}
