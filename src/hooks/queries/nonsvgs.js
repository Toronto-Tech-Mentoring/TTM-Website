import { useStaticQuery, graphql } from 'gatsby';

const useNonSvgData = () => {
  const data = useStaticQuery(graphql`
    {
      allFile {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, formats: JPG, quality: 90)
            }
          }
        }
      }
    }
  `);
  const {
    allFile: { edges },
  } = data;
  return {
    edges,
  };
};

export default useNonSvgData;
