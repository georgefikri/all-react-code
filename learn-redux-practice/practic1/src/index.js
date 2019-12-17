import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



/* create store */
import {createStore, combineReducers} from "redux"

/* reducers */
import counter from "./reducer"

/* to connect react with redux */
import { Provider } from "react-redux"



let reducers = combineReducers({
    reducer1: counter
})



/* store - global store - state */
let store = createStore(reducers, 	
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));




