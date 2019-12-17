//creating initial state

let initialState = {
    a:1,
    b:1
}

//creating reducer
let reducer = (state = initialState , action) => {
    
    switch(action.type){
        case "UPDATEA" :
            return {
                /* copy state to not modify it directly*/
                ...state,
                a:state.a + state.b
            }
        case "UPDATEB" :
            return {
                /* copy state to not modify it directly*/
                ...state,
                b: state.a + state.b
            }
    }


    return state
}

export default reducer