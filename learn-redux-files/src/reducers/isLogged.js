const loggedReducer = (state = false, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            //this means (!state) the opposite of the current state
            return !state;
        default:
            return state
    }
}

export default loggedReducer;