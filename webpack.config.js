var path = require('path');
var util = require('util');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var pkg = require('./package.json');

var DEBUG = process.env.NODE_ENV !== 'production';

var cssBundle = path.join(
  'css',
  util.format('app.%s.css', pkg.version)
);

var jsBundle = path.join(
  'js',
  util.format('app.%s.js', pkg.version)
);

var cssExtractTextPlugin = new ExtractTextPlugin(cssBundle, {
  allChunks: true
});

var htmlExtractTextPlugin = new ExtractTextPlugin('./index.html', {
  allChunks: true
});

var config = {
  context: path.join(__dirname, 'app'),
  cache: DEBUG,
  debug: DEBUG,
  devtool: DEBUG ? '#inline-source-map' : false,
  entry: {
    app: ['webpack/hot/dev-server', './app.jsx']
  },
  output: {
    path: pkg.config.dist_dir,
    publicPath: pkg.config.dist_dir,
    filename: jsBundle,
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
        loader: cssExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.html$/,
        loader: htmlExtractTextPlugin.extract(
          'html-loader',
          'template-html-loader?' + [
            'engine=lodash',
            'version=' + pkg.version,
            'debug=' + (!DEBUG ? 'true' : 'false')
          ].join('&')
        )
      },
      {
        test: /\.scss$/,
        loader: cssExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?' + [
          'outputStyle=expanded',
          'sourceMapEmbed',
          'sourceComments',
          'includePaths[]=' + path.resolve(__dirname, './app'),
          'includePaths[]=' + path.resolve(__dirname, './node_modules')
        ].join('&'))
      }
    ]
  },
  plugins: [
    cssExtractTextPlugin,
    htmlExtractTextPlugin,
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
};

if (!DEBUG) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.NoErrorsPlugin()
  );
}

module.exports = config;
