import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    question: {
        fontFamily: 'Josefin Sans',
        color: 'black',
        fontWeight: 600,
        marginTop:'5px',
        marginBottom: '5px',
        fontSize: '20px',
        lineHeight: '34px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '40px',
        }
    }
}));

export { useStyles };