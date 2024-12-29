import React, { useEffect, useState } from 'react';

const FetchDataOnLoad = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Fetching data...');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      console.log('Cleanup logic, if needed.');
    };
  }, []); // Runs only once on component mount

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchDataOnLoad;
