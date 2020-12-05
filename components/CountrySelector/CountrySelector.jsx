import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountrySelector.module.css';

const CountrySelector = () => {
  const [fetchedCountries, setFetchedCountries] = useState([])
  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await countries);
    };

    fetchApi();
  }, [setFetchedCountries])
  console.log(fetchCountries)
  return (
    <FormControl className={styles.formControl} >
      <NativeSelect>
        <option value='global'>Global</option>
      </NativeSelect>
    </FormControl>
  )
}

export default CountrySelector