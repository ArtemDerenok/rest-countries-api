import darkModeIcon from "../../assets/icons/darkMode.svg";
import styles from "./DarkMode.module.scss";

const DarkMode = () => {
  return (
    <button className={styles.btn}>
      <img className={styles.icon} src={darkModeIcon} alt="dark mode" />
      Dark Mode
    </button>
  );
};

export default DarkMode;
