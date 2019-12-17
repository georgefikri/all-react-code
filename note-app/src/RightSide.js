import React from "react"

class RightSide extends React.Component{
    constructor(){
        super();
        this.state= {}
    }

    render(){
        return(
            <div className="noteRight">
                    { this.props.default === true ?

                    <h1>Welcome to Notes</h1>
                    : 
                    this.props.details === true  ? 
                    <form onSubmit={this.props.handlePush}>
                        <input 
                        type="text"
                        name="title" 
                        value={this.props.title}
                        onChange={this.props.handleChange}
                        />

                        <textarea 
                        name="body"
                        onChange={this.props.handleChange}
                        value={this.props.body}
                        />
                        <button onClick={this.props.handlePush}>add note</button>
                    </form>
                    : 
                    <div>
                    {this.props.selectedArray.map((item)=>{
                        return (
                        <div key={item.title} className="noteDetails">
                            <p><strong>Title</strong>: <span>{item.title}</span></p>
                            <p>{item.body}</p>
                        </div>
                        )
                    })}
                    
                    </div>
                        
                    }
            </div>
        )
    }
}

export default RightSide