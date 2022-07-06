exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /webfontloader/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
