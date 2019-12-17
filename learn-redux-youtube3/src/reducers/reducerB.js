//creating initial state

let initialState = {
    b:1
}

//creating reducer
let reducerB = (state = initialState , action) => {
    
    switch(action.type){
        case "UPDATEB" :
            return {
                /* copy state to not modify it directly*/
                ...state,
                b: action.a + state.b
            }
    }


    return state
}

export default reducerB