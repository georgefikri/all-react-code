//creating initial state

let initialState = {
    a:1,
}

//creating reducer
let reducerA = (state = initialState , action) => {
    
    switch(action.type){
        case "UPDATEA" :
            return {
                /* copy state to not modify it directly*/
                ...state,
                a:state.a + action.b
            }

    }


    return state
}

export default reducerA