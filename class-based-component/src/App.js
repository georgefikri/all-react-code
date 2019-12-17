import React from 'react';
import logo from './logo.svg';
import './App.css';

/* function App() {
  return (
      <h1>hello world</h1>
  );
}
 */

/*
this is commented because the below line practice
class App extends React.Component{
    render(){
      return (
        <h1>hello world from Class App</h1>
      )
    }
}
 */


/***********************************class-based component practice  ********************************************/
/* function App(){
    return (
      <div>
        <Header />
        <Greeting /> 
      </div>
    )
} */

class App extends React.Component {
  render(){
      return (
        <div>
          <Header username="George"/>
          <Greeting /> 
        </div>
      )
  }
}

/* 
function Header(props) {
  return (
    <header>
      <p>welcome , {props.username}</p>
    </header>
  )
} */

class Header extends React.Component {

  render(){
    return (
      <header>
        <p>welcome , {this.props.username}</p>
      </header>
    )
  }
}

/* function Greeting(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay
    if(hours < 12 ) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours< 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }
    return (
      <h1>Good {timeOfDay} to you </h1>
    )
} */

class Greeting extends React.Component {
    render(){
      const date = new Date();
      const hours = date.getHours();
      let timeOfDay
  
      if(hours < 12 ) {
        timeOfDay = "morning"
      } else if (hours >= 12 && hours< 17) {
        timeOfDay = "afternoon"
      } else {
        timeOfDay = "night"
      }

      return (
        <h1>Good {timeOfDay} to you </h1>
      )
    }
}






export default App;
