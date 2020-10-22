import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textBox: {
        marginTop:'135px',
        marginRight:'20vw',
        padding: '0px 0 0 16%',
        [theme.breakpoints.down('sm')]: {
            padding:' 0px 0 0 0',
            margin: 0,
            textAlign: 'left',
        }
    }
}));

export { useStyles };