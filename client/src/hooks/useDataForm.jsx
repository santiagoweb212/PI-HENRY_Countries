import { useEffect, useState } from "react";
import { validateForm } from "../utils/validateForm";

export const useDataForm = (initialState) => {
  const [valueForm, setValueForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const handleValueInputChange = (e) => {
    const { value, name } = e.target;
    console.log(name);
    if (name === "countries") {
      setValueForm({
        ...valueForm,
        [name]: valueForm.countries.concat(value),
      });
    } else {
      setValueForm({ ...valueForm, [name]: value });
    }
  };
  const handleValidateFormBlur = (e) => {
    const { name } = e.target;

    const error = validateForm(valueForm);
    setErrors({ ...errors, [name]: error[name] });

    console.log("-->onblur errors", errors);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const error = validateForm(valueForm);
    setErrors(error);
    // Verificar si hay errores
    if (Object.keys(error).length !== 0) {
      console.log("Existen errores en el formulario:", errors);
      return;
    }

    // No hay errores, continuar con el envío del formulario
    console.log("formulario completo ", valueForm, errors);
    setLoading(true);
    return fetch(process.env.REACT_APP_API_URL_ACTIVITIES, {
      method: "POST",
      body: JSON.stringify(valueForm),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          setResponse(true);
          setValueForm(initialState);
        }, 2000);

        setTimeout(() => {
          setResponse(false);
        }, 4000);
      })
      .catch((err) => console.log("--->", err));

    
  };

  return {
    valueForm,
    errors,
    loading,
    response,
    handleValueInputChange,
    handleOnSubmit,
    handleValidateFormBlur,
  };
};
