import { AUTH_REQUEST } from "../types";

const initialState = {
  auth: false,
};
const authRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
       // Cambiar el estado de autenticación a true
       const newState = { ...state, auth: true };

       // Guardar el estado en el almacenamiento local
       localStorage.setItem("authState", JSON.stringify(newState));
 
       return newState;

    default:
      return state;
  }
};
export default authRequestReducer
