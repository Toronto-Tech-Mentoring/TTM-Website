import React, { useState} from 'react';
// import pic1 from '../images/about-us/timeline/pic1.svg'; 
import CircularProgress from '@material-ui/core/CircularProgress';
import Spinner from '../images/loader.svg';

export default function LoadableImage(props){
    const [isLoadDone, setLoadingState] = useState(false);
    const { classes, imageSrc } = props;

    function loadSuccessful(){
        setLoadingState(true);
    } 

    function renderImage(){
        return isLoadDone ?  <img className={classes} src={imageSrc} /> : <img src={Spinner}></img>;
    } 

  
    return (
        <>
            <img style={{display: 'none'}}  onLoad={loadSuccessful} className={classes} src={imageSrc} />
            {renderImage()}
        </>    
    ) 
} 