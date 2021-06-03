import { makeStyles } from '@material-ui/core/styles';
import Frame from '../../images/background-texture.png';
const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url('${Frame}')`,
    backgroundPosition: 'center',
    minHeight: '100vh',
  },
  title: {
    color: '#21BCFF',
    textShadow: '0px 0px 8px #4FC0FF',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    maxWidth: '800px',
  },
  button: {
    width: '315px',
  },
}));

export default useStyles;
