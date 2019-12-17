import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(){
    super()
    this.state= {

    }
  }

  /* removed
  componentWillMount(){

  } */


    /* removed
  componentWillUpdate(){

  } */

  // removed
  // componentWillReceiveProps(){
  //   /* will be dropped starting from react version 17
  //     is marked UNSAFE to worked with in version 16.3
  //     good to know for legacy code
  //   */
  // }


  componentDidMount(){
    //get data from API to display / calling API here
 }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUnmount(){

  }

  /* not recommeded at all */
  getDerivedStateFromProps(props , state){

  }

  /*  */
  getSnapshotBeforeUpdate(){
    
  }

  render(){
    return(
        <div>
          {React.version}
        </div>
    )
  }
}

export default App;
