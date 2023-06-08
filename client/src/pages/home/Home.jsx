import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fecthData } from "../../redux/actions/fetchData";
import styles from "./Home.module.css";

import { Cards } from "../../components/cards/Cards";
import SideBar from "../../components/sideBar/SideBar";
export const Home = () => {
  const dataDb = useSelector((state) => state.fecthData?.requests);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fecthData(process.env.REACT_APP_API_URL_COUNTRIES_ALL, "countries")
    );

    dispatch(fecthData(process.env.REACT_APP_API_URL_ACTIVITIES, "activities"));
  }, []);

  return (
    <section className={styles.container}>
      <SideBar />
      <div className={styles.boxCards}>
        <Cards />
      </div>
    </section>
  );
};
