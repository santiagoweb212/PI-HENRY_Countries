import style from "./Button.module.css";
export const Button = ({ texto, styleName, type, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      className={style[styleName]}
      type={type}
      onClick={onClick}
    >
      {texto}
    </button>
  );
};
