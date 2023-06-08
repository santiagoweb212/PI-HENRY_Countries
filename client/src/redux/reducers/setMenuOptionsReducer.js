import { SET_MENU_OPTIONS } from "../types";

const initialState = {
  continents: "All Continents",
  sort: "random",
  activities: "All Activities",
};
/* all activities  ascendente A-z  all continents*/
const setMenuOptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_OPTIONS:
      if (action.name === "reset") {
        return {
          ...state,
          continents: "All Continents",
          sort: "random",
          activities: "All Activities",
        };
      }

      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default setMenuOptionsReducer;
