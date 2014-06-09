// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    OJ.to.register('bool', function(str) {
      var retBool;
      retBool = OJ.is['true'](str);
      if (retBool === false || retBool !== true) {
        retBool = false;
      }
      return retBool;
    });
    OJ.to.register('ES5_ToBool', function(val) {
      return val !== false && val !== 0 && val !== '' && val !== null && val !== undefined && (typeof val !== 'number' || !isNaN(val));
    });
    OJ.to.register('dateFromTicks', function(tickStr) {
      var arr, localOffset, offset, ret, ticks, ticsDateTime;
      ticsDateTime = OJ.to.string(tickStr);
      ret = void 0;
      ticks = void 0;
      offset = void 0;
      localOffset = void 0;
      arr = void 0;
      if (false === OJ.is.nullOrEmpty(ticsDateTime)) {
        ticsDateTime = ticsDateTime.replace('/', '');
        ticsDateTime = ticsDateTime.replace('Date', '');
        ticsDateTime = ticsDateTime.replace('(', '');
        ticsDateTime = ticsDateTime.replace(')', '');
        arr = ticsDateTime.split('-');
        if (arr.length > 1) {
          ticks = OJ.to.number(arr[0]);
          offset = OJ.to.number(arr[1]);
          localOffset = new Date().getTimezoneOffset();
          ret = new Date(ticks - ((localOffset + (offset / 100 * 60)) * 1000));
        } else if (arr.length === 1) {
          ticks = OJ.to.number(arr[0]);
          ret = new Date(ticks);
        }
      }
      return ret;
    });
    OJ.to.register('binary', function(obj) {
      var ret;
      ret = NaN;
      if (obj === 0 || obj === '0' || obj === '' || obj === false || OJ.to.string(obj).toLowerCase().trim() === 'false') {
        ret = 0;
      } else {
        if (obj === 1 || obj === '1' || obj === true || OJ.to.string(obj).toLowerCase().trim() === 'true') {
          ret = 1;
        }
      }
      return ret;
    });
    OJ.to.register('number', function(inputNum, defaultNum) {
      var retVal, tryGetNumber;
      tryGetNumber = function(val) {
        var ret, tryGet;
        ret = NaN;
        if (OJ.is.number(val)) {
          ret = val;
        } else if (OJ.is.string(val) || OJ.is.bool(val)) {
          tryGet = function(value) {
            var num;
            num = OJ.to.binary(value);
            if (!OJ.is.number(num) && value) {
              num = +value;
            }
            if (!OJ.is.number(num)) {
              num = _.parseInt(value, 0);
            }
            return num;
          };
          ret = tryGet(val);
        }
        return ret;
      };
      retVal = tryGetNumber(inputNum);
      if (!OJ.is.number(retVal)) {
        retVal = tryGetNumber(defaultNum);
        if (!OJ.is.number(retVal)) {
          retVal = Number.NaN;
        }
      }
      return retVal;
    });
    OJ.to.register('string', function(inputStr, defaultStr) {
      var ret1, ret2, retVal, tryGetString;
      tryGetString = function(str) {
        var ret;
        ret = void 0;
        if (OJ.is.string(str)) {
          ret = str;
        } else {
          ret = '';
          if (OJ.is.bool(str) || OJ.is.number(str) || OJ.is.date(str)) {
            ret = str.toString();
          }
        }
        return ret;
      };
      ret1 = tryGetString(inputStr);
      ret2 = tryGetString(defaultStr);
      retVal = '';
      if (ret1.length !== 0) {
        retVal = ret1;
      } else if (ret1 === ret2 || ret2.length === 0) {
        retVal = ret1;
      } else {
        retVal = ret2;
      }
      return retVal;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=to.js.map