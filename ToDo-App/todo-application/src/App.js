import React from 'react';
import './App.css';

/* importing component */
import CheckBoxes from "./components/ToDoCheckBoxes"

/* importing data from our fake API */
import toDoData from "./components/toDoData"

function App() {
  let toDo = toDoData.map((item)=>{
     return  <CheckBoxes key={item.id} all={item} />
  })

  return (
    <div className="TodoList">
      <ul>
         {toDo}
      </ul>
       
    </div>
  );
}

export default App;
