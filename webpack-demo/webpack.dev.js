const path = require('node:path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bandle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        client: {
            overlay: {
                warnings: false,
                errors: false,
            },
        },
    },
});
