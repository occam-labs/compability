var path = require('path');
var webpack = require('webpack');

module.exports = {

    entry: './src/app.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    devServer: { 
        contentBase: './dist'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
}