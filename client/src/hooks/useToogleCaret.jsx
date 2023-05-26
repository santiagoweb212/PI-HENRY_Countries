import { useState } from "react";

export const useToogleCaret = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCaret = () => {
    setIsExpanded(!isExpanded);
  };
  return { toggleCaret, isExpanded, setIsExpanded };
};
