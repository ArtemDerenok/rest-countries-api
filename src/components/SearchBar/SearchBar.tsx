import { useAppSelector } from "../../redux/hooks";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const isDarkMode = useAppSelector((state) => state.darkMode.mode);

  return (
    <input
      className={`${styles.search} ${isDarkMode ? styles.darkMode : null}`}
      type="search"
      placeholder="Search for a country"
    ></input>
  );
};

export default SearchBar;
