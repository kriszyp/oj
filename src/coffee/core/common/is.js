(function() {
  (function(OJ) {
    OJ.is.register("bool", function(boolean) {
      'use strict';      return _.isBoolean(boolean);
    });
    OJ.is.register("arrayNullOrEmpty", function(arr) {
      'use strict';      return !Array.isArray(arr) || !arr || !arr.length || arr.length === 0 || !arr.push;
    });
    OJ.is.register("stringNullOrEmpty", function(str) {
      'use strict';      return str && (!str.length || str.length === 0 || !str.trim || !str.trim());
    });
    OJ.is.register("numberNullOrEmpty", function(num) {
      'use strict';      return !num || isNaN(num) || !num.toPrecision;
    });
    OJ.is.register("dateNullOrEmpty", function(dt) {
      'use strict';      return !dt || !dt.getTime;
    });
    OJ.is.register("objectNullOrEmpty", function(obj) {
      'use strict';      return _.isEmpty(obj || !Object.keys(obj) || Object.keys(obj).length === 0);
    });
    OJ.is.register("plainObject", function(obj) {
      'use strict';      return _.isPlainObject(obj);
    });
    OJ.is.register("date", function(dt) {
      return _.isDate(dt);
    });
    /*
    Determines if a value is an instance of a Number and not NaN*
    */

    OJ.is.register("number", function(num) {
      return typeof num === "number" && false === (OJ.number.isNaN(num) || false === OJ.number.isFinite(num) || OJ.number.MAX_VALUE === num || OJ.number.MIN_VALUE === num);
    });
    /*
    Determines if a value is convertable to a Number
    */

    OJ.is.register("numeric", function(num) {
      debugger;
      var nuNum, ret;

      ret = OJ.is.number(num);
      if (!ret) {
        nuNum = OJ.to.number(num);
        ret = OJ.is.number(nuNum);
      }
      return ret;
    });
    OJ.is.register("vendorObject", function(obj) {
      'use strict';
      var ret;

      ret = obj instanceof OJ["?"];
      return ret;
    });
    OJ.is.register("elementInDom", function(elementId) {
      return false === OJ.is.nullOrEmpty(document.getElementById(elementId));
    });
    OJ.is.register("generic", function(obj) {
      'use strict';
      var ret;

      ret = false === OJ.is["function"](obj) && false === OJ.hasLength(obj) && false === OJ.is.plainObject(obj);
      return ret;
    });
    OJ.is.register("array", function(obj) {
      return _.isArray(obj);
    });
    OJ.is.register("string", function(str) {
      return _.isString(str);
    });
    OJ.is.register("true", function(obj) {
      'use strict';      return obj === true || obj === "true" || obj === 1 || obj === "1";
    });
    OJ.is.register("false", function(obj) {
      'use strict';      return obj === false || obj === "false" || obj === 0 || obj === "0";
    });
    OJ.is.register("trueOrFalse", function(obj) {
      'use strict';      return OJ.is["true"](obj || OJ.is["false"](obj));
    });
    OJ.is.register("nullOrEmpty", function(obj, checkLength) {
      'use strict';      return _.isEmpty(obj || _.isUndefined(obj || _.isNull(obj || _.isNaN(obj))));
    });
    OJ.is.register("instanceof", function(name, obj) {
      'use strict';      return obj.type === name || obj instanceof name;
    });
    OJ.is.register("func", function(obj) {
      'use strict';      return _.isFunction(obj);
    });
  })((typeof global !== 'undefined' && global ? global : typeof window !== 'undefined' ? window : this).OJ);

}).call(this);
//@ sourceMappingURL=is.js.map