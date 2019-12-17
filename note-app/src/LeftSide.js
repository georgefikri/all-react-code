import React from "react"

class LeftSide extends React.Component{


    render(){
        return(
            <div className="noteLeft">
            {/* input search & button to add */}
            <div className="noteLeftTop">
                <input 
                type="text"
                name="query"
                placeholder="search notes"
                value={this.props.query}
                onChange={this.props.handleChange} />

                <button onClick={this.props.newNote}> New Note</button>
            </div>


            <div className="noteBottom">
                {
                  this.props.noteTitle.length === 0 ? 
                  <h1>No Notes to Display</h1> : 
                  <div>
                      <p className="displayNotes">{this.props.showingNotes.map((element)=>{
                          return (
                                <span key={element.title} 
                                onClick={(event)=> this.props.handleClickDetails(element.title , element.body)}>
                                {element.title} </span>
                            
                          )
                      })}</p>
                  </div>
                }
            </div>
        </div>
        )
    }
}

export default LeftSide