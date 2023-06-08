import { useEffect, useState } from "react";
import { fecthData } from "../redux/actions/fetchData";
import { useDispatch } from "react-redux";
import { getCurrentPage } from "../redux/actions/getCurrentPage";
import { useMenuOptionSelect } from "./useMenuOptionSelect";

export const useSearchCountries=()=>{
const {handleDeleteFilterClick}=useMenuOptionSelect()
    const [valueSearch, setValueSearch] = useState("");
    const dispatch = useDispatch();
    const handleSearChange = (e) => {
        const value = e.target.value;
        setValueSearch(value);
        dispatch(getCurrentPage('1'))
        handleDeleteFilterClick('reset')
      };
    const handleSearchClick = (e) => {
        dispatch(
          fecthData(
            `${process.env.REACT_APP_API_URL_COUNTRIES_NAME}=${valueSearch}`,
            "countryName",
            "name"
          )
        );
      };
      useEffect(()=>{
        dispatch(
          fecthData(
            `${process.env.REACT_APP_API_URL_COUNTRIES_NAME}=${valueSearch}`,
            "countryName",
            "name"
          )
        );
      },[valueSearch]);
      return {handleSearchClick,handleSearChange,valueSearch,setValueSearch};
}