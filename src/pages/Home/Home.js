import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'wouter';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      alignContent="center"
      className={classes.root}
    >
      <Typography
        align="center"
        paragraph
        variant="h2"
        className={classes.title}
      >
        Zelda: Breath of the wild
      </Typography>
      <Typography
        align="center"
        paragraph
        variant="h2"
        className={classes.title}
      >
        Hyrule Compendium
      </Typography>
      <Button
        size="large"
        variant="outlined"
        color="primary"
        className={classes.button}
      >
        <Link href="/compendium">
          <Typography variant="button">See Compendium</Typography>
        </Link>
      </Button>
    </Grid>
  );
};

export default Home;
