var path = require('path');

module.exports = {
    entry: {
        'app': path.resolve(__dirname, '../../src/app/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../../public/build')
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.jsx?$/, include: /src/, exclude: /node_modules/, loader: 'babel' }
        ]
    }
};
