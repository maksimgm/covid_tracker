import axios from 'axios';
import get from 'lodash.get';
import { CountrySelector } from '../components';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country = null) => {
  const updatedUrl = typeof country === 'string' ? `${url}/countries/${country}` : url

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate, } } = await axios.get(updatedUrl); 
    return { confirmed,recovered, deaths, lastUpdate };
  } catch (error) {
    console.error(error)
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: get(dailyData, 'confirmed.total'),
      deaths: get(dailyData, 'deaths.total'),
      date: get(dailyData, 'reportDate'),
    }));
    // console.log(modifiedData)
    return modifiedData
  } catch (error) {
    console.error(error)
  }
}

export const fetchCountries = async () => {
  try{
    const res = await axios.get(`${url}/countries`);
    const countries  = get(res, 'data.countries', []);
    return countries.map((country) => { return country.name });
  } catch (error) {
    console.error(error)
  }
}