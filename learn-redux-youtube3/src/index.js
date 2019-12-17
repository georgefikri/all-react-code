import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import reducer
//import reducer from "./reducers/reducers"

//import reducer A & reducer B
import reducerA  from "./reducers/reducerA";
import reducerB  from "./reducers/reducerB";

//create global store 
import { createStore , combineReducers } from "redux"

//import provider to connect redux with our application
import { Provider } from "react-redux"


//combine reducers
let reducers = combineReducers({
    reducerA: reducerA,
    reducerB: reducerB
})

//create the store 
let store = createStore(reducers)


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
