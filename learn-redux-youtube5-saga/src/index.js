import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import reducers we created 
import reducer from "./reducers/index"

//import Provider to connect our global state with our application
import { Provider } from "react-redux"

//import createStore to be able to create a store globally
import { createStore, applyMiddleware} from "redux"

//import saga
import createSagaMiddleware from "redux-saga";

//import increase function from saga ( the function with the same name from actions )
import {increase} from "./sagas/saga";


let sagaMiddleware = createSagaMiddleware()



//create store, and it's created using reducers
let store = createStore(reducer, applyMiddleware(sagaMiddleware) )

//saga watcher - has to be after the creaStore line above
sagaMiddleware.run(increase)

//whatever we pass to Provider here will be available globally across the application
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
