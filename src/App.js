import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  const [count,setCount] = useState(0);
  console.log(count);
  console.log(navigator.geolocation.getCurrentPosition(success));

  function success(pos){
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
   // console.log(`More or less ${crd.accuracy} meters.`);
  }
  return (
    <div className="App">
    <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>        Click me
        </button>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
