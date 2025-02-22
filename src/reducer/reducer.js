export const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrease":
      return {
        ...state,
        count: state.count - 1,
      };
    case "toast" :
        return({
            ...state,
            count : 0
        })
    default:
      return state;
  }
};
