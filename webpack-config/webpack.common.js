// var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {

    entry: {
        'polyfills': '../fragments/footer/src/js/polyfills.ts',
        'vendor': '../fragments/footer/src/js/vendor.ts',
        'app': '../fragments/footer/src/js/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /.json/,
                loaders: ['json-loader']
            },
            // {
            //     test: /\.css$/,
            //     exclude: helpers.root('src', 'app'),
            //     loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            // },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        })
    ]
};