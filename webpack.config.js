var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './components/index.jsx',
    output: {
        path: path.resolve(__dirname, 'docs'),
        chunkFilename: `[id].js`
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader'},
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
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