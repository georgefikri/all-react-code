import React from "react"

class Age extends React.Component {


    render(){
        return(
            <div>

            <input
                type="number" 
                name="Age" 
                value={this.props.value} 
                placeholder="Age"
                onChange={this.props.change}
             />
            <p>Age entered: {this.props.value}</p>
            </div>
        )
    }
}

export default Age