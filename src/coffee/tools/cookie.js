// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {

    /*
    Setup settings
    $.cookie.raw = true
    $.cookie.json = true
    
    Setup defaults
    https://github.com/carhartl/jquery-cookie/
    $.cookie.defaults.expires = 365
    $.cookie.defaults.path = '/'
    $.cookie.defaults.domain = 'oj.com'
     */
    var cookies;
    $.cookie.defaults.secure = false;
    cookies = {};
    OJ.cookie.register('get', function(cookieName, type) {
      var ret;
      ret = '';
      if (cookieName) {
        if (type) {
          ret = $.cookie(cookieName, type);
        } else {
          ret = $.cookie(cookieName);
        }
        if (ret) {
          return cookies[cookieName] = ret;
        }
      }
    });
    OJ.cookie.register('all', function() {
      var ret;
      ret = $.cookie();
      return ret;
    });
    OJ.cookie.register('set', function(cookieName, value, opts) {
      var ret;
      ret = '';
      if (cookieName) {
        cookies[cookieName] = value;
        if (opts) {
          ret = $.cookie(cookieName, value, opts);
        } else {
          ret = $.cookie(cookieName, value);
        }
      }
      return ret;
    });
    OJ.cookie.register('delete', function(cookieName, opts) {
      if (cookieName) {
        if (opts) {
          $.removeCookie(cookieName, opts);
        } else {
          $.removeCookie(cookieName);
        }
        delete cookies[cookieName];
      }
    });
    OJ.cookie.register('deleteAll', function() {
      cookies = {};
      OJ.each(OJ.cookie.all, function(val, key) {
        return OJ.cookie["delete"](key);
      });
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=cookie.map
