var webpack = require('webpack');
module.exports = {
    entry: './src/app.js',
    output: {
        publicPath: '',
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    },
    devServer: {
        host : 'localhost',
        port: 8080,
        proxy : {
            '/api/*': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    }
};

