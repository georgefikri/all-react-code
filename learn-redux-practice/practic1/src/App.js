import React from 'react';

import {useSelector, useDispatch} from "react-redux"
import {increase} from "./action"

function App() {
  /* gives us access to state */
  let counters = useSelector(state => state.reducer1);
  let dispatch = useDispatch();
  return (
    <div className="App">
      {counters}

      <br />
      <button onClick= { () => dispatch( increase() ) }>click to increase </button>
    </div>
  );
}

export default App;
