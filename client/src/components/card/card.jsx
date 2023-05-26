import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
export const Card = ({id, img, name, continent }) => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate(`/country/${id}`)
  }
  return (
    <div className={styles.container} onClick={handleClick}>
      <img src={img} alt="" />
      <h2 className={styles.h2}>{name}</h2>
      <span className={styles.span}>{continent}</span>
    </div>
  );
};
