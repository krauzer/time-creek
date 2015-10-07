'use strict';

var webpack = require('webpack');

module.exports = {

  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    ],

  output: {
    path: __dirname + 'dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
     {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?stage=1'}
    ]
  },

  resolve :{
    extensions: ['','.js']
  },

  debug: true,
  devtool: "eval",

  devServer: {
    contentBase: './dist',
    hot: true
  },

  plugins: [
  new webpack.HotModuleReplacementPlugin()
  ]
}