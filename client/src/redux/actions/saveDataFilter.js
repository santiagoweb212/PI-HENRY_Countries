import { SAVE_DATA_FILTER } from "../types";

export const saveDataFilter = (data,message) => {
  return {
    type: SAVE_DATA_FILTER,
    data,
    message
  };
};
