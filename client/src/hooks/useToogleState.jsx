import { useState } from "react";

export const useToogleState = () => {
  const [state, setState] = useState(false);
  const handleStateClick = () => setState(!state); 
  return { state, handleStateClick, setState };
};
