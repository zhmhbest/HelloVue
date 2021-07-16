const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './index.js'
    },
    devServer: {
        host: '0.0.0.0',
        port: 5000
    },
    resolve: {
        extensions: ['.js', '.vue'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.ejs',
            templateParameters: {},
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.vue$/i,
                loader: 'vue-loader'
            }
        ]
    },
};