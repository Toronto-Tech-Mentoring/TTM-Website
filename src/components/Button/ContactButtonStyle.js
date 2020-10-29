import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    contactButton: {
        backgroundColor: '#873FE2',
        borderRadius: '300px',
        width: 'calc(4vw + 122px)',
        minWidth: '116px',
        height: 'calc(1.5vw + 28px)',
        minHeight: '24px',
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