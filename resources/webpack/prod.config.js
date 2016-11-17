var webpack = require('webpack');
var common = require('./common.config.js');

module.exports = {
    entry: common.entry,
    module: common.module,
    output: {
        path: common.output.path,
        filename: '[name].min.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
