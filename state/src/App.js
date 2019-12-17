import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state= {
      answer: "Yes"
    }
  }

  render() {
    return(
      <h1>hello world ==> {this.state.answer}</h1>

    )
  }
}

export default App;
