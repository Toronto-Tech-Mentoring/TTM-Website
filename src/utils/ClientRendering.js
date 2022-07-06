/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Home from '../components/WhoWeAre/index';

// eslint-disable-next-line react/prop-types
function ClientSideRendering({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = React.useState(false);

  const WebFontConfig = {
    google: {
      families: ['Open Sans'],
    },
    classes: false,
    timeout: 1000,
    active: Home, // invoked when fonts are active
  };

  if (typeof window !== 'undefined') {
    import('webfontloader').then((WebFontLoader) => {
      WebFontLoader.load(WebFontConfig);
    });
  }

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}

export default ClientSideRendering;
