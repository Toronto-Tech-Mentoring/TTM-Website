import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    svgSettings: {
        width: '80%',
        [theme.breakpoints.up('sm')]: {
            padding: '10%',
        },
    }
}));

export { useStyles };