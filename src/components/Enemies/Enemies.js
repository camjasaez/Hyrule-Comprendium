import { useState, useEffect } from 'react';
import { Grid, LinearProgress } from '@material-ui/core';

import useStyles from './styles';
import Enemy from './Enemy/Enemy';

import getEnemies from '../../services/getEnemies';

const Enemies = () => {
  const [enemies, setEnemies] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    getEnemies().then((enemy) => {
      setEnemies(enemy);
      setLoading(false);
    });
  }, []);

  return (
    <Grid container className={classes.root} alignItems="center">
      {loading ? (
        <LinearProgress className={classes.loading} />
      ) : (
        enemies.map((enemy) => <Enemy key={enemy.id} enemy={enemy} />)
      )}
    </Grid>
  );
};
export default Enemies;
