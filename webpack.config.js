var path = require('path');
var util = require('util');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var pkg = require('./package.json');

var DEBUG = process.env.NODE_ENV !== 'production';

var cssBundle = path.join('css', util.format('[name].%s.css', pkg.version));
var jsBundle = path.join('js', util.format('[name].%s.js', pkg.version));

var entry = {
  app: ['./app.jsx']
};

if (DEBUG) {
  entry.app.push(
    util.format(
      'webpack-dev-server/client?http://%s:%d',
      pkg.config.devHost,
      pkg.config.devPort
    )
  );
  entry.app.push('webpack/hot/only-dev-server');
}

var config = {
  context: path.join(__dirname, 'app'),
  cache: DEBUG,
  debug: DEBUG,
  target: 'web',
  devtool: DEBUG ? 'inline-source-map' : false,
  entry: entry,
  output: {
    path: path.resolve(pkg.config.buildDir),
    publicPath: '/',
    filename: jsBundle,
    pathinfo: false
  },
  module: {
    loaders: getLoaders()
  },
  postcss: [
    autoprefixer
  ],
  plugins: getPlugins(),
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(pkg.config.buildDir),
    hot: true,
    noInfo: false,
    inline: true,
    stats: { colors: true }
  }
};

function getPlugins() {
  var plugins = [
    new webpack.optimize.OccurenceOrderPlugin()
  ];
  if (DEBUG) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );
  } else {
    plugins.push(
      new ExtractTextPlugin(cssBundle, {
        allChunks: true
      }),
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
  return plugins;
}

function getLoaders() {

  var jsxLoader;
  var sassLoader;
  var cssLoader;
  var fileLoader = 'file-loader?name=[path][name].[ext]';
  var htmlLoader = [
    'file-loader?name=[path][name].[ext]',
    'template-html-loader?' + [
      'raw=true',
      'engine=lodash',
      'version=' + pkg.version,
      'title=' + pkg.name,
      'debug=' + DEBUG
    ].join('&')
  ].join('!');
  var jsonLoader = ['json-loader'];

  var sassParams = [
    'outputStyle=expanded',
    'includePaths[]=' + path.resolve(__dirname, './app/scss'),
    'includePaths[]=' + path.resolve(__dirname, './node_modules')
  ];

  if (DEBUG) {
    jsxLoader = ['react-hot', 'babel-loader?optional=runtime'];
    sassParams.push('sourceMap', 'sourceMapContents=true')
    sassLoader = [
      'style-loader',
      'css-loader?sourceMap',
      'postcss-loader',
      'sass-loader?' + sassParams.join('&')
    ].join('!');
    cssLoader = [
      'style-loader',
      'css-loader?sourceMap',
      'postcss-loader'
    ].join('!');
  } else {
    jsxLoader = ['babel-loader?optional=runtime'];
    sassLoader = ExtractTextPlugin.extract('style-loader', [
      'css-loader',
      'postcss-loader',
      'sass-loader?' + sassParams.join('&')
    ].join('!'));
    cssLoader = ExtractTextPlugin.extract('style-loader', [
      'css-loader',
      'postcss-loader'
    ].join('!'));
  }

  return [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: jsxLoader
    },
    {
      test: /\.css$/,
      loader: cssLoader
    },
    {
      test: /\.jpe?g$|\.gif$|\.png$|\.ico|\.svg$|\.woff$|\.ttf$/,
      loader: fileLoader
    },
    {
      test: /\.json$/,
      exclude: /node_modules/,
      loaders: jsonLoader
    },
    {
      test: /\.html$/,
      loader: htmlLoader
    },
    {
      test: /\.scss$/,
      loader: sassLoader
    }
  ];
}

module.exports = config;
