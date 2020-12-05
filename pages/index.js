
import Head from 'next/head'
import { Component } from 'react';
import styles from '../styles/Home.module.css'
import { Cards, CountrySelector, Chart } from '../components';
import { fetchData } from '../api';

class Home extends Component{
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData()
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({ data: fetchedData, country })
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountrySelector handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default Home;