const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: [
            './public/index.html',
            './src/index.js'
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dist'),
    },
    resolve: {
        alias: {
            '@': path.resolve('src'),
        },
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: 3000,
    },
    mode: 'development',
    module: {
        rules: [
            // 編譯 jsx + 編譯 ES6
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                options: { presets: [['@babel/preset-react', {"runtime": "automatic"}], '@babel/preset-env'] }
                } 
            },
            // html loader
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html'
        })
    ],
}