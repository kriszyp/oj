// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {

    /*
    http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
     */
    OJ.register('queryString', function(param) {
      var i, params, prm, ret;
      ret = {};
      if (OJ.global.location) {
        params = OJ.global.location.search.substr(1).split('&');
        if (params) {
          i = 0;
          while (i < params.length) {
            prm = params[i].split('=');
            if (prm.length === 2) {
              ret[prm[0]] = OJ.global.decodeURIComponent(prm[1].replace(/\+/g, " "));
            }
            i += 1;
          }
        }
      }
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=queryString.map
