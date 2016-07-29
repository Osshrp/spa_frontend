var path = require('path');
var webpack = require('webpack')
module.exports = {
    entry: [
        //'webpack-dev-server/client?http://0.0.0.0:4000',
        'webpack-hot-middleware/client?reload=true',
        //'webpack/hot/only-dev-server',
        './src/index.js',
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