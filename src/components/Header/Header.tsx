import DarkMode from "../DarkMode/DarkMode";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Where in the world?</h1>
      <DarkMode />
    </header>
  );
};

export default Header;
