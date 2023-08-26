import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import arrowImg from "../../assets/icons/arrow.svg";
import styles from "./CountryPage.module.scss";

const CountryPage = () => {
  let { id } = useParams();
  const data = useAppSelector((state) => state.data.currentCountries);

  return (
    <div className={styles.page}>
      <Link className={styles.page__link} to={"/"}>
        <img src={arrowImg} alt="back" /> Back
      </Link>
      <div className={styles.page__box}>
        <div className={styles.page__boxOne}>
          <img
            className={styles.page__img}
            src={data[Number(id)].flags.svg}
            alt={data[Number(id)].name}
          />
        </div>
        <div className={styles.page__boxTwo}>
          <h2 className={styles.page__title}>{data[Number(id)].name}</h2>
          <div className={styles.page__boxThree}>
            <div>
              <p>
                Native Name: <span>{data[Number(id)].nativeName}</span>
              </p>
              <p>
                Population: <span>{data[Number(id)].population}</span>
              </p>
              <p>
                Region: <span>{data[Number(id)].region}</span>
              </p>
              <p>
                Sub Region: <span>{data[Number(id)].subregion}</span>
              </p>
              <p>
                Capital: <span>{data[Number(id)].capital}</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain: <span>{data[Number(id)].topLevelDomain}</span>
              </p>
              <p>
                Currencies:{" "}
                <span>
                  {" "}
                  {data[Number(id)].currencies.map(
                    (
                      elem: { code: string; name: string; symbol: string },
                      index: number
                    ) =>
                      `${elem.name} ${
                        index === data[Number(id)].currencies.length - 1
                          ? ""
                          : ", "
                      }`
                  )}
                </span>
              </p>
              <p>
                Languages:{" "}
                <span>
                  {" "}
                  {data[Number(id)].languages.map(
                    (
                      elem: {
                        iso639_1: string;
                        iso639_2: string;
                        name: string;
                        nativeName: string;
                      },
                      index: number
                    ) =>
                      `${elem.name}${
                        index === data[Number(id)].languages.length - 1
                          ? ""
                          : ", "
                      } `
                  )}
                </span>
              </p>
            </div>
          </div>
          <div className={styles.page__boxFour}>
            <p>
              Border Countries:{" "}
              <span>
                {" "}
                {data[Number(id)].borders.map(
                  (elem: string, index: number) =>
                    `${elem}${
                      index === data[Number(id)].borders.length - 1 ? "" : ", "
                    }`
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
