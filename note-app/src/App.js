import React from 'react';
import './App.css';

import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

import escapeRegExp from "escape-string-regexp" 

class App extends React.Component {

  constructor(){
    super();
    this.state= {
        query: "",
        default: true,
        title:"",
        body: "",
        noteTitle: [],
        details: true,
        selectedArray:[]
    }
}

handleChange = (event)=>{
    this.setState({
        [event.target.name] : event.target.value
    })
}


newNote = (event)=> {
    if(this.state.default === true) {
      this.setState({
        default: false
      })
    } else if (this.state.details === false) {
      this.setState({
        details: true
      })
    }
       
  
}

handlePush = (event) => {
  event.preventDefault();
  if(this.state.title !=="" && this.state.body !== "") {
    let title = this.state.title;
    let body  = this.state.body;
    let info = {title: title , body: body}
    /* ES6 spread operator to create a new data array
    https://medium.com/the-andela-way/handling-user-input-in-react-crud-1396e51a70bf
    under: State immutability
    */
    let data = [...this.state.noteTitle, info]
    this.setState({
      noteTitle: data,
      title:"",
      body: ""
  
    })
  } 

}


handleClickDetails = (title, body) => {
  console.log('ana goa el click 3al element ' + title + ' ' +  body)


  if(this.state.selectedArray < 1){

      /* add title body from noteTitle to selected array */
    
      let selectedObj = {title: title , body: body}
      let addSelected = [...this.state.selectedArray, selectedObj]
      this.setState({
        details: false,
        selectedArray : addSelected
      })
  } 
  else {
      /* remove element from array */
      this.state.selectedArray.length = 0;
      /* the next element i click wil be added in the selected array then it will printed */
      let selectedObj = {title: title , body: body}
      let addSelected = [...this.state.selectedArray, selectedObj]
      this.setState({
        details: false,
        selectedArray : addSelected
      })
   
  }

}


  render(){
        /* search  */
          let showingNotes;
          if(this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query) , 'i')
           showingNotes = this.state.noteTitle.filter( (note)=>  match.test(note.title))
        } else {
              showingNotes = this.state.noteTitle
        }

    return (
      <div className="noteContainer">

              <LeftSide
              value={this.state.query}
              handleChange={this.handleChange}
              newNote={this.newNote}
              noteTitle={this.state.noteTitle}
              showingNotes={showingNotes}
              handleClickDetails={this.handleClickDetails} />

              <RightSide
              default={this.state.default}
              details={this.state.details}
              handlePush={this.handlePush}
              title={this.state.title}
              body={this.state.body}
              handleChange={this.handleChange}
              selectedArray={this.state.selectedArray} />

      </div>
    );
  }
  
}

export default App;
