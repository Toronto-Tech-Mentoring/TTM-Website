import React from "react"

import Home from "../components/WhoWeAre/index.js"

function ClientSideRendering({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = React.useState(false)

  const WebFontConfig = {
    google: {
      families: ["Josefin Sans", "Poppins"],
    },
    classes: false,
    timeout: 1000,
    active: Home, // invoked when fonts are active
  }

  import("webfontloader").then(WebFontLoader => {
    WebFontLoader.load(WebFontConfig)
  })

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }
   window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });
  return <div {...delegated}>{children}</div>
}

export default ClientSideRendering
