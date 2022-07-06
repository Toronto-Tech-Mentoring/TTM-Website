import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textBox: {
    paddingLeft: 'calc(19vw - 51.3px)',
    paddingRight: 'calc(46.5vw - 151px)',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0',
    },
    '@media screen and (max-width: 360px)': {
      width: '100%',
    },
  },
}));

export { useStyles };
