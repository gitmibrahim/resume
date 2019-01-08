var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './components/index.jsx',
    output: {
        path: path.resolve(__dirname, 'docs'),
        publicPath: './assets/',
        chunkFilename: `[id].js`
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader' },
            { test: /\.(sass|scss)$/, use: ["style-loader", "css-loader", "sass-loader"] }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './components/index.html'
        }),
        new CopyWebpackPlugin([
            { from: './assets', to: 'assets' }
        ]),
    ]
};