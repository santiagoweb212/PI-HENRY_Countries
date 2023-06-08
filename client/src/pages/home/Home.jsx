import { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { fecthData } from "../../redux/actions/fetchData";
import styles from "./Home.module.css";

import { Cards } from "../../components/cards/Cards";
import SideBar from "../../components/sideBar/SideBar";
export const Home = () => {
  const dispatch = useDispatch();

  const [isOPen, setIsOpen] = useState(false);
  const [isActionFired, setIsActionFired] = useState(() => {
    const storedIsActionFired = localStorage.getItem("isActionFired");

    return storedIsActionFired ? JSON.parse(storedIsActionFired) : false;
  });
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
    const handleBeforeUnload = () => {
      localStorage.removeItem("isActionFired");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    if (!isActionFired) {
      dispatch(
        fecthData(process.env.REACT_APP_API_URL_COUNTRIES_ALL, "countries")
      );
      setIsActionFired(true);
      localStorage.setItem("isActionFired", JSON.stringify(true));
    }
    dispatch(fecthData(process.env.REACT_APP_API_URL_ACTIVITIES, "activities"));

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <section className={styles.container}>
      {/*  <div className={styles.containerRelative}>
          <div className={styles.boxFilter} ref={divRef}> */}

      {/* <SearchFilterbar isOpen={isOPen} onClick={handleOpenMenuClick} /> */}
      {/* </div> */}
      {/*  </div> */}
      <SideBar />
     <div className={styles.boxCards}><Cards /></div>
    </section>
  );
};
