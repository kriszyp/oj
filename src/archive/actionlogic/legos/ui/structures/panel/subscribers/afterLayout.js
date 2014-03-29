// Generated by CoffeeScript 1.7.1
(function() {
  var _afterrenderIIFE;

  (_afterrenderIIFE = function(OJ) {

    /*
    Create a new afterlayout subscriber;
     */
    var subscribers;
    OJ.panels.subscribers.register("afterlayout", subscribers = function(callBack) {
      "use strict";
      var afterlayout;
      if (callBack) {

        /*
        Returns a callback wrapper with the Ext arguments for afterlayout
        @param viewEl {Ext.Component} Usually the Panel object
        @param layout {Ext.layout.container.Container} The container object
        @param eOpts {Object} arbitrary Ext object
         */
        return afterlayout = function(viewEl, layout, eOpts) {
          "use strict";
          callBack(viewEl, layout, eOpts);
        };
      }
    });
  })((typeof global !== "undefined" && global ? global : (typeof window !== "undefined" ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=afterLayout.map
