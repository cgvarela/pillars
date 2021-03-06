/* jslint node: true */
"use strict";

require('date.format');

module.exports = Plugin;
function Plugin(config,handler){
  var plugin = this;
  config = (config && typeof config !== 'function')?config:{};
  handler = (typeof config === 'function')?config:handler;
  plugin.id = (new Date()).format("{YYYY}{MM}{DD}{hh}{mm}{ss}{ms}")+Math.round(Math.random()*1000000000000000).toString(36);
  
  plugin.handler = handler;
  plugin.active = true;
  
  plugin.configure(config);
}
  Plugin.prototype.configure = function configure(config){
    for(var i=0,k=Object.keys(config),l=k.length;i<l;i++){
      this[k[i]]=config[k[i]];
    }
    return this;
  };