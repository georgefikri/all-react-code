import React from "react"

class Radio extends React.Component {


    render(){
        return (
            <div>
                <input
                type="radio"
                name="Gender"
                value={this.props.male}
                checked={this.props.checked}
                onChange={this.props.change}
                />
                Male
                
                <input
                type="radio"
                name="Gender"
                value={this.props.female}
                checked={this.props.checked2}
                onChange={this.props.change}
                />
                Female
                <p>radio data: {this.props.theData}</p>
            </div>
        )
    }
}

export default Radio