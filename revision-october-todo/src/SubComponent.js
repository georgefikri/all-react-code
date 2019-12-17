import React from "react"

class SubComponent extends React.Component {
    
    render(){


        return (
            <ul>
                {
                    this.props.Data.map((item)=>{
                        return (
                            <li key={item.id}>
                                <input type="checkbox"
                                checked={item.status}
                                onChange={()=> this.props.onChange(item.id)}
                                 />
                                <span>{item.item}</span>
                            </li>
                        )
                    })
                }
                
            </ul>
        )
    }
}

export default SubComponent