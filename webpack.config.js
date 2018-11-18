var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './components/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
            { test: /\.(sass|scss)$/, use: ["style-loader", "css-loader", "sass-loader"] }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './components/index.html'
        })
    ]
};