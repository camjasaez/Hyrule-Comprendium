import { useState, useEffect } from 'react';
import { Grid, LinearProgress } from '@material-ui/core';

import useStyles from './styles';
import Material from './Material/Material';

import getMaterials from '../../services/getMaterials';

const Materials = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    getMaterials().then((material) => {
      setMaterials(material);
      setLoading(false);
    });
  }, []);

  return (
    <Grid container className={classes.root} alignItems="center">
      {loading ? (
        <LinearProgress className={classes.loading} />
      ) : (
        materials.map((material) => (
          <Material key={material.id} material={material} />
        ))
      )}
    </Grid>
  );
};

export default Materials;
