import React from 'react';
import logo from './logo.svg';
import './App.css';

let hover = ()=>{
  console.log('you hovered on the picture')
}

function App() {
  return (
    <div>
      <h1>hello world from event handling in react</h1>
      <img onMouseOver={hover} src="https://pbs.twimg.com/media/EEpX6SkXsAAjFUn?format=jpg&name=medium" width="300px" height="300px" />
      <br />
      <button onClick={()=> console.log('opaaa')}>click me </button>
    </div>
  );
}

export default App;
