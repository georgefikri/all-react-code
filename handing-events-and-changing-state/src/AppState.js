import React from "react"

class AppState extends React.Component {
    constructor(){
        super();
        this.state={
            count:0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    /********************Way 1 : passing an object to setState ***************************/

    handleClick(){
       this.setState({count:1})
    }

    /********************Way 2 : creating function in setState ***************************/

    handleClick(){
        this.setState( function(prevState){
                return {
                    count: prevState.count +1
                }
        } )
    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}> change</button>
            </div> 
        )
    }
}

export default AppState 