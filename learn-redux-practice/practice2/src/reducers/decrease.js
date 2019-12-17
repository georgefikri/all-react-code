let decrease = (state = 10 , action) => {
    switch(action.type) {
        case "decrease":
            return state -1;
        default:
            return state
    }
}

export default decrease