import { SAVE_DATA_FILTER } from "../types";

const initialState = {
  data: [],
  message:'',
  isInitialLoad: true, // Agrega una bandera para controlar la carga inicial
};

const saveDataFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA_FILTER:
      return {
        ...state,
        data: action.data,
        message: action.message,
        isInitialLoad: false, // Cambia la bandera después de la carga inicial
      };
    default:
      return state;
  }
};

export default saveDataFilterReducer;
