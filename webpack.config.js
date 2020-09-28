const path = require('path');

module.exports = {
  mode: "development",
  entry: "/client/src/index.js",
  output: {
      path: __dirname+'/client/dist',
      filename: "bundle.js" //"[name].[chunkhash:8].js"
  },
  module: {
      rules: [
          {
              enforce: "pre",
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: "eslint-loader"
          },
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              include: path.join(__dirname, '/client/src'),
              use: {
                  loader: "babel-loader",
                  options: {
                      presets: [
                          "@babel/preset-env",
                          "@babel/preset-react"
                      ]
                  }
              }
          },
          {
              test: /\.css$/,
              use: [
                  "style-loader",
                  "css-loader"
              ]
          }
      ]
  }
}