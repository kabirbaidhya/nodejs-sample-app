var webpack = require('webpack');
var common = require('./common.config.js');

module.exports = {
    entry: common.entry,
    module: common.module,
    output: {
        path: common.output.path,
        filename: '[name].min.js'
    },
    plugins: common.plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
};
