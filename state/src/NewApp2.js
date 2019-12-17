import React , {Component} from "react"

class NewApp2 extends Component {

    constructor(){
        super();
        this.state ={
            isLoggedIn: true
        }
    }

    render() {
        return(
            <div>
                <h1>You are logged {this.state.isLoggedIn  ? "in" : "out"}</h1>
            </div>
        )
    }

}

export default NewApp2