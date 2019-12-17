import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import reducer from "./reducers/reducer";

//import Provider
import { Provider }  from "react-redux"

//import Thunk
import thunk from "redux-thunk";

//import store
import  { createStore , applyMiddleware } from "redux";



//create store
let store = createStore(reducer , applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
