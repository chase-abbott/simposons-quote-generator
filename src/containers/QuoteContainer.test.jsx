/* eslint-disable no-undef */
import React from 'react';
import { render,
  fireEvent, 
  screen,
  act } from '@testing-library/react';
import QuoteContainer from './QuoteContainer';


jest.useFakeTimers();

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => 'quote'
  });
});

describe('QuoteContainer component', () => {
  // afterEach(() => cleanup());
  it('sends a fetch on button click', async () => {
    render(<QuoteContainer/>);

    await act(async () => {
      const submitButton = await screen.findByTestId('submit-button');
      fireEvent.click(submitButton);
      expect(fetch).toBeCalledTimes(1);     
    });
    
  });
});
