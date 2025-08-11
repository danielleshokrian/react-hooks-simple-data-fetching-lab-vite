// create your App component here

import React, { useState, useEffect } from 'react';
import DogDisplay from './DogDisplay';
import FetchButton from './FetchButton';

function App() {
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDog = async () => {
    setLoading(true);
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    setDog(data.message);
    setLoading(false);
  };

  useEffect(() => {
    fetchDog();
  }, []);

return (
     <div className="app">
        <h1>Dogs!</h1>
      <DogDisplay dog={dog} loading={loading} />
      <FetchButton fetchDog={fetchDog} />
    </div>
  )
}

export default App
