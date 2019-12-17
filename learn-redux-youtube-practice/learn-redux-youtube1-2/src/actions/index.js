export let mapStateToProps = (state) => {
    return {
        age: state.age,
        history: state.history
    }
}

//dispatch the action: here we gonna add the actions like increase or decrease 

export let mapDispatchToProps = (dispatch) =>{
    return {
        increase: ()=> dispatch ( {type: "INCREASE"} ),
        decrease: ()=> dispatch ( { type: "DECREASE" } ),
        delete:   (id)=> dispatch ( {type: "DELETE", id: id})
    }
}