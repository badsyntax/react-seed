var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var opn = require('opn');
var pkg = require('./package.json');

var port = pkg.config.dev_port;

var server = new WebpackDevServer(
  webpack(config),
  config.devServer
);

server.listen(port, 'localhost', function (err) {
  if (err) { console.log(err); }
  console.log('Listening at localhost:%d', pkg.config.dev_port);
  opn('http://localhost:' + port);
});
