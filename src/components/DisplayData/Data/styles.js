import { makeStyles } from '@material-ui/core/styles';
import Frame from '../../../images/background-texture.png';
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    borderRadius: '46px',
    border: '1px solid rgba(0, 0, 0, 0)',
    // borderColor: 'rgba(255, 255, 255, 0)',
    maxWidth: 178,
    minHeight: 10,
    padding: 10,
    position: 'relative',
  },
  content: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
  },
  name: {
    color: '#3CD3FC',
    background: 'rgba(0, 0, 0, 0.7)',
    textShadow: '0px 0px 8px #4FC0FF',
    textTransform: 'capitalize',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '2rem',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    border: `1px solid #3CD3FC`,
    color: '#3CD3FC',
    position: 'relative',
    padding: '1.2rem',
    backgroundImage: `url('${Frame}')`,
    backgroundPosition: 'contain',
    maxWidth: '41rem',
    '& .paper__title': {
      textShadow: '0px 0px 8px #4FC0FF',
      textTransform: 'capitalize',
    },
    '& .paper__description': {
      fontSize: '1.3rem',
    },
    '& .paper__locations': {
      fontStyle: 'italic',
    },
    '& .paper__button': {
      marginBottom: '1rem',
    },
  },
}));

export default useStyles;
