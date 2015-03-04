var path = require('path');
var util = require('util');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var pkg = require('./package.json');
var version = pkg.version;

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './app.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: path.join('js', util.format('app.%s.js', version))
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?optional&optional=runtime'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?' + [
          'outputStyle=expanded',
          'sourceMapEmbed',
          'sourceComments',
          'includePaths[]=' + path.resolve(__dirname, './app'),
          "includePaths[]=" + path.resolve(__dirname, './node_modules')
        ].join('&'))
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(path.join('css', util.format('app.%s.css', version)), {
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
};
