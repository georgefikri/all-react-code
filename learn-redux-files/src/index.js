import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//add store - the globalized store
import {createStore } from "redux";


//import reducers from learn-redux-files\src\reducers\index.js
/*
 "./reducers/index" i don't need to add the /index in the end because webpack takes care of it
 it automatically looks at the index.js file in the folder
 */
import allReducers from "./reducers/index";

/* what this does is connects our global "store" ( state ) to our entire "<App/>"" */
import { Provider } from "react-redux"


const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );




ReactDOM.render(  
    /* now our app has access to store ( the state) */
<Provider store={store}>
    <App /> 
</Provider>
, document.getElementById('root'));
serviceWorker.unregister();
