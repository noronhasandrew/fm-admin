import styles from "./Input.module.css";

function Input({ labelText, id, name, type, value, onChange, bottomText }) {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      {bottomText && <p className={styles.bottomText}>{bottomText}</p>}
    </div>
  );
}

export default Input;
