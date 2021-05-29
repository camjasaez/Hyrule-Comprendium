import { Grid, Typography, Paper } from '@material-ui/core';
import { useLocation } from 'wouter';

import FiltersBar from '../../components/FiltersBar/FiltersBar';
import useStyles from './styles';
import { useEffect } from 'react';

import DisplayData from '../../components/DisplayData/DisplayData';

const Comprendium = ({ params }) => {
  const classes = useStyles();
  const [location] = useLocation();

  const { index } = params;

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        alignContent="center"
        justify="center"
        className={classes.root}
      >
        <Typography
          gutterBottom
          variant="h3"
          align="center"
          className={classes.title}
        >
          Hyrule Compendium
        </Typography>
        <Grid item>
          <Paper elevation={3} variant="outlined" className={classes.paper}>
            <FiltersBar />
          </Paper>
        </Grid>
        {index !== undefined ? <DisplayData category={index} /> : ''}
        {/* {index === 'enemies' ? <DisplayData category="enemies" /> : ''}
        {index === 'materials' ? <Materials /> : ' '} */}
        {/* {location === '/compendium/creatures' ? <Creatures /> : ''}
        {location === '/compendium/weapons' ? <Weapons /> : ''}
        {location === '/compendium/treasures' ? <Treasures /> : ''} */}
      </Grid>
    </>
  );
};

export default Comprendium;
