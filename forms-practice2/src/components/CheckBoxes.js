import React from "react"

class CheckBoxes extends React.Component {

    render(){
        return (
<div>
                <h2>checkboxes here</h2>
                <p>
                    <input type="checkbox"
                    name={this.props.name1}
                    checked={this.props.checked}
                    onChange={this.props.change}
                    />
                    <label>Chocolate</label>
                </p>
                <p>
                    <input
                    type="checkbox"
                    name={this.props.name2}
                    checked={this.props.checked2}
                    onChange={this.props.change}
                    />
                     <label>Orange</label>
                </p>
                <p>
                    <input
                    type="checkbox"
                    name={this.props.name3}
                    checked={this.props.checked3}
                    onChange={this.props.change}
                    />
                    <label>WaterMelon</label>
                </p>
                <ul>
                    <li>-----Displaying checkboxes here----</li>
                    <li>Chocolate: {this.props.checked ? "yes": "no"}</li>
                    <li>Orange: {this.props.checked2 ? "yes": "no"}</li>
                    <li>WaterMelon: {this.props.checked3 ? "yes": "no"}</li>
                </ul>
            </div>
        )
    }
}

export default CheckBoxes