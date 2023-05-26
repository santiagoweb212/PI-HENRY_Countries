import styles from "./DropDown.module.css";
import imgContinenteGlobal from "../../assets/Globe.png";
import Desplegable from "../desplegable/Desplegable";
import { useToogleCaret } from "../../hooks/useToogleCaret";

const DropDown = ({
  title,
  showImg = true,
  data,
  name,
  option,
  handleFilterClick,
}) => {
  const { toggleCaret, isExpanded } = useToogleCaret();

  const handleOptionClick = (e) => {
    toggleCaret();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>{title}</h2>
      <div className={styles.containerSelect} onClick={toggleCaret}>
        <div className={styles.containerOpSelect}>
          {showImg && (
            <img
              className={styles.imgSelect}
              src={imgContinenteGlobal}
              alt=""
            />
          )}
          <span>{option}</span>
        </div>
        <Desplegable handleToggleCaret={toggleCaret} isExpanded={isExpanded} />
      </div>

      <ul
        className={`${styles.containerOpcionesInitial} ${
          isExpanded ? styles.containerOpciones : ""
        }`}
      >
        {data &&
          data.map((data) => (
            <li
              key={data}
              name={name}
              onClick={(e) => {
                handleFilterClick(e); handleOptionClick(e);
              }}
            >
              {data}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DropDown;
