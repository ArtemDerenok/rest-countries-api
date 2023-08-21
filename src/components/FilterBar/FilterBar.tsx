import arrowDownImg from "../../assets/icons/arrowDown.svg";
import arrowUpImg from "../../assets/icons/arrowUp.svg";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import styles from "./FilterBar.module.scss";

const FilterBar = () => {
  const [isShow, setIsShow] = useState(false);
  const isDarkMode = useAppSelector((state) => state.darkMode.mode);

  const handleMenu = () => {
    setIsShow((prev) => !prev);
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
      <ul className={styles.filter__list}>
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
