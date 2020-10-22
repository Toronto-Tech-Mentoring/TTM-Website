import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    contents: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '1.8',
        padding:'5px',
        marginTop: '-5px',
        marginBottom: '-5px',
        marginLeft: '1.6em',
        [theme.breakpoints.down('sm')]: {
            padding: '0px',
            paddingRight: '0px',
            textAlign: 'center',
            fontSize: '13px',
            lineHeight: '2.5',
            // marginLeft: '0'
        }
    }
}));

export { useStyles };