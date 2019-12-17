// the 2 reducers files we created
import counterReducer from "./counter"
import loggedReducer  from "./isLogged"

//merge the 2 reducers together as 1 using "combineReducers"
import {combineReducers} from "redux"

/*combineReducers is a function, takes an object, object has property & value
property: any name given for the reducers.
value: the reducers(counterReducer & loggedReducer) imported here the 2 files imported.
*/

const allReducers = combineReducers({
    counterReducer: counterReducer,
    loggedReducer: loggedReducer
})

export default allReducers