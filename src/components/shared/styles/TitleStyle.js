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
        marginLeft: '1.3em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            marginLeft: '0'
        }
    },
}));

export { useStyles };
