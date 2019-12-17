let increase = (state = 1 , action)=> {
    switch(action.type) {
        case "add":
            return  state * 2
        default:
            return state
    }
}

export default increase