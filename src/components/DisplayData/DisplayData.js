import { useState, useEffect } from 'react';
import { Grid, LinearProgress } from '@material-ui/core';

import useStyles from './styles';
import Data from './Data/Data';

import getData from '../../services/getData';

const DisplayData = ({ category }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  // equipment
  // materials
  // monsters
  // treasure

  //   category = 'equipment';
  useEffect(() => {
    setLoading(true);
    getData(category)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [category]);

  return (
    <Grid container className={classes.root} alignItems="center">
      {loading ? (
        <LinearProgress className={classes.loading} />
      ) : (
        data.map((data) => <Data key={data.id} data={data} />)
      )}
    </Grid>
  );
};
export default DisplayData;
