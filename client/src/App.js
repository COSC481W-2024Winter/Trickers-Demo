import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {

    const apiUrl = 'http://localhost:3000';

    // Use fetch to make a GET request
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      });
  }, []); // The empty dependency array ensures this effect runs once after the initial render

  return (
    <div>
      {data ? (
        <div> {JSON.stringify(data)}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MyComponent;
