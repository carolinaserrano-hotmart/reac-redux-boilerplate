const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                use: 'react-hot-loader/webpack',
                include: /node_modules/
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
