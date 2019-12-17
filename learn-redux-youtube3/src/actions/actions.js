export let mapStateToProps = (state) => {
    return {
        a: state.reducerA.a,
        b: state.reducerB.b
    }
}

//the action : the explanation of what i gonna do like ex, increase
export let mapDispatchToProps = (dispatch) => {
    return {
        updateA: (b)=>  dispatch({ type: "UPDATEA", b:b }),
        updateB: (a)=> dispatch({ type: "UPDATEB", a:a })
    }
}