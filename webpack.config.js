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
    path: path.join(__dirname, './build'),
    publicPath: '/build'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6', '.less'],
    root: [path.join(__dirname, './src')]
  },
  module : {
    loaders: [
      { test: /\.jsx$|\.es6$|\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', lessLoaders.join('!')) }
    ]
  },
   plugins: process.env.NODE_ENV === 'production' ? [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.OldWatchingPlugin()
  ] : [
    new ExtractTextPlugin('[name].css'),
    new webpack.NoErrorsPlugin(),
    new webpack.OldWatchingPlugin()
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  devtool: "eval-source-map"
};

module.exports = config;
