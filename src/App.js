import logo from './logo.svg';
import './App.css';
import { useFetch } from "react-async"
import { useEffect } from 'react';

const APIEndPoint = 'https://t42v7vbhd2.execute-api.us-east-1.amazonaws.com/Staging/'
// const APIEndPoint = 'https://httpbin.org/post'
// const APIEndPoint = 'http://localhost:8080/cors'

// const json = fetch(APIEndPoint, {
//   method: "POST",
//   headers: { 
//     'Accept': "application/json",
//     'Content-Type':'application/json' 
//   },
//   mode: 'no-cors',
//   body: '{}'//JSON.stringify({"id": 1, "name": "Joe Cool"})
// })
//   .then(response => response)
//   .then(data => console.log("foo",data))
//   .catch((error,res) => console.log("err",error))

function App() {
  const makeAPICall = async () => {
    try {
      // const response = await fetch('http://localhost:8080/', {mode:'cors'});
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
    // makeAPICall();
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
        {APIEndPoint.startsWith('http') &&
            <APIResult />
          }
      </header>
    </div>
  );
}

const APIResult = () => {
  console.log("API re")
  const { data, error } = useFetch(APIEndPoint, {
    method: "POST",
    headers: { accept: "application/json" },
    body: {"id": 1, "name": "Joe Cool"}
  })
  if (error) {
    console.log("dd")
    return <p>aaa {error.message}</p>
  }
  if (data) {
    console.log("dd")
    return <p>bbb {data.message}</p>
  }
  return "nothing"
}

export default App;
