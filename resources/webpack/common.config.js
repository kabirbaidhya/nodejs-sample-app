var path = require('path');
var webpack = require('webpack');

const DEFAULT_API_BASE = 'http://127.0.0.1:8080';

module.exports = {
    entry: {
        'app': path.resolve(__dirname, '../../src/app/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../../public/build')
    },
    module: {
        loaders: [
            {test: /\.json$/, loader: 'json'},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.jsx?$/, include: /src/, exclude: /node_modules/, loader: 'babel'}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'API_BASE_URI': JSON.stringify(process.env.API_BASE_URI || DEFAULT_API_BASE)
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
};
