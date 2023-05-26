
import styles from "./Desplegable.module.css";
const Desplegable = ({isExpanded,handleToggleCaret}) => {
  
  return (
    <span
      className={`${styles.caret} ${isExpanded ? '':styles.expanded}`}
      onClick={handleToggleCaret}
    ></span>
  );
};

export default Desplegable;
