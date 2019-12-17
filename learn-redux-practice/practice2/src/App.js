import React from 'react';

/* import useSelector to access reducers & to get access to state*/
import {useSelector, useDispatch} from "react-redux"

/* import actions */
import {increase , decrease} from "./actions/index"

function App() {
  let increasee = useSelector((state) => state.increase);
  let decreasee = useSelector((state) => state.decrease);
  let dispatch = useDispatch();
 
  return (
    <div>
      <p>
          increase:{increasee}
      </p>
      <button onClick = { ()=> dispatch( increase() )}>ddddd</button>
      <p>decrease: {decreasee}</p>
      <button onClick ={ ()=> dispatch(decrease())}>decrese number</button>
    </div>
  );
}

export default App;
