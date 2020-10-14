import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '500px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        }
    },
    textBox: {
        padding: '0px 10%',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '50px',
        }
    },
    title: {
        fontFamily: 'Josefin Sans',
        color: 'black',
        fontSize: '22px',
        lineHeight: '38px',
        fontWeight: 600,
        textDecoration: 'underline',
        textDecorationColor: '#FF7500',
        [theme.breakpoints.down('sm')]: {
            margin: '0px 20px'
        }
    },
    contents: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '27px',
        padding:'5px',
        marginTop: '-5px',
        marginBottom: '-5px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px',
            paddingRight: '0px',
            textAlign: 'center',
        }
    },
    question: {
        fontFamily: 'Josefin Sans',
        color: 'black',
        fontWeight: 600,
        marginTop:'5px',
        marginBottom: '5px',
        fontSize: '20px',
        lineHeight: '34px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '40px',
        }
    },
    contactButton: {
        backgroundColor: '#873FE2',
        borderRadius: '300px',
        width: '200px',
        height: '50px',
        fontSize: '18px',
        color: 'white',
        borderStyle: 'none',
        [theme.breakpoints.down('sm')]: {
            marginTop: '30px',
            marginBottom: '50px',
        }
    },
    picDiv: {
        maxWidth: 470,
        maxHeight: 380,
        margin: '0 auto'
    },
    svgSettings: {
        width: '80%',
        [theme.breakpoints.up('sm')]: {
            padding: '10%',
            // width: '100%'
        },
    },
    hideTitleStyle: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    contentRight: {
        float:'right',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    contentLeft: {
        margin:'5px 10px 0px 0px',
        paddingLeft: '3em',
        float:'left',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    }
}));

export { useStyles };