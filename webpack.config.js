var path = require('path');
var webpack = require('webpack')
module.exports = {
    entry: [
      'whatwg-fetch',
      'webpack-hot-middleware/client?reload=true',
      './src/index.js'
    ],
    output: {
      path: './build',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader', 'eslint-loader']
      }]
    }
};