import styles from "./Input.module.css";
export const Input = ({
  label,
  type,
  name,
  styleName,
  styleLabel,
  styleInput,
  evento,
  value,
  checked,
  onBlur,

}) => {
  return (
    <div className={styles[styleName]}>
      <label  className={styles[styleLabel]} htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        type={type}
        name={name}
        className={styles[styleInput]}
        onChange={evento}
        value={value}
        checked={checked}
        onBlur={onBlur}
       
      />
    </div>
  );
};
