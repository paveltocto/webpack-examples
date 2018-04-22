const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'stylus-loader']
                }),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
    ]
};
