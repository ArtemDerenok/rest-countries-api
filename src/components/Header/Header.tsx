import { useAppSelector } from "../../redux/hooks";
import DarkMode from "../DarkMode/DarkMode";
import styles from "./Header.module.scss";

const Header = () => {
  const isDarkMode = useAppSelector((state) => state.darkMode.mode);

  return (
    <header
      className={`${styles.header} ${
        isDarkMode ? styles.darkBackground : null
      }`}
    >
      <h1 className={styles.header__title}>Where in the world?</h1>
      <DarkMode />
    </header>
  );
};

export default Header;
