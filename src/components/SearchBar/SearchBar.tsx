import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { searchCountry } from "../../redux/slices/dataSlice";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const isDarkMode = useAppSelector((state) => state.darkMode.mode);
  const dispatch = useAppDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchCountry(event.target.value));
  };

  return (
    <input
      onChange={handleSearch}
      className={`${styles.search} ${isDarkMode ? styles.darkMode : null}`}
      type="search"
      placeholder="Search for a country"
    ></input>
  );
};

export default SearchBar;
