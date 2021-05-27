import { makeStyles } from '@material-ui/core/styles';
import Frame from '../../images/background-texture.png';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url('${Frame}')`,
    backgroundPosition: 'center',
    margin: 0,
    padding: 0,
    minHeight: '100vh',
  },
  title: {
    color: '#21BCFF',
    textShadow: '0px 0px 8px #4FC0FF',
  },
  paper: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
  },
}));

export default useStyles;
