import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../types";
import { saveDataFilter } from "./saveDataFilter";

export const fecthData = (URL,requestId,name) => {
  return (dispatch) => {
    dispatch(fetchDataRequest(requestId));
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        if(name==='name'){
          dispatch(saveDataFilter(data))
        }
        dispatch(fetchDataSuccess(requestId,data));
      })
      .catch((error) => {
       
      
        dispatch(fetchDataFailure(requestId,error));
      });
  };
};

const fetchDataRequest = (requestId) => ({
  type: FETCH_DATA_REQUEST,
  requestId,
});

const fetchDataSuccess = (requestId, data) => ({
  type: FETCH_DATA_SUCCESS,
  requestId,
  payload: data,
});

const fetchDataFailure = (requestId, error) => ({
  type: FETCH_DATA_FAILURE,
  requestId,
  payload: error,
});
