import React from 'react';
import logo from './logo.svg';
import './App.css';

import Display from "./Display"

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      data:[],
      isLoading: false
    }
  }

  componentDidMount(){
    this.setState({isLoading: true})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      this.setState({
        data: data,
        isLoading: false
      })
    })
  }

  
  render(){
    return (
      <Display all={this.state.data} loading={this.state.isLoading} />
    )
  }

}

export default App;
