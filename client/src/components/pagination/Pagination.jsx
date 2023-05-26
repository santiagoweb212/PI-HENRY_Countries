import { getPageNumber } from "../../utils/getPageNumbers";
import styles from "./Pagination.module.css";
export const Pagination = ({
  currentPage,
  totalPages,
  handlePageClickNumber,
}) => {

  const pageNumber = getPageNumber(currentPage, totalPages);
  return (
    <div className={styles.containerPagination}>
      {pageNumber &&
        pageNumber.map((number, index) => {
          if (number === "...") {
            return (
              <span key={index} className={styles.span}>
                {number}
              </span>
            );
          } else {
            return (
              <button
                className={
                  number == currentPage ? styles.buttonActive : styles.button
                }
                key={index}
                onClick={() => handlePageClickNumber(number)}
              >
                {number}
              </button>
            );
          }
        })}
    </div>
  );
};
