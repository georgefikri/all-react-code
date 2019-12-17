import React from "react"

class Sub extends React.Component {

    render(){
        return(
            <li>
                <input 
                type="checkbox"
                id={this.props.data.id}
                name="checkbox"
                onChange={()=>this.props.change(this.props.data.id)}
                checked={this.props.data.status}
                />
                <label htmlFor={this.props.data.id}>{this.props.data.item}</label>
            </li>
        )
    }
}

export default Sub