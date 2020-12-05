import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountrySelector.module.css';

const CountrySelector = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchApi();
  }, [setFetchedCountries])
  console.log(fetchedCountries)
  return (
    <FormControl className={styles.formControl} >
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
          {fetchedCountries.map((country, i) => {
            return (
              <option key={i} value={country}>{country}</option>
            )
          })}
      </NativeSelect>
    </FormControl>
  )
}

export default CountrySelector