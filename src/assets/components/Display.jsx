import styles from "./Display.module.css";

function Display({ dipsplayVal }) {
  return (
    <input
      className={styles.display}
      type="text"
      value={dipsplayVal}
      readOnly
    />
  );
}

export default Display;
