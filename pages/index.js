
import Head from 'next/head'
import { Component } from 'react';
import styles from '../styles/Home.module.css'
import { Cards, CountrySelector, Chart } from '../components';
import { fetchData } from '../api';
import Image from 'next/image'

// import cornonaImg from './germ.png';

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
        <Image src={'/germ.png'} alt="me" width="64" height="64" />
        <Cards data={data} />
        <CountrySelector handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default Home;