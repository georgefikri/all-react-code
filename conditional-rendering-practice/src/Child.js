import React from "react"

class Child extends React.Component{

    render(){
        let buttonText = this.props.status ? "Login Out" : "Log in"
        let statusText = this.props.status ? <span>in</span> : <span>out</span>
        return (
            <div>
                {/* is the boolean is true print "in" is false print "out" */}
                <h1>Logged {statusText} </h1>

                <button onClick={this.props.theClick}>{buttonText}</button>
            </div>
            
        )
        
    }
}

export default Child