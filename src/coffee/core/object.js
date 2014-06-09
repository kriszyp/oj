// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    var object;
    object = function() {
      var obj;
      obj = {};

      /*
      Add a property to the object and return it
       */
      obj.add = function(name, val) {
        OJ.property(obj, name, val);
        return obj;
      };
      obj.add('each', function(callback) {
        return OJ.each(obj, function(val, key) {
          if (key !== 'each' && key !== 'add') {
            return callback(val, key);
          }
        });
      });
      return obj;
    };
    OJ.register('object', object);
    OJ.register('isInstanceOf', function(name, obj) {
      return OJ.contains(name, obj) && OJ.to.bool(obj[name]);
    });
    OJ.register('contains', function(object, index) {
      var ret;
      ret = false;
      if (object) {
        ret = _.contains(object, index);
      }
      return ret;
    });
    OJ.register('compare', function(obj1, obj2) {
      return _.isEqual(obj1, obj2);
    });
    OJ.register('clone', function(data) {
      return _.cloneDeep(data(true));
    });
    OJ.register('serialize', function(data) {
      var ret;
      ret = '';
      OJ.tryExec(function() {
        ret = JSON.stringify(data);
      });
      return ret || '';
    });
    OJ.register('deserialize', function(data) {
      var ret;
      ret = {};
      if (data) {
        OJ.tryExec(function() {
          ret = window.$.parseJSON(data);
        });
        if (OJ.is.nullOrEmpty(ret)) {
          ret = {};
        }
      }
      return ret;
    });
    OJ.register('params', function(data, delimiter) {
      var ret;
      if (delimiter == null) {
        delimiter = '&';
      }
      ret = '';
      if (delimiter === '&') {
        OJ.tryExec(function() {
          ret = $.param(data);
        });
      } else {
        OJ.each(data, function(val, key) {
          if (ret.length > 0) {
            ret += delimiter;
          }
          ret += key + '=' + val;
        });
      }
      return OJ.to.string(ret);
    });
    OJ.register('extend', function(destObj, srcObj, deepCopy) {
      var ret;
      if (deepCopy == null) {
        deepCopy = false;
      }
      ret = destObj || {};
      if (arguments.length === 3) {
        ret = $.extend(OJ.to.bool(deepCopy), ret, srcObj);
      } else {
        ret = $.extend(ret, srcObj);
      }
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=object.js.map