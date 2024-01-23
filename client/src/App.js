import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';

// const MyComponent = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {

//     const apiUrl = 'http://localhost:3000';

//     // Use fetch to make a GET request
//     fetch(apiUrl)
//       .then((response) => {
//         return response.json();
//       })
//       .then((responseData) => {
//         setData(responseData);
//       });
//   }, []); // The empty dependency array ensures this effect runs once after the initial render

//   return (
//     <div>
//       {data ? (
//         <div> {JSON.stringify(data)}</div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// export default MyComponent;
