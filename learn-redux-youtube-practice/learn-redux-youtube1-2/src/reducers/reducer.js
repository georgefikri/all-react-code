//creating initial state
let initialState = {
    age: 20,
    history: []
}

let reducer = (state =initialState , action) => {
    
    //copy state
    let newState = {...state}

    switch(action.type) {
        case "INCREASE":
            return {
                //copy state
                ...state,
                age: state.age +1,
                //add value to history
                history: state.history.concat( {
                    age: state.age +1,
                    id: Math.floor(Math.random() * 20)
                })
            }
        
        case "DECREASE":
                return {
                    //copy state
                    ...state,
                    age: state.age -1,
                    //add value to history
                    history: state.history.concat( {
                        age: state.age -1,
                        id: Math.floor(Math.random() * 20)
                    })
                }
        
        case "DELETE":
            return {
                ...state,
                history: state.history.filter( (item) => item.id !== action.id )
            }

    }

    return newState

}

export default reducer