import arrowDownImg from "../../assets/icons/arrowDown.svg";
import arrowUpImg from "../../assets/icons/arrowUp.svg";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./FilterBar.module.scss";
import { filterCountries } from "../../redux/slices/dataSlice";

const FilterBar = () => {
  const [isShow, setIsShow] = useState(false);
  const isDarkMode = useAppSelector((state) => state.darkMode.mode);
  const dispatch = useAppDispatch();

  const handleMenu = () => {
    setIsShow((prev) => !prev);
  };

  const handleFilter = (element: React.MouseEvent<HTMLElement>) => {
    const value = (element.target as HTMLElement).innerText;
    console.log(value);
    dispatch(filterCountries(value));
  };

  return (
    <div
      className={`${styles.filter} ${isShow ? styles.showMenu : null} ${
        isDarkMode ? styles.darkBackground : null
      }`}
    >
      <div onClick={handleMenu} className={styles.filter__heading}>
        Filter by Region{" "}
        <img
          src={isShow ? arrowUpImg : arrowDownImg}
          alt={`${isShow ? "up" : "down"}`}
        />
      </div>
      <ul className={styles.filter__list} onClick={handleFilter}>
        <li className={styles.filter__item}>Africa</li>
        <li className={styles.filter__item}>America</li>
        <li className={styles.filter__item}>Asia</li>
        <li className={styles.filter__item}>Europe</li>
        <li className={styles.filter__item}>Oceania</li>
      </ul>
    </div>
  );
};

export default FilterBar;
