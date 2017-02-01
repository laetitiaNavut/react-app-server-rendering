var path = require('path');
var webpack = require('webpack');

const DIST_DIR = path.resolve(__dirname, 'dist');


module.exports = {
  
  entry: './browser.js',
  output: {
    path: __dirname + "/static/",
    filename: 'bundle.js'
  },

  node: {
    __dirname: true
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
