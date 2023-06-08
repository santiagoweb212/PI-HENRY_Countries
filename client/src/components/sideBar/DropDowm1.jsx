import styles from "./DropDown1.module.css";
import flechaAbajo from "../../assets/flecha-abajo.svg";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthData } from "../../redux/actions/fetchData";
import img from "../../assets/world.svg";
import imgActivities from "../../assets/activities.svg";
import filterSvg from "../../assets/filter.svg";
import orderSvg from "../../assets/Sorting.svg";
import caretSvg from '../../assets/flecha-abajo.svg'
import {
  getOptionsActivities,
  getOptionsContinent,
} from "../../utils/getOptionsContinent";
import { useMultipleRefs } from "../../hooks/useMultipleRefs";
import { useToogleState } from "../../hooks/useToogleState";
import { useMenuOptionSelect } from "../../hooks/useMenuOptionSelect";
import { Button } from "../button/button";

const DropDown1 = () => {
  const { countries, activities } = useSelector(
    (state) => state.fetchDataReducer.requests
  );
  const {
    currentHeightSort,
    currentHeight,
    heightSort,
    ulHeightActivitiestRef,
    ulHeigthOrderRef,
    ulHeightRef,
    heightContinents,
    ulHeigth,
    ulHeigthActivities,
    ulHeigthOrder,
  } = useMultipleRefs();

  const [multiToogleState, setMultiToogleState] = useState({});
  const handleStateClick = (e) => {
    const name = e.target.getAttribute("name");

    setMultiToogleState({
      ...multiToogleState,
      [name]: !multiToogleState[name],
    });
  };
  const { handleSelectClick, handleDeleteFilterClick, menuOptions } =
    useMenuOptionSelect();
  const [subMenus, setSubMenus] = useState({
    continents: false,
    activities: false,
    sort: false,
  });

  const handleSubmenusClick = (e) => {
    const name = e.target.getAttribute("name");

    setSubMenus({ ...subMenus, [name]: !subMenus[name] });
  };
  return (
    <div className={`${styles.containerDropDown}`}>
      {/* menu----general */}
      <div
        className={styles.containerDropDown__oP}
        onClick={handleStateClick}
        name="filter"
      >
        <div className={styles.wrapperImg}>
          <img src={filterSvg} alt="img" />
        </div>
        <p
          className={styles.p__titleFilter}
          name="filter"
          onClick={handleStateClick}
        >
          Filter Group
        </p>
      </div>
      {/* -----sub menu----- */}
      <div className={styles.wrapperSubmenu}>
        <div
          className={styles.containerDropDown__continents}
          style={{
            height: `${multiToogleState.filter ? heightContinents : "0"}px`,
          }}
          ref={currentHeight}
          name={"continents"}
          onClick={handleSubmenusClick}
        >
          <div className={styles.wrapperImg}>
            <img src={img} alt="img" />
          </div>
          <p className={styles.p__titleFilter} name={"continents"}>
            {menuOptions.continents}
          </p>
        </div>
        <ul
          ref={ulHeightRef}
          className={styles.ulContinents}
          style={{ height: `${subMenus.continents ? ulHeigth : "0"}px` }}
        >
          {[
            "All Continents",
            ...getOptionsContinent(countries && countries.data),
          ].map((item, i) => (
            <li
              key={i}
              name={"continents"}
              className={styles.liItemContinents}
              onClick={(e) => {
                handleSelectClick(e);
                handleSubmenusClick(e);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <div
          className={styles.containerDropDown__continents}
          style={{
            height: `${multiToogleState.filter ? heightContinents : "0"}px`,
          }}
          ref={currentHeight}
          name="activities"
          onClick={handleSubmenusClick}
        >
          <div className={styles.wrapperImg}>
            <img src={imgActivities} alt="img" />
          </div>
          <p className={styles.p__titleFilter} name={"activities"}>
            {menuOptions.activities}
          </p>
        </div>
        <ul
          ref={ulHeightActivitiestRef}
          className={styles.ulActivities}
          style={{
            height: `${subMenus.activities ? ulHeigthActivities : "0"}px`,
          }}
        >
          {[
            "All Activities",
            ...getOptionsActivities(activities && activities.data),
          ].map((item, i) => (
            <li
              key={i}
              name={"activities"}
              className={styles.liItemActivies}
              onClick={(e) => {
                handleSelectClick(e);
                handleSubmenusClick(e);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* --------order by-------- */}
      <div
        className={styles.containerDropDown__orderBy}
        onClick={handleStateClick}
        name="orderBy"
      >
        <div className={styles.wrapperImg}>
          <img src={orderSvg} alt="img" />
        </div>
        <p
          className={styles.p__titleFilter}
          name={"orderBy"}
          onClick={handleStateClick}
        >
          Order By
        </p>
      </div>
      <div
        className={styles.containerDropDown__sort}
        style={{
          height: `${multiToogleState.orderBy ? heightSort : "0"}px`,
        }}
        ref={currentHeightSort}
        name="sort"
        onClick={handleSubmenusClick}
      >
        <p className={styles.p__titleSort} name={"sort"}>
          {menuOptions.sort}
        </p>
        <div className={styles.wrapperImg__caret}  >
      <img src={caretSvg} alt="img"  name="sort"
        onClick={handleSubmenusClick}/>
    </div>
      </div>

      <ul
        className={styles.ulOrderContainer}
        ref={ulHeigthOrderRef}
        name={"sort"}
        style={{
          height: `${subMenus.sort ? ulHeigthOrder : "0"}px`,
        }}
      >
        <li
          className={styles.liItemOrder}
          name={"sort"}
          onClick={(e) => {
            handleSelectClick(e);
            handleSubmenusClick(e);
          }}
        >
          random
        </li>
        <li
          className={styles.liItemOrder}
          name={"sort"}
          onClick={(e) => {
            handleSelectClick(e);
            handleSubmenusClick(e);
          }}
        >
          A-z
        </li>
        <li
          className={styles.liItemOrder}
          name={"sort"}
          onClick={(e) => {
            handleSelectClick(e);
            handleSubmenusClick(e);
          }}
        >
          Z-a
        </li>
        <li
          className={styles.liItemOrder}
          name={"sort"}
          onClick={(e) => {
            handleSelectClick(e);
            handleSubmenusClick(e);
          }}
        >
          Population Asc
        </li>
        <li
          className={styles.liItemOrder}
          name={"sort"}
          onClick={(e) => {
            handleSelectClick(e);
            handleSubmenusClick(e);
          }}
        >
          Population Desc
        </li>
      </ul>
      <Button
        disabled={false}
        texto={"Clear Filter"}
        styleName={"buttonClearFilter"}
        onClick={handleDeleteFilterClick}
      />
    </div>
  );
};

export default DropDown1;
