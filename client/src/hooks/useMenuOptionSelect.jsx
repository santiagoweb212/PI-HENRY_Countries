import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage } from "../redux/actions/getCurrentPage";
import { setMenuOptions } from "../redux/actions/setMenuOptions";
import { useEffect } from "react";
import { dataFilter } from "../utils/dataFilter";
import { saveDataFilter } from "../redux/actions/saveDataFilter";
import { useSearchCountries } from "./useSearchCountries";

export const useMenuOptionSelect=()=>{
 
    const { countries, activities } = useSelector(
        (state) => state.fetchDataReducer.requests
      );
    const menuOptions = useSelector((state) => state.setMenuOptionsReducer);
    const dispatch = useDispatch()
    const handleSelectClick=(e)=>{
        dispatch(setMenuOptions(e.target.getAttribute("name"), e.target.innerText));
        dispatch(getCurrentPage('1'))
    }
    useEffect(() => {
        const data = countries && dataFilter(countries, menuOptions);
     
        if(data?.hasOwnProperty('message')){
          dispatch(saveDataFilter(data.arrayFiltrado,data.message));
          return
        }
        if (data?.length > 0) {
          dispatch(saveDataFilter(data,''));
          return
        }
      }, [countries, menuOptions]);
      const handleDeleteFilterClick=(e)=>{
        
        dispatch(setMenuOptions('reset'))
        
        }
return {handleSelectClick,menuOptions,handleDeleteFilterClick} 
}