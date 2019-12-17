//initial state 

let initialState = {
    age: 21,
    ageArray: [],
    asyncNumber: 1
}

let reducer = (state = initialState , action) => {

    switch(action.type) {
        case "INCREASE" :
            return {
                //copy state
                ...state,
                age: state.age +1,
                ageArray: state.ageArray.concat({
                    age: state.age +1,
                    id: state.age +1 * 3
                })
            }
        case "DECREASE" :
            return {
                //copy state
                ...state,
                age: state.age -1,
                ageArray: state.ageArray.concat({
                    age: state.age -1,
                    id: state.age -1 * 3
                })

            } 
        case "delete" : 
            return {
                ...state,
                ageArray: state.ageArray.filter( (item)=> item.id !== action.id )
            }
        case "ASYNC" :
            return {
                ...state,
                asyncNumber: state.asyncNumber +1
            }
        default: 
            return {
                ...state,
                age: state.age
            }
    }
}

export default reducer