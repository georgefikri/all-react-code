import React from 'react';
import './App.css';

import Conditional from "./Conditional"

class App2 extends React.Component {
  constructor(){
    super();
    this.state={
      unreadMessages: [
          'call your mom',
          'new smap email'
      ]
    }
  }


  render(){
    return(
      <div>

        {this.state.unreadMessages.length > 0 && <h2>you have {this.state.unreadMessages.length} 
        unreadMessages</h2>}

      </div>
    )
  }
}

export default App2;
