/* creating initial state */
const initialState = {
    age: 21,
    history: []
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

                 //since we don't want to mutate the array directly we gonna use "concat" and it returns a new array

                 history:state.history.concat( {
                    age: state.age + action.value,
                    id: Math.random()
                 })
            }
            break;
        case "DECREASE":
            return {
                //copying the state
                ...state,
                //increase the age by the property "value" i added in actions files under type
                    age: state.age - action.value,
                    
                    //since we don't want to mutate the array directly we gonna use "concat" and it returns a new array
                    history:state.history.concat( {
                    age: state.age - action.value,
                    id: Math.random()
                    })
            }
        case "DELETE" :
            return {
                //copy state
                ...state,
                
                //click on each item in the history
                //filter: filtering the array of objs. returns a new array but after all elements meets certain criteria
                //action.id: is from the mapDispatchToProps in actions file
                history: state.history.filter( (element) => element.id !== action.id  )
            }
    }

    // if(action.type === "INCREASE") {newState.age++}
    // else if(action.type === "DECREASE ") {newState.age--}

    // /* returning the new state */
   return newState; 
}

//export reducer to be able to use it in other places
export default reducer; 