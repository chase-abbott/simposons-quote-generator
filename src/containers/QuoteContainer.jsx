import React, { useState } from 'react';
import getQuote from '../services/twinPeaksAPI.js';
import Character from '../components/app/quotes/Quote';
import Load from '../components/app/quotes/Load';
import styled from 'styled-components';

const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 80%;
height: 50%;`;

const Loader = styled.img`
position: aboslute;
top: 200px;
`;

export default function QuoteContainer() {
  const [quote, setQuote] = useState('Click to get a quote');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = () => {
    setIsLoading(true);
    return getQuote()
      .then(res => setQuote(res))
      .then(() => setIsLoading(false));
  };

  return (
    <Body>
      {isLoading ? 
        <Loader src="./loader.gif" alt="loader"/> 
        : <Character quote={quote.quoteText}/>
      }
      <Load onLoad={handleLoad}/>
    </Body>
  ); 
}
