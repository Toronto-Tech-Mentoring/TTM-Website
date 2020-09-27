import React from 'react';
import WebFont from "webfontloader";

import Home from "../components/AboutUs/index.js";


function ClientSideRendering({children, ...delegated}) {
    const [hasMounted, setHasMounted] = React.useState(false);

    const WebFontConfig = {
      google: {
        families: ["Josefin Sans", "Poppins"],
      },
      classes: false,
      timeout: 1000,
      active: Home, // invoked when fonts are active
    }

    WebFont.load(WebFontConfig);

    React.useEffect(() => {
        setHasMounted(true);
    }, []);

    if(!hasMounted){
        return null;
    }

    return (
        <div {...delegated}>
            {children}
        </div>
    );

}

export default ClientSideRendering;