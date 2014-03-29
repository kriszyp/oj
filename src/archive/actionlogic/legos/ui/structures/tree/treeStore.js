// Generated by CoffeeScript 1.7.1
(function() {
  var _treelIIFE;

  (_treelIIFE = function(OJ) {

    /*
    Private class representing an instance of a tree store. It returns a new OJ.tree.treeStore instance.
    @param rootText {String} The text to display for the root node
    @param children {Array} [children=[]] An array of tree node children
    @param proxy {String} [proxy='memory'] A proxy to render the tree
     */
    var TreeStore, treeStoreFunc;
    TreeStore = function(rootText, children, proxy) {
      "use strict";
      var that;
      that = Ext.create("Ext.data.TreeStore", {
        root: OJ.trees.treeNode({
          text: rootText,
          expanded: true,
          children: children
        }),
        proxy: proxy
      });
      return that;
    };
    OJ.instanceOf.register("TreeStore", TreeStore);

    /*
    Create a tree object.
    @param treeDef.rootText {String} The text to display for the root node
    @param treeDef.children {Array} [children=[]] An array of tree node children
    @param treeDef.proxy {String} [proxy='memory'] A proxy to render the tree
    @returns {OJ.trees.treeStore} A tree store object.
     */
    OJ.trees.register("treeStore", treeStoreFunc = function(treeDef) {
      "use strict";
      var treeStore;
      if (!treeDef) {
        throw new Error("Cannot instance a tree store without properties");
      }
      if (!(treeDef.proxy instanceof OJ.instanceOf.Proxy)) {
        treeDef.proxy = OJ.stores.proxy("memory");
      }
      treeStore = new TreeStore(treeDef.rootText, treeDef.children, treeDef.proxy);
      return treeStore;
    });
  })((typeof global !== "undefined" && global ? global : (typeof window !== "undefined" ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=treeStore.map
