import React, { useState, useEffect} from 'react';
// import pic1 from '../images/about-us/timeline/pic1.svg'; 
import CircularProgress from '@material-ui/core/CircularProgress';

export default function LoadableImage(props){
    const [isLoadDone, setLoadingState] = useState("false");
    const [src, setSrc] = useState(undefined);
    const { classes, imageSrc } = props;

    useEffect(() => {
        if(isLoadDone){
            setSrc(imageSrc);
        };
        // console.log(imageSrc)
    }, [isLoadDone]);

    function loadSuccessful(){
        console.log("LOAD");
        setLoadingState(true);
    } 

    console.log(isLoadDone);
  
    return (
        <div>
            <img style={{display: isLoadDone ? 'inline-block' : 'none'}}  onLoad={loadSuccessful} className={classes} src={src} />
            <CircularProgress style={{display: isLoadDone === "false" ? 'inline-block' : 'none'}} />
        </div>
        
    ) 
} 