import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  item: {
    margin: 10,
    cursor: 'pointer',
  },
  typography: {
    color: '#3CD3FC',
    textShadow: '0px 0px 8px #4FC0FF',
  },
  link: {
    textDecoration: 'none',
  },
}));

export default useStyles;
