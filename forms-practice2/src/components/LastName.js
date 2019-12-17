import React from "react"

class LastName extends React.Component {


    render(){
        return(
            <div>

            <input
                type="text" 
                name="LastName" 
                value={this.props.value} 
                placeholder="LastName"
                onChange={this.props.change}
             />
            <p>Last Name entered: {this.props.value}</p>
            </div>
        )
    }
}

export default LastName