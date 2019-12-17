import React from 'react';

//import dispatch actions & mapStateToProps
import {mapStateToProps , mapDispatchToProps} from "./actions/index";

//import connect
import { connect } from "react-redux"

class App extends React.Component {

// constructor() {
//       super()
//       this.state = {
//         age: 21
//       }
//     }
//     //we gonna create 2 methods 1 for increase number another for decrease the number
//     /* increase */
//     increaseAge = () => {
//       this.setState( (prevState) => {
//         return  { age: prevState.age +1}
//       } )
//     }
//     /* decrease */
//     decrease = () => {
//       this.setState ( (prevState) => {
//         return {
//           age: prevState.age -1
//         }
//       })
//     }

  render(){
    return (
         <div>
              <div>age:   {this.props.age}</div>
              <button onClick={this.props.increase}>increase</button>
              <button onClick={ this.props.decrease} >decrease</button>

              <br/><br/><br/>
              {/* now we have array and we want to display the data */}
               {
                 this.props.history.map( (item) => {
                   return (
                      <li key={item.id} onClick={() => this.props.delete(item.id)}>
                        {item.age}
                      </li>
                   )
                 })
               }
              <ul>

              </ul>
            </div>
      
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App) ;