import React from "react"

class Select extends React.Component {



    render(){
        return (
            <div>
                <select value={this.props.value} name="Select" onChange={this.props.change} > 
                    <option value="">---Please Select One---</option>
                    <option value="Germany">Germany</option>
                    <option value="Italy">Italy</option>
                    <option value="Sweden">Sweden</option>
                </select>

                <p>the dropown value is {this.props.propValue}</p>
            </div>
        )
    }
}

export default Select