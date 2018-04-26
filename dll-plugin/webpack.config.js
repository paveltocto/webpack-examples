const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/home.js'),
        about: path.resolve(__dirname, 'src/js/about.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,
                        fallback: 'file-loader'
                    }
                }
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
                options:{
                    name: 'fonts/[name].[ext]',
                    publicPath: '../'
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./vendor-manifest.json')
        })
    ]
};
