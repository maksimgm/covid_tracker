import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import get from 'lodash.get';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cn from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) return 'Loading ...';
    
    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.infected)}>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={get(confirmed, 'value')} duration={1.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Nunder of active cases of the vid</Typography>
          </Grid>

          <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.recovered)}>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={get(recovered, 'value')} duration={1.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Nunder of active cases of the vid</Typography>
          </Grid>

          <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.deaths)}>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={get(deaths, 'value')} duration={1.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Nunder of active cases of the vid</Typography>
          </Grid>
        </Grid>
      </div>
    )
}

export default Cards