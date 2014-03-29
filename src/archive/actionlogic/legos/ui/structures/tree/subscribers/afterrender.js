// Generated by CoffeeScript 1.7.1
(function() {
  var _afterrenderIIFE;

  (_afterrenderIIFE = function(OJ) {

    /*
    Create a new render subscriber;
     */
    var subscribers;
    OJ.trees.subscribers.register("afterrender", subscribers = function(callBack) {
      "use strict";
      var afterrender;
      if (callBack) {

        /*
        AfterRender event on the tree panel
        @param extView {Ext.Component} usually the Ext Panel
        @param eOpts {Object} arbitrary Ext props
         */
        return afterrender = function(extView, eOpts) {
          "use strict";
          callBack(extView, eOpts);
        };
      }
    });
  })((typeof global !== "undefined" && global ? global : (typeof window !== "undefined" ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=afterrender.map
