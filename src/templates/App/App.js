//import logo from '../../logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:1337/pages/')
      .then((response) => response.json())
      .then((response) => setData(response));
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello</h1>
        {data.map((value) => {
          return (
            <div key={value._id}>
              <h2>
                {value.sections.map((_v) => {
                  return <h1 key={value._id}>{_v.description}</h1>;
                })}
              </h2>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
