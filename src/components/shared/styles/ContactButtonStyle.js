import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    contactButton: {
        backgroundColor: '#873FE2',
        borderRadius: '300px',
        width: '200px',
        height: '50px',
        fontSize: '18px',
        color: 'white',
        borderStyle: 'none',
        fontFamily: 'Poppins',
        [theme.breakpoints.down('sm')]: {
            marginTop: '30px',
            marginBottom: '50px',
        }
    }
}));

export { useStyles };