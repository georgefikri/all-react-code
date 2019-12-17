import React from "react"

class Conditional extends React.Component{
    
   render(){

   /*********** if else way *********/ 
/* 
    if(this.props.isLoading === true){
        return (
            <h1>is loading</h1>
        )
    } else {
       return (
        <h1>finished loading</h1>
       )
    } */

    /*********** ternary operator way *********/ 
    return (
        <div>
            {this.props.isLoading === true ? <h1>is loading</h1> : <h1>finished loading 2</h1>}
        </div>
    )

   }
    
}

export default Conditional