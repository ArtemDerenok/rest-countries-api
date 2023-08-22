import { useAppSelector } from "../../redux/hooks";
import styles from "./Card.module.scss";

interface ICard {
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}

const Card = ({ flag, name, population, region, capital }: ICard) => {
  const isDarkMode = useAppSelector((state) => state.darkMode.mode);

  return (
    <div className={`${styles.card} ${isDarkMode ? styles.darkMode : null}`}>
      <img className={styles.card__img} src={flag} alt={name} />
      <div className={styles.card__boxOne}>
        <h3 className={styles.card__title}>{name}</h3>
        <div className={styles.card__boxTwo}>
          <p className={styles.card__text}>
            <span>Population</span>: {population}
          </p>
          <p className={styles.card__text}>
            <span>Region</span>: {region}
          </p>
          <p className={styles.card__text}>
            <span>Capital</span>: {capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
