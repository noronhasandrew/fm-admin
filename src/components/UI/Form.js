import styles from "./Form.module.css";

function Form({ onSubmit, onReset, children }) {
  return (
    <form className={styles.mainForm} onSubmit={onSubmit} onReset={onReset}>
      {children}
      <div className={styles.buttonsContainer}>
        <button type="reset" className={`${styles.formButton} ${styles.reset}`}>
          Resetar
        </button>
        <button className={styles.formButton}>Confirmar</button>
      </div>
    </form>
  );
}

export default Form;
