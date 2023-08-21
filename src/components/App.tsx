import { useAppSelector } from "../redux/hooks";
import styles from "./App.module.scss";
import FilterBar from "./FilterBar/FilterBar";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";

const App = () => {
  const isDarkMode = useAppSelector((state) => state.darkMode.mode);

  return (
    <div
      className={`${styles.container} ${
        isDarkMode ? styles.darkBackground : null
      }`}
    >
      <Header />
      <div className={styles.container__boxOne}>
        <SearchBar />
        <FilterBar />
      </div>
    </div>
  );
};

export default App;
