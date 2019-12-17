//pass the data to our App.js as props so when the state changes it's automatically updates
export const mapStateToProps = (state) => {
    return {
        age: state.age,
        history: state.history 
    }
  }
  
 //dispatch step 
 export  const mapDispatchToProps = (dispatch) => {
    return {
        increase: ()=> dispatch(
            {
                type: "INCREASE",
                value: 1
            }),
        decrease: ()=> dispatch(
            {
                type: "DECREASE",
                value: 1
            }),
        handleClickDel: (id)=> dispatch (
            {
                type: "DELETE",
                //the id for comparing the one on item click with the one on the array in reducer
                id: id
            }
        )
    }
  }
  
  