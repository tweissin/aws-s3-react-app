import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const APIEndPoint = 'https://t42v7vbhd2.execute-api.us-east-1.amazonaws.com/Staging/'
// const APIEndPoint = 'https://httpbin.org/post'
// const APIEndPoint = 'http://localhost:8080/cors'

function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch(APIEndPoint, {
        mode:'cors',
        method: "POST"
      });
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])

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
