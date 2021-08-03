const getQuote = () => {
  return fetch('https://damp-cove-34137.herokuapp.com/api/quotes/random')
    .then(res => res.json());
};

export default getQuote;
