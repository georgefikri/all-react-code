import {delay} from "redux-saga/effects";
// import { takeEvery, put } from "redux-saga/effects"
import { takeLatest, put } from "redux-saga/effects"

 function* increaseAsync(){
    // 4000 milleseconds , which is 4 seconds 
    yield delay(2000)


    //this is the new action or INCREASE() that will dispach & send to the reducer
    yield put( {type:'INCREASE_ASYNC' , value: 1})
}

//function name is the same in actions (actions/index.js)
export function* increase() {
    /*
    yield takeEvery(): takes 2 parameters 
    1st: name of the what we're watching "INCREASE"  same name we use at actions type: ""
    2nd: is another function gonna run when we catch the dispatched action 
    ----
    yield: observe each action gets dispatched
    INCREASE: same name in actions type defined 
    */
    // yield takeEvery('INCREASE', increaseAsync)
    yield takeLatest('INCREASE', increaseAsync)
 }