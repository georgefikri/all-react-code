/*  
    import * as actionCreator: means import everything and give a nickname actionCreator
 */
import * as actionCreator from "./actionCreator";

//pass the data to our App.js as props so when the state changes it's automatically updates
export const mapStateToProps = (state) => {
    return {
        age: state.age,
        loading: state.loading 
    }
  }
  
 //dispatch step 
 export  const mapDispatchToProps = (dispatch) => {
    return {
        increase: ()=> dispatch(actionCreator.increase(1)),
        decrease: ()=> dispatch(actionCreator.decrease(1))
    }
  }
  
  