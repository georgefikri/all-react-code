import React from 'react';
import {useSelector , useDispatch} from "react-redux"

/* import actions (learn-redux-files\src\actions\index.js) */
import {increment , decrement} from "./actions/index"

function App() {

  let counter = useSelector(state =>state.counterReducer);

  let dispatch = useDispatch();

  return (
   <div>
        <h1>{counter}</h1>

        <button onClick={ () => dispatch(increment(5)) }>+</button>

        <button onClick={ () => dispatch( decrement() )  }  >-</button>
   </div>
  );
}

export default App;
