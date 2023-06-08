import styles from "./SideBar.module.css";
import arrowLeft from "../../assets/arrow-back.svg";


import DropDown1 from "./DropDowm1";

import SearchBar from "../searchBar/SearchBar";
import { useToogleState } from "../../hooks/useToogleState";
import { useSearchCountries } from "../../hooks/useSearchCountries";
const SideBar = () => {
  const { state, handleStateClick } = useToogleState();
  const {handleSearchClick,handleSearChange,valueSearch}=useSearchCountries()

  return (
    <aside
      className={`${styles.sideBarContainer} ${
        state ? styles.sideBarContainerOpen : ""
      }`}
    >
      <SearchBar  onClick={handleSearchClick} onChange={handleSearChange} value={valueSearch}/>
      <DropDown1 />
      <button
        className={`${styles.buttonSideBar} ${
          state ? styles["buttonSideBar--rotate"] : ""
        }`}
        onClick={handleStateClick}
      >
        <img src={arrowLeft} alt="back" />
      </button>
    </aside>
  );
};

export default SideBar;
