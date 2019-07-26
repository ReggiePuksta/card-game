var path = require('path');
  module.exports = {
    entry:  path.resolve(__dirname,"./src/js/game/main.js"),
    devServer: {
      contentBase: "./dist",
      port: 9000
      // hot: true
    },
    devtool: 'inline-source-map',
    mode: "development",
    module: {
      rules: []
    },
    plugins: [],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
    },
  }