import { GET_CURRENT_PAGE } from "../types";
export const getCurrentPage = (numberPage) => {
  return { type: GET_CURRENT_PAGE, numberPage };
};
