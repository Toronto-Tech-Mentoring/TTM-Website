import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textBox: {
        padding: '0px 10%',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '50px',
        }
    }
}));

export { useStyles };