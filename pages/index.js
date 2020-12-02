
import Head from 'next/head'
import { Component } from 'react';
import styles from '../styles/Home.module.css'
import { Cards, CountrySelector, Chart } from '../components';
import { fetchData } from '../api';

class Home extends Component{
  state = {
    data: {},
  }

  async componentDidMount() {
    const data = await fetchData()
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountrySelector />
        <Chart />
      </div>
    )
  }
}

export default Home;