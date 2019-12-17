//import actionCreator: Thunk
import * as actionCreator from "./actionCreator"

// 2 important steps
//step1: mapStateToProps to be accessible at App.js

//add state from reducer
export let mapStateToProps = (state) => {
    return {
        age: state.age,
        ageArray: state.ageArray,
        asyncNumber: state.asyncNumber
    }
}

//step2: mapDispatachToProps
export let mapDispatachToProps = (dispatch) => {
    return {
        increase: ()=> dispatch({
            type: "INCREASE"
        }),
        decrease: ()=> dispatch({
            type: "DECREASE"
        }),
        delete: (id)=> dispatch({
            type: "delete",
            id: id
        }),
        asyncUpdate: ()=> dispatch(actionCreator.asyncUpdate())
    }
}