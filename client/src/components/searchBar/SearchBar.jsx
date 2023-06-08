import styles from "./SearchBar.module.css";
import lupa from "../../assets/lupa.svg";
const SearchBar = ({ onClick, onChange, value }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerButton}>
        <button className={styles.searchBarButton} onClick={onClick}>
          <img className={styles.searchBarImg} src={lupa} alt="lupa" />
        </button>
      </div>

      <input
        className={styles.searchBarInput}
        onChange={onChange}
        value={value}
        type="text"
        placeholder="...search"
      />
    </div>
  );
};

export default SearchBar;
