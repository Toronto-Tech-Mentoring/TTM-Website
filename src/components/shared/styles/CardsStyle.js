import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '350px',
      maxHeight: '360px',
      display: 'inline-block',
      borderRadius: '30px',
      margin: '0px 25px',
      marginTop: '-5px',
      [theme.breakpoints.down('lg')]: {
        margin: '25px 15px',
        maxWidth: '350px',
        maxHeight: '360px',
      }
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    title: {
      fontFamily: 'Poppins',
      marginTop: '30px',
      textAlign: 'center',
      color: '#873FE2',
      fontSize: '20px',
      [theme.breakpoints.down('lg')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '18px',
        fontWeight: 600,
      },
    },
    contents: {
      fontFamily: 'Poppins',
      textAlign: 'center',
      color: 'black',
      fontSize: '16px',
      lineHeight: '31px',
      margin: '0px auto 50px auto',
    },
    imgDiv: {
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center',
      textAlign: "center",
      height: "130px",
    },
    innerImage: {
      position: "relative",
    },
}));

export { useStyles };