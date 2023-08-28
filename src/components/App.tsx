import { useAppDispatch, useAppSelector } from "../redux/hooks";
import FilterBar from "./FilterBar/FilterBar";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import Card from "./Card/Card";
import { useEffect } from "react";
import { filterCountries } from "../redux/slices/dataSlice";
import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";

const App = () => {
  const { darkMode } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterCountries("all"));
  }, []);

  return (
    <div
      className={`${styles.container} ${
        darkMode.mode ? styles.darkBackground : null
      }`}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
