import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthData } from "../../redux/actions/fetchData";
import { useParams } from "react-router-dom";
import styles from "./DetailCountry.module.css";
import { Loader } from "../../components/loader/Loader";
const DetailCountry = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { countryId } = useSelector((state) => state.fetchDataReducer.requests);

  useEffect(() => {
    dispatch(fecthData(`${process.env.REACT_APP_API_URL_COUNTRIES_ID}/${id}`, "countryId"));
  }, []);
  if (countryId?.loading) {
  
    return <div className={styles.containerLoader}><Loader/></div> ;
  }

  return (
    <section className={styles.container}>
      <div className={styles.containerCard}>
        <img src={countryId?.data.flags?.png} alt="" />
        <div className={styles.containerDatos}>
          <p>
            <span>name:</span> {`${countryId?.data.name}`}
            <span>{`(${countryId?.data.id})`}</span>
          </p>
          <p>
            <span>continent:</span> {`${countryId?.data.continents[0]}`}
          </p>
          <p>
            <span> sub region:</span>
            {`${countryId?.data.subregion}`}
          </p>
          <p>
            <span>capital:</span> {`${countryId?.data.capital}`}
          </p>
          <p>
            <span>area:</span> {`${countryId?.data.area}`}
          </p>
          <p>
            <span>poblacion:</span> {`${countryId?.data.population}`}
          </p>
        </div>
      </div>
    </section>
  );
};


export default DetailCountry;
