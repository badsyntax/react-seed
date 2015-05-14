var config = require('./config');

delete config.context;
delete config.entry;
delete config.output;
delete config.devServer;

module.exports = config;
