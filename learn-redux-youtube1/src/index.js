import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import Provider to connect our global state with our application
import { Provider } from "react-redux"

//import createStore to be able to create a store globally
import { createStore } from "redux"

//import reducers we created 
import reducer from "./reducers/index"

//create store, and it's created using reducers
let store = createStore(reducer)

//whatever we pass to Provider here will be available globally across the application
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
