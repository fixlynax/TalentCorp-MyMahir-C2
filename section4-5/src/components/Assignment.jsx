import { useState, useEffect } from 'react';

const Assignment = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      // This API does not work anymore, why don't you try replacing it with another API?
      const response = await fetch('https://api.animechan.io/v1/quotes/random');
      const data = await response.json();
      setQuote(data.data.content);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {quote && (
        <div>
          <p>"{quote.content}"</p>
          <p>- {quote.author}</p>
        </div>
      )}
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
};

export default Assignment;
