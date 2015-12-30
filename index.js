"use strict";

var staticTools = require('static-tools');

function escapeRegex(str) {
  return String(str).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function BrunchStaticPlugin(config) {
  this.public = config.paths.public
  this.optimize = config.optimize
}

BrunchStaticPlugin.prototype.brunchPlugin = true;

BrunchStaticPlugin.prototype.onCompile = function(generatedFiles) {
  if (this.optimize) {
    staticTools();
  }
}

module.exports = BrunchStaticPlugin;
