
export let asyncUpdate1 = () => {
    return {type: "ASYNC"}
}

export let asyncUpdate = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(asyncUpdate1())
        }, 2000);
    }
}