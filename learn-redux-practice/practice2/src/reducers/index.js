/* import reducers */
import increase from "./increase";
import decrease from "./decrease"

/* import combine reducers to merge our 2 reducers */
import {combineReducers} from "redux"

let reducers = combineReducers({
    increase: increase,
    decrease: decrease
})

export default reducers