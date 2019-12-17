let counter = (state =0 , action) => {
    switch(action.type) {
        case 'increase':
            return state + 2;
        default:
            return state;
    }
}

export default counter