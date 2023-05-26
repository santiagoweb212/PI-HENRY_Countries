import { SET_MENU_OPTIONS } from "../types";

const initialState = {
  continents: "all continents",
  sort: "random",
  activities: "all activities",
};
/* all activities  ascendente A-z  all continents*/
const setMenuOptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_OPTIONS:
      if (action.name === "reset") {
        return {
          ...state,
          continents: "all continents",
          sort: "random",
          activities: "all activities",
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
