import React from "react"

class FirstName extends React.Component {


    render(){
        return(
            <div>

            <input
                type="text" 
                name="firstName" 
                value={this.props.value} 
                placeholder="first name"
                onChange={this.props.change}
             />
            <p>first name entered: {this.props.value}</p>
            </div>
        )
    }
}

export default FirstName