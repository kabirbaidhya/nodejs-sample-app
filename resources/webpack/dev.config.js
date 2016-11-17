var webpack = require('webpack');
var common = require('./common.config.js');
var path = require('path');

module.exports = {
    entry: common.entry,
    module: common.module,
    output: {
        path: common.output.path,
        publicPath: '/build/',
        filename: '[name].js'
    },
    debug: true,
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../../public'),
        port: process.env.WEBPACK_DEV_SERVER_PORT || 3000,
        open: true
    },
    plugins: common.plugins.concat([])
};
