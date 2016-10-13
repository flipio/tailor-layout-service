const webpack = require('webpack'),
    path = require('path'),
    merge = require('webpack-merge');

const common = {
    entry: {
        'app': './fragments/footer/js/app'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    devServer: {
        inline: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    }
};


var config;

// Detect how npm is run and branch based on that
switch (process.env.npm_lifecycle_event) {
    case 'build':
        config = merge(common, {
            plugins: [
                new webpack.DefinePlugin({
                    'process.env':{
                        'NODE_ENV': JSON.stringify('production')
                    }
                }),
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                })
            ]
        });
        break;
    default:
        config = merge(common, {
            devtool: 'eval-source-map'
        });
}

module.exports = config;