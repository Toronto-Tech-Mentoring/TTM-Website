import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    contents: {
        fontFamily: 'Poppins',
        fontSize: 'calc(0.37vw + 12.7px)',
        lineHeight: 'calc(0.648vw + 21.7px)',
        padding:'5px',
        marginBottom: '-5px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px',
            paddingRight: '0px',
            textAlign: 'center',
            fontSize: '13px',
            // marginLeft: '0'
        }
    }
}));

export { useStyles };