import {
  getOptionsActivities,
  getOptionsContinent,
} from "../../utils/getOptionsContinent";
import { Button } from "../button/button";
import DropDown from "../dropDown/DropDown";
import SearchBar from "../searchBar/SearchBar";
import styles from "./SearchFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import lupa from "../../assets/Search.svg";
import filter from "../../assets/Filter.svg";
import sorting from "../../assets/Sorting.svg";
import { useEffect, useState } from "react";
import flechaIzquierda from "../../assets/arrow-left.svg";
import { dataFilter } from "../../utils/dataFilter";
import { setMenuOptions } from "../../redux/actions/setMenuOptions";
import { saveDataFilter } from "../../redux/actions/saveDataFilter";
import { fecthData } from "../../redux/actions/fetchData";
import { getCurrentPage } from "../../redux/actions/getCurrentPage";
const SearchFilterbar = ({ isOpen, onClick }) => {
  const { countries, activities } = useSelector(
    (state) => state.fetchDataReducer.requests
  );
  const menuOptions = useSelector((state) => state.setMenuOptionsReducer);
  const [valueSearch, setValueSearch] = useState("");
  const dispatch = useDispatch();
  const sortBy = ["random", "A-z", "Z-a", "ascending", "descending"];

  const handleFilterClick = (e) => {
    dispatch(setMenuOptions(e.target.getAttribute("name"), e.target.innerText));
  dispatch(getCurrentPage('1'))
  };
const handleDeleteFilterClick=(e)=>{
  console.log("esty aca en handle delete")
dispatch(setMenuOptions('reset'))
}
  const handleSearchClick = (e) => {
    dispatch(
      fecthData(
        `${process.env.REACT_APP_API_URL_COUNTRIES_NAME}${valueSearch}`,
        "countryName",
        "name"
      )
    );
  };
  const handleSearChange = (e) => {
    const value = e.target.value;
    setValueSearch(value);
  };

  useEffect(() => {
    const data = countries && dataFilter(countries, menuOptions);
    console.log(data);
    if(data?.hasOwnProperty('message')){
      dispatch(saveDataFilter(data.arrayFiltrado,data.message));
      return
    }
    if (data?.length > 0) {
      dispatch(saveDataFilter(data,''));
      return
    }
  }, [countries, menuOptions]);
  return (
    <>
      {isOpen ? (
        <>
          <SearchBar
            onClick={handleSearchClick}
            onChange={handleSearChange}
            value={valueSearch}
            
          />
          <div className={styles.containerButtonFilter}>
            <h2>Filter</h2>
            <Button disabled={false} texto={"Clear Filter"} styleName={"buttonClearFilter"} onClick={handleDeleteFilterClick} />
          </div>
          <DropDown
            title={"Filter By Continents"}
            data={
              countries && [
                "all continents",
                ...getOptionsContinent(countries?.data),
              ]
            }
            name="continents"
            option={menuOptions.continents}
            handleFilterClick={handleFilterClick}
          />
          <DropDown
            title={"Sort countries by order"}
            showImg={false}
            data={sortBy}
            name="sort"
            option={menuOptions.sort}
            handleFilterClick={handleFilterClick}
          />

          <DropDown
            title={"Filter By Activity"}
            showImg={false}
            data={
              activities && [
                "all activities",
                ...getOptionsActivities(activities?.data),
              ]
            }
            name="activities"
            option={menuOptions.activities}
            handleFilterClick={handleFilterClick}
          />
          <div className={styles.containerArrown}>
            <button onClick={onClick}>
              <img src={flechaIzquierda} alt="" />
            </button>
          </div>
        </>
      ) : (
        <div className={styles.containerButtons}>
          <button className={styles.button} onClick={onClick}>
            <img src={lupa} alt="" />
          </button>{" "}
          <button className={styles.button} onClick={onClick}>
            <img src={filter} alt="" />
          </button>
          <button className={styles.button} onClick={onClick}>
            <img src={sorting} alt="" />
          </button>
        </div>
      )}
    </>
  );
};

export default SearchFilterbar;
