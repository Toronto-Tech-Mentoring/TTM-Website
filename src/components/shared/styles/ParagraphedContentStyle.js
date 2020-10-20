import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    contents: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '27px',
        padding:'5px',
        marginTop: '-5px',
        marginBottom: '-5px',
        marginLeft: '1.6em',
        [theme.breakpoints.down('sm')]: {
            padding: '0px',
            paddingRight: '0px',
            textAlign: 'center',
            marginLeft: '0'
        }
    },
    contentDecorationRight: {
        float:'right',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    contentDecorationLeft: {
        margin:'2em 10px 0px 0px',
        float:'left',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    }
}));

export { useStyles };