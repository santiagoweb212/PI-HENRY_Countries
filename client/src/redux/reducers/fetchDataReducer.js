import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../types";
const initialState = {
  requests: {},
};
const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        requests: {
          ...state.requests,
          data: [],
          loading: false,
          error: action.payload,
        },
      };
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          [action.requestId]: { data: [], loading: true, error: null },
        },
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          [action.requestId]: {
            data: action.payload,
            loading: false,
            error: null,
          },
        },
      };
    default:
      return state;
  }
};
export default fetchDataReducer;
