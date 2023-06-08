import { useRef } from "react";

export const useMultipleRefs = () => {
  const currentHeight = useRef(null);
  const currentHeightSort = useRef(null);
  const ulHeightRef = useRef(null);
  const ulHeightActivitiestRef = useRef(null);
  const ulHeigthOrderRef = useRef(null);
  
  let heightContinents = currentHeight.current?.scrollHeight;
  let heightSort = currentHeight.current?.scrollHeight
  let ulHeigth = ulHeightRef.current?.scrollHeight;
  let ulHeigthActivities = ulHeightActivitiestRef.current?.scrollHeight;
  let ulHeigthOrder = ulHeigthOrderRef.current?.scrollHeight;
  return {
    currentHeightSort,
    currentHeight,
    heightSort,
    ulHeightRef,
    ulHeightActivitiestRef,
    ulHeigthOrderRef,
    heightContinents,
    ulHeigth,
    ulHeigthActivities,
    ulHeigthOrder,
  };
};
