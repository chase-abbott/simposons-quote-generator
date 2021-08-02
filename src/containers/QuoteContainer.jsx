import React, { useState } from 'react';
import getQuote from '../services/twinPeaksAPI.js';
import Character from '../components/app/character/Quote';
import Load from '../components/app/character/Load';
import styled from 'styled-components';

const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 80%;
height: 50%;`;

export default function QuoteContainer() {
  const [quote, setQuote] = useState('Click to get a quote');

  const handleLoad = () => {
    return getQuote()
      .then(res => setQuote(res));
  };

  return (
    <Body>
      <Character quote={quote.quoteText}/>
      <Load onLoad={handleLoad}/>
    </Body>
  ); 
}
