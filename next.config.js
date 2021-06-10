const path = require("path");

module.exports = {
  sassOptions: {
    trailingSlash: true,
    webpackDevMiddleware: (config) => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
      return config;
    },
    includePaths: [path.join(__dirname, "styles")],
  },
};
