const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        vendor: [
            'jquery',
            'select2',
            'select2/dist/css/select2.css'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'js/[name].js',
        library: '[name]',
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        new webpack.DllPlugin({
            name: "[name]",
            path: path.join(__dirname, "[name]-manifest.json")
        })
    ]
};
