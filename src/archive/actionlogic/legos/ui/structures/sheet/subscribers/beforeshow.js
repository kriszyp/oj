// Generated by CoffeeScript 1.7.1
(function() {
  var _beforeshowIIFE;

  (_beforeshowIIFE = function(OJ) {

    /*
    Create a new render subscriber;
     */
    OJ.sheets.subscribers.register("beforeshow", function(callBack) {
      "use strict";
      if (callBack) {

        /*
        BeforeShow event on the window.Window
        @param extView {Ext.Component} usually the Ext Window
        @param eOpts {Object} arbitrary Ext props
         */
        return function(extView, eOpts) {
          "use strict";
          var args;
          args = arguments_;
          return OJ.fun.apply(callBack, args, this);
        };
      }
    });
  })((typeof global !== "undefined" && global ? global : (typeof window !== "undefined" ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=beforeshow.map
