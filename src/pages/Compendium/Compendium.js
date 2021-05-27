import { Grid, Typography, Paper } from '@material-ui/core';
import { useLocation } from 'wouter';
import Enemies from '../../components/Enemies/Enemies';
import Materials from '../../components/Materials/Materials';
import FiltersBar from '../../components/FiltersBar/FiltersBar';
import useStyles from './styles';
import { useEffect } from 'react';
const Comprendium = () => {
  const classes = useStyles();
  const [location] = useLocation();

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
        {location === '/compendium/enemies' ? <Enemies /> : ''}
        {location === '/compendium/materials' ? <Materials /> : ''}
        {/* {location === '/compendium/creatures' ? <Creatures /> : ''}
        {location === '/compendium/weapons' ? <Weapons /> : ''}
        {location === '/compendium/treasures' ? <Treasures /> : ''} */}
      </Grid>
    </>
  );
};

export default Comprendium;
