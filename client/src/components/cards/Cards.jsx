import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../pagination/Pagination";
import {  useState } from "react";
import { Card } from "../card/card";
import styles from "./Cards.module.css";
import { getCurrentPage } from "../../redux/actions/getCurrentPage";
import robotTriste from "../../assets/robotTriste.png";
import { Loader } from "../loader/Loader";
export const Cards = () => {
  const {data,message} = useSelector((state) => state.saveDataFilteReducer);
  const arrayDb = useSelector(
    (state) => state.fetchDataReducer.requests.countries?.data
  );
  const loading = useSelector(
    (state) => state.fetchDataReducer.requests.countries?.loading
  );
  const { numberPage } = useSelector((state) => state.getCurrentPageReducer);
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  if (loading === undefined || loading) {
    return (
      <div className={styles.containerLoader}>
        <Loader />
      </div>
    );
  }
  const handleImageLoad = () => {
    setLoader(false);
  };
  

  if(data?.error?.message ) {
    
    return (
      <div className={styles.containerErrorFilter}>
        {loader && <Loader />}
        <img src={robotTriste} alt="robot triste" onLoad={handleImageLoad} />
        {!loader && <p className={styles.messageErrorFilter}>{data?.error?.message}</p>}
      </div>
    );
  }

  if ( message!=='' && data.length===0) {

    return (
      <div className={styles.containerErrorFilter}>
        {loader && <Loader />}
        <img src={robotTriste} alt="robot triste" onLoad={handleImageLoad} />
        {!loader && <p className={styles.messageErrorFilter}>{message}</p>}
      </div>
    );
  }

  const handlePageClickNumber = (numberPage) => {
    dispatch(getCurrentPage(numberPage));
  };

  return (
<>

      {data && (
        <>
          <div className={styles.wrapperPagination}>
            
            <Pagination
              currentPage={numberPage}
              handlePageClickNumber={handlePageClickNumber}
              totalPages={Math.ceil(data.length / 10)}
            />
          </div>

          <div className={styles.containerCards}>
            {data && data
              .slice((numberPage - 1) * 10, numberPage * 10)
              .map((country) => (
                <Card
                  key={country.id}
                  id={country.id}
                  img={country.flags.png}
                  name={country.name}
                  continent={country.continents}
                />
              ))}
          </div>
        </>
      )}
    </> 
   
  );
};
