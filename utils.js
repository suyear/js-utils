/*
utils.js 0.0.1 ~ Copyright (c) 2016-2018 Yahoo....
utils.js may be freely distributed under the MIT Licence.
 */

(function() {
  "use strict";
  var exports;

  if (Array.prototype.forEach == null) {
    Array.prototype.forEach = function(func, option) {
      var len, _i, _len;
      if (typeof func !== 'function') {
        throw new TypeError();
      }
      for (_i = 0, _len = this.length; _i < _len; _i++) {
        len = this[_i];
        func.call(option, len, _i, this);
      }
    };
  }

  exports = this;

  exports.utils = (function() {
    var object, proto, methods, extend;
    object = Object;
    proto = object.prototype;
    methods = {};

    extend = function(target, source) {
      return Array.prototype.slice.call(arguments, 1).forEach(function(source) {
        var key;
        for (key in source) {
          target[key] = source[key];
        }
        return target;
      });
    };
    extend(proto, methods);
    return {
      randomStr: function(length){
          var aIndex = "a".charCodeAt();
          var rand = "";
          for (var i = 0; i < length; i++) {
              rand += String.fromCharCode(Math.floor(Math.random() * 26) + aIndex);
          }

          return rand;
      }
    };
  })();

}).call(this);
