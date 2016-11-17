const webpack = require('webpack');
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');

const lessLoaders = [
  'css-loader',
  'postcss-loader',
  'less-loader?indentedSyntax=less&includePaths[]=' + path.resolve(__dirname, './src')
]

const config = {
  entry: {
    bundle: ['./src/index']
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '.'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6', '.less'],
    root: [path.join(__dirname, './src')]
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', lessLoaders.join('!'))
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.NoErrorsPlugin(),
    new webpack.OldWatchingPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  devtool: "eval-source-map"
};

module.exports = config;
