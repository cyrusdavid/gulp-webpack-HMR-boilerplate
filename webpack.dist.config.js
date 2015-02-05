'use strict'

var webpack = require('webpack')

var options = {
  debug: false,
  entry: [
    './app/scripts/main.js',
    './app/styles/main.less'
  ],
  output: {
    path: __dirname + '/.tmp/assets/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.CommonsChunkPlugin('init.js')
  ]
}

module.exports = options
