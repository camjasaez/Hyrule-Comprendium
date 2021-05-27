import {
  Grid,
  Typography,
  Box,
  Card,
  CardActionArea,
  Modal,
  Fade,
  Paper,
  CardMedia,
  Button,
} from '@material-ui/core';

import { useState } from 'react';
import useStyles from './styles';

const Enemy = ({ enemy }) => {
  const { id, name, image, description, common_locations } = enemy;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <Grid item xs={6} sm={4} md={3} lg={2} align="center">
      <Card className={classes.root} variant="outlined">
        <CardActionArea aria-describedby={id} onClick={handleOpen}>
          <CardMedia title={name} component="img" alt={name} image={image} />
          <Box className={classes.content}>
            <Typography className={classes.name}>
              {`${id} - ${name}`}
            </Typography>
          </Box>
        </CardActionArea>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Paper className={classes.paper}>
              <Typography variant="h4" gutterBottom className="paper__title">
                {`${id} - ${name}`}:
              </Typography>
              <Typography
                variant="subtitle1"
                paragraph
                className="paper__description"
              >
                {description}
              </Typography>
              <Typography paragraph className="paper__locations">
                Common locations:
                {common_locations
                  ? common_locations.map((location) => ` '${location}'`)
                  : `Unknow`}
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                className="paper__button"
                onClick={handleClose}
              >
                Close
              </Button>
            </Paper>
          </Fade>
        </Modal>
      </Card>
    </Grid>
  );
};

export default Enemy;
