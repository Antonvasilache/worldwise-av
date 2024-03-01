import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import styles from "./CountriesList.module.css";
import { useCities } from "../context/CitiesContext";

function CountriesList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((array, city) => {
    if (!array.map((el) => el.country).includes(city.country))
      return [...array, { country: city.country, emoji: city.emoji }];
    else return array;
  }, []);

  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} /> //KEY TO BE CHANGED
      ))}
    </ul>
  );
}

export default CountriesList;
