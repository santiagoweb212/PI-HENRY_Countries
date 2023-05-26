import { combineReducers } from "redux";
import fetchDataReducer from "./fetchDataReducer";
import setMenuOptionsReducer from "./setMenuOptionsReducer";
import saveDataFilteReducer from "./saveDataFilterReducer";
import  getCurrentPageReducer  from "./getCurrentPageReducer";
import authRequestReducer from "./authRequestReducer";
const reducer = combineReducers({
  fetchDataReducer,
  setMenuOptionsReducer,
  saveDataFilteReducer,
  getCurrentPageReducer,
  authRequestReducer
});
export default reducer;
