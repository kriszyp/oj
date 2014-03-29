(function() {
  (function() {
    var makeSequentialArray;

    makeSequentialArray = function(start, end) {
      var i, ret;

      ret = array();
      i = void 0;
      end = +end;
      if (OJ.isNumber(start) && OJ.isNumber(end)) {
        i = +start;
        while (i <= end) {
          ret.push(i);
          i += 1;
        }
      }
      return ret;
    };
    OJ.register("makeSequentialArray", makeSequentialArray);
  })();

}).call(this);
//@ sourceMappingURL=array.js.map