import lightModeIcon from "../../assets/icons/lightMode.svg";
import darkModeIcon from "../../assets/icons/darkMode.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeMode } from "../../redux/slices/darkModeSlice";
import styles from "./DarkMode.module.scss";

const DarkMode = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.darkMode.mode);

  const handleMode = () => {
    dispatch(changeMode());
  };

  return (
    <button className={styles.btn} onClick={handleMode}>
      {isDarkMode ? (
        <img className={styles.icon} src={darkModeIcon} alt="dark mode" />
      ) : (
        <img className={styles.icon} src={lightModeIcon} alt="light mode" />
      )}
      Dark Mode
    </button>
  );
};

export default DarkMode;
