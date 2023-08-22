import { useAppSelector } from "../redux/hooks";
import FilterBar from "./FilterBar/FilterBar";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import Card from "./Card/Card";
import styles from "./App.module.scss";

const App = () => {
  const { darkMode, data } = useAppSelector((state) => state);
  const cardData = data.allCountries[0];

  return (
    <div
      className={`${styles.container} ${
        darkMode.mode ? styles.darkBackground : null
      }`}
    >
      <Header />
      <div className={styles.container__boxOne}>
        <SearchBar />
        <FilterBar />
      </div>
      <div className={styles.container__boxTwo}>
        <Card
          flag={cardData.flags.png}
          name={cardData.name}
          population={cardData.population}
          region={cardData.region}
          capital={cardData.capital}
        />
      </div>
    </div>
  );
};

export default App;
