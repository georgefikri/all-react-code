import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import Provider to connect our global state with our application
import { Provider } from "react-redux"

//import createStore to be able to create a store globally
import { createStore , applyMiddleware } from "redux"

//import reducers we created 
import reducer from "./reducers/index"

//creating logging the action for applyMiddleware

let logAction = (store) => {
    //now we got the action we captured it
    return (next) => {
        //we'll do something with the action and return it back to the reducer
        return (action) => {

            //what'll do with the action ,in this case we'll look at what that action is,get the content of the action
            //now we've the action 
            const result = next(action);

            //now we got the action  - let's try to look at the action
            //JSON.stringify: turn an object into a JSON string
            console.log(`middleware ${JSON.stringify(result)}`);
            console.log(result)

            //let the action back to the reducer 
            return result;

        }
    }

}

//create store, and it's created using reducers
let store = createStore(reducer , applyMiddleware(logAction))




//whatever we pass to Provider here will be available globally across the application
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
