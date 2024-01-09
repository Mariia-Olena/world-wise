import styles from './CountriesList.module.css';
import CountryItem from './CountryItem';
import Spinner from './Spinner';
import Message from './Message';
import { useCities } from '../contexts/CitiesContext';

function CountriesList() {
  const { cities, isLoading } = useCities();
  const countries = cities.reduce((curr, item) => {
    if (!curr.map((el) => el.country).includes(item.country)) {
      return [...curr, { country: item.country, emoji: item.emoji }];
    } else {
      return curr;
    }
  }, []);

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountriesList;
