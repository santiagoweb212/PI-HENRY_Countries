import { GET_CURRENT_PAGE } from "../types";

const initialState = {
  numberPage: 1,
};
 const getCurrentPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_PAGE:
      return {
        ...state,
        numberPage: action.numberPage
      };
    default:
      return state;
  }
};
export default getCurrentPageReducer;