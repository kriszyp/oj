// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    var array2D;
    array2D = function(initLength, initWidth) {
      var array, extend, maxLength, maxWidth, ret;
      array = [];
      maxLength = 0;
      maxWidth = 0;
      ret = {
        get: function(rowNo, colNo) {
          return extend(rowNo, colNo);
        },
        set: function(rowNo, colNo, val) {
          ret.get(rowNo, colNo);
          return array[rowNo - 1][colNo - 1] = val;
        },
        each: function(callBack) {
          return _.each(array, function(columns, row) {
            return _.each(array[row], function(val, col) {
              return callBack(row + 1, col + 1, val);
            });
          });
        }
      };

      /*
      Guarantee that the dimensions of the array are always backed by values at every position
       */
      extend = function(length, width) {
        var i, tryRow;
        if (!length || length < 1) {
          length = 1;
        }
        if (!width || width < 1) {
          width = 1;
        }
        if (maxLength < length) {
          maxLength = length;
        }
        if (array.length > maxLength) {
          maxLength = array.length;
        }
        if (maxWidth < width) {
          maxWidth = width;
        }
        i = 0;
        while (i < maxLength) {
          tryRow = array[i];
          if (!tryRow) {
            tryRow = [];
            array.push(tryRow);
          }
          if (maxWidth < tryRow.length) {
            maxWidth = tryRow.length;
          }
          if (tryRow.length < maxWidth) {
            tryRow.length = maxWidth;
          }
          i += 1;
        }
        return array[length - 1][width - 1];
      };
      extend(initLength, initWidth);
      return ret;
    };
    OJ.register('array2D', array2D);
  })((typeof global !== 'undefined' && global ? global : typeof window !== 'undefined' ? window : this).OJ);

}).call(this);

//# sourceMappingURL=array2D.map