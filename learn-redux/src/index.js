import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


/* STORE: globalized state */
    /* create STORE */
    import {createStore} from "redux";

/* ACTION: describes what you wanna do, for example if i wanna make a app when click it increments 
so we call the action INCREMENT - it's a function that returns an object */

const increment = () => {
    return {
        type: "INCREMENT"
    }
}

const decrement = () => {
    return {
        type: "DECREMENT"
    }
}


/* REDUCER: describes how your actions transform to state and to the next state.
ex: ACTION (INCREMENT) is gonna be  called the REDUCER is gonna check which action you did
and based on the ACTION is gonna modify the STORE  -It's also a function that returns an object  
*/

//takes 2 parameter : 
            //first= how is our initial state is gonna look like 
            //second = is the action 
const counter= (state = 0, action  )=> {
    /* here what we can do is "switch" the action depending on it's name */
    /* action : is the parameter passed ino the counter function */
    /* .type: is the object property from increment & decrement methods in action step  */
    /* based on the name(value of "type") is gonna do  */
    switch(action.type) {
        /* if our case is increment (ya3ni law el value of type is increment -
             el object elly rag3 min el function-) */
        case "INCREMENT":
            /* state: is the parameter of the counter function */
            //here we are updating the state by 1
            //once finished it's gonna update our STORE
            return state + 1;
        
        case "DECREMENT":
            return state -1

    }
}

/* now we add REDUCER to the store  */
let store = createStore(counter)


/* display the store in the console */
store.subscribe( () => console.log(store.getState() ) )

/* DISPATCH: this is the way we execute the ACTION.
what'll happen : we send the ACTION to the REDUCER , then the REDUCER is gonna check what to do.
then the STORE gets updated  */

    //increment: is the ACTION , it's the function name
store.dispatch(increment())

/* use action decrement */
store.dispatch(decrement())



ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
