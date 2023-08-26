import { useAppSelector } from "../../redux/hooks";
import Card from "../Card/Card";

const AllCountryPage = () => {
  const { data } = useAppSelector((state) => state);
  return (
    <>
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
    </>
  );
};

export default AllCountryPage;
