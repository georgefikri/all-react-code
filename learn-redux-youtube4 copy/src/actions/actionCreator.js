
export let loading = () => {
    return {
        type: "LOADING"
    }
}

// the increase action in actions/index.js
export let increaseAsync = (val) => {
    //value: 1 , instead of writing 1 we'll pass parameter to the fuction
    return  {type: "INCREASE1",value: val}
}


export let increase = (val) => {
    return (dispatch) => {
        //synchronous
        dispatch(loading());

        //async : do something async. we will use timeout 
        setTimeout(() => {
             dispatch(increaseAsync(val))
        }, 2000);
    }
}

// the decrease action in actions/index.js
export let decrease = (val) => {
    //value: 1 , instead of writing 1 we'll pass parameter to the fuction
    return  {type: "DECREASE",value: val}
}