var webpackConfig = require('./webpack.config.test.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['source-map-support', 'mocha', 'sinon'],
    files: [
      'app/app.tests.js'
    ],
    exclude: [],
    preprocessors: {
      'app/app.tests.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [/*'Chrome', */'PhantomJS'],
    singleRun: false,
    webpack: webpackConfig,
    webpackMiddleware: {},
    webpackServer: {
      noInfo: true
    }
  });
};
