import { SET_MENU_OPTIONS } from "../types";

export const setMenuOptions = (name, value) => {
  return {
    type: SET_MENU_OPTIONS,

    name,
    value,
  };
};
