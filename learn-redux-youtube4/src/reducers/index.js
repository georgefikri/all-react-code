/* creating initial state */
const initialState = {
    age: 21,

}

/* create a reducer */

const reducer = (state = initialState , action ) => {
/* inside the reducer:
    + we gonna take the state and based on the actions we will change it then return it  */

    //copying the state (elly ben el cosin fel reducer)
    const newState = {...state}

    switch(action.type) {
        case "INCREASE":
            return {
                //copying the state
                ...state,
                //increase the age by the property "value" i added in actions files under type
                 age: state.age + action.value,
            }
            break;
        case "DECREASE":
            return {
                //copying the state
                ...state,
                //increase the age by the property "value" i added in actions files under type
                    age: state.age - action.value,

            }

    }

    // if(action.type === "INCREASE") {newState.age++}
    // else if(action.type === "DECREASE ") {newState.age--}

    // /* returning the new state */
   return newState; 
}

//export reducer to be able to use it in other places
export default reducer; 