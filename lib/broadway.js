/*
 * broadway.js: Top-level include for the broadway module. 
 *
 * (C) 2011, Nodejitsu Inc.
 * MIT LICENSE
 *
 */

var path = require('path'),
    utile = require('utile');

var broadway = exports;

broadway.App      = require('./broadway/app').App;
broadway.common   = require('./broadway/common');
broadway.features = require('./broadway/features');
broadway.formats  = require('nconf').formats;
broadway.plugins  = (function(){
  var plugins = {};
  plugins.__defineGetter__('config', function() { return require('./broadway/plugins/config') });
  plugins.__defineGetter__('directories',  function() { return require('./broadway/plugins/directories')  });
  plugins.__defineGetter__('exceptions',  function() { return require('./broadway/plugins/exceptions')  });
  plugins.__defineGetter__('log',  function() { return require('./broadway/plugins/log') });
  return plugins;
})();

