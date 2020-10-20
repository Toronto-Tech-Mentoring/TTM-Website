import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: 'Josefin Sans',
        color: 'black',
        fontSize: '18px',
        lineHeight: '38px',
        fontWeight: 600,
        textDecoration: 'underline',
        textDecorationColor: '#FF7500',
        textUnderlinePosition: 'under',
        marginLeft: '2.5vw',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            marginLeft: '0'
        }
    },
}));

export { useStyles };
