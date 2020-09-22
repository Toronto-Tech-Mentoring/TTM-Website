import { makeStyles } from '@material-ui/core/styles';

// For those who uses Material-UI to style for mobile responsiveness. 
// This code block below is media queries in css for Material-UI. 
// Feel free use this boilerplate code and make sure you import makeStyle. 
// If you have any question, ask Khoi.

// ** You don't have to use this if you want to style using .css file ** //
// ** You don't have to implement every single breakpoints. 
// ** If you don't need certain breakpoints, just delete the code ** //

// Documentation: https://material-ui.com/customization/breakpoints

const useStyles = makeStyles((theme) => ({
    sampleClass: {
        // Default styling like color: 'white'

        // Screen size: Very Large screen up
        [theme.breakpoints.up('xl')]: {
       
        }, 

        // Screen size: Desktop to Large Screen
        [theme.breakpoints.between('lg', 'xl')]: {
                
        },

        ///  ** Anything below are mostly applicable for any page. 
        // Anything above can be customized if needs be  ** 

        // Screen size: Laptop to Dekstop
        [theme.breakpoints.between('md', 'lg')]: {
           
        },
        
        // Screen size: Tablet To Laptop
        [theme.breakpoints.between('sm', 'md')]: {
  
        },

        // Screen size: Mobile to Tablet
        [theme.breakpoints.between('xs', 'sm')]: {
     
        },   

        // Screen size: Mobile below
        [theme.breakpoints.down('xs')]: {

        },  
    },
}));

function exampleElement(){
    const classes = useStyles();

    return (
        <div>
            <p className={classes.sampleClass}>Sample text</p>
        </div>
    )
}