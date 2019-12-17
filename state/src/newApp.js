import React from "react"


class NewApp extends React.Component{

    constructor(){
        super();
        this.state ={
            name: "George",
            age: "30"
        }
    }
 
    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age} years old</h1>
            </div> 
        )
    }
  
}

export default NewApp
