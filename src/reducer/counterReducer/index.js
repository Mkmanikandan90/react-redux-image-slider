const initialState = {
  index :0
}


const CountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
       return {
         index: state.index + 1
       }
    case "DECREMENT":
      return {
        index: state.index - 1
      }
    case "RESET":
      return {
        index: 0
      }
    default:
      return state;
  }
};
export default CountReducer;
