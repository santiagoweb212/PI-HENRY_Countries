import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchFilterbar from "../../components/searchFilterBar/SearchFilterBar";
import { useDispatch, useSelector } from "react-redux";
import { fecthData } from "../../redux/actions/fetchData";
import styles from "./Home.module.css";
import SearchBar from "../../components/searchBar/SearchBar";
import { Cards } from "../../components/cards/Cards";
export const Home = () => {
  const dispatch = useDispatch();
  const [isOPen, setIsOpen] = useState(false);

  const divRef = useRef(null);

  const handleOpenMenuClick = () => {
    const divElement = divRef.current;
    const currentMarginLeft = parseInt(
      getComputedStyle(divElement).marginLeft,
      10
    );
    const targetMarginLeft = currentMarginLeft === 0 ? -15.8 : 0;

    divElement.style.marginLeft = `${targetMarginLeft}em`;
    setIsOpen(!isOPen);
  };

  useEffect(() => {
   
    dispatch(
      fecthData(process.env.REACT_APP_API_URL_COUNTRIES_ALL, "countries")
    );
    dispatch(fecthData(process.env.REACT_APP_API_URL_ACTIVITIES, "activities"));
  }, []);
  return (
    <div>
      
      <section className={styles.container}>
        <div className={styles.containerRelative}>
        <div className={styles.boxFilter} ref={divRef}>
          <SearchFilterbar isOpen={isOPen} onClick={handleOpenMenuClick} />
        </div>
        </div>
        
        <div className={styles.boxCards}>
          <Cards/>
        </div>
      </section>
    </div>
  );
};
