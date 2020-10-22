import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cheetohRight: {
        float:'right',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    cheetohLeft: {
        margin:'2em 10px 0px 0px',
        float:'left',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    cheetohRightMirrored: {
        float:'right',
        transform: 'scaleY(-1) rotate(315deg)'
    },
    cheetohLeftMirrored: {
        margin:'2em 10px 0px 0px',
        float:'left',
        transform: 'scaleY(-1) rotate(315deg)'
    }
}));

export { useStyles };