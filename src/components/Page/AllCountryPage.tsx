import { useAppSelector } from "../../redux/hooks";
import Card from "../Card/Card";
import FilterBar from "../FilterBar/FilterBar";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./AllCountryPage.module.scss";

const AllCountryPage = () => {
  const { data } = useAppSelector((state) => state);
  return (
    <>
      <div className={styles.boxOne}>
        <SearchBar />
        <FilterBar />
      </div>
      <div className={styles.boxTwo}>
        {data.currentCountries.map((elem, index) => (
          <Card
            flag={elem.flags.png}
            name={elem.name}
            population={elem.population}
            region={elem.region}
            capital={elem.capital}
            key={index}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default AllCountryPage;
