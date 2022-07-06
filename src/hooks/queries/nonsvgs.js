import { useStaticQuery, graphql } from 'gatsby';

const useNonSvgData = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "nonsvgs" } }) {
        edges {
          node {
            id
            publicURL
            name
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
