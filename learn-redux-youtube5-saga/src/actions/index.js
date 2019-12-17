//pass the data to our App.js as props so when the state changes it's automatically updates
export const mapStateToProps = (state) => {
    return {
        age: state.age
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
            })
    }
  }
  
  