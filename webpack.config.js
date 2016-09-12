var path = require('path');
var webpack = require('webpack')
var BACKEND_IP = process.env.BACKEND_IP || 'http://ec2-52-34-152-41.us-west-2.compute.amazonaws.com/api/posts'
module.exports = {
    entry: [
      'whatwg-fetch',
      'webpack-hot-middleware/client?reload=true',
      './src/index.js'
    ],
    output: {
      path: path.join(__dirname, 'build'),
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