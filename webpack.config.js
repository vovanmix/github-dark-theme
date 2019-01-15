const devMode = process.env.NODE_ENV !== 'production'
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: './src/app.scss',
    output: {
        path: path.resolve(__dirname, 'dist/app/'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.(sc|c)ss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "app.css"}),
        new OptimizeCSSAssetsPlugin({})
    ],
    mode: devMode ? 'development' : 'production'
};
