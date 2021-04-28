  const firstSectionStyles = {
      container: {
          width: "100vw",
          position: "relative",
          left: "0px",
          height: "calc(100vh - 80px)",
          maxHeight: "700px",
          overflow: "hidden",
          margin: "0px",
          paddingTop: "calc(6vw + 47px)",
          paddingLeft: "calc(19vw - 45px)",
          '@media (max-width: 768px)': {
              paddingTop: "calc(7vw + 37px)",
              height: "calc(100vh - 56px)",
          },
          '@media (max-width: 360px)': {
              height: "calc(100vh - 48px)",
          },


      },
      boldedText: {
          fontSize: "36px",
          position: "relative",
          left: "-10px",
          '@media (max-width: 768px)': {
              fontSize: "24px",
          },
          '@media (max-width: 360px)': {
              fontSize: "20px",
          }
      },
      contentStyle: {
          textAlign: "left",
          marginTop: "-5px",
      },
  }
  export { firstSectionStyles }