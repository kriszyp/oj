// Generated by CoffeeScript 1.7.1
(function() {
  var _treelIIFE;

  (_treelIIFE = function(OJ) {

    /*
    Private class representing the construnction of a tree. It returns a OJ.tree.tree instance with collections for adding subscribers.
    @param name {String} The ClassName of the tree to associate with ExtJS
    @param requires {Array} An array of ExtJS dependencies
    @param extend {String} [extend='Ext.tree.Panel'] An ExtJs class name to extend, usually the tree Panel
    @param alias {Array} [alias] An array of aliases to reference the tree
    @param id {String} An id to uniquely identify the tree
    @param store {OJ.trees.stores.store} A store to provide data to the tree
    @param plugins {Array} An array of plugins to load with the tree
    @param onInit {Function} [onInit] Optional callback to be applied on construction
     */
    var Tree, treeFunc;
    Tree = function(name, requires, extend, alias, id, store, plugins, onInit) {
      "use strict";
      var that;
      that = OJ.classDefinition({
        name: name,
        requires: requires,
        extend: extend || "Ext.tree.Panel",
        alias: alias,
        id: id,
        store: store,
        plugins: plugins,
        namespace: "trees"
      });
      if (onInit) {
        that.addInitComponent(function(them) {
          onInit(them);
        });
      }
      return that;
    };
    OJ.instanceOf.register("Tree", Tree);

    /*
    Create a tree object.
    @param treeDef.name {String} The ClassName of the tree to associate with ExtJS
    @param treeDef.requires {Array} An array of ExtJS dependencies
    @param treeDef.extend {String} [extend='Ext.tree.Panel'] An ExtJs class name to extend, usually the tree Panel
    @param treeDef.alias {Array} [alias] An array of aliases to reference the tree
    @param treeDef.id {String} An id to uniquely identify the tree
    @param treeDef.store {OJ.treesStores.store} A store to provide data to the tree
    @param treeDef.plugins {Array} An array of plugins to load with the tree
    @param onInit {Function} [onInit] Optional callback to be applied on construction
    @returns {OJ.trees.tree} A tree object. Exposese subscribers and columns collections. Call init when ready to construct the tree.
     */
    OJ.trees.register("tree", treeFunc = function(treeDef) {
      "use strict";
      var tree;
      if (!treeDef) {
        throw new Error("Cannot instance a tree without properties");
      }
      if (!treeDef.name && !treeDef.id) {
        throw new Error("Cannot instance a tree without a classname");
      }
      tree = new Tree(treeDef.name, treeDef.requires, treeDef.extend, treeDef.alias, treeDef.id, treeDef.store, treeDef.plugins, treeDef.onInit);
      return tree;
    });
  })((typeof global !== "undefined" && global ? global : (typeof window !== "undefined" ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=tree.map
