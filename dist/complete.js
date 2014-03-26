
/*
@fileOverview Name Space file
@author me
@version: 0.1.1
 */


/*
jQuery definition to anchor JsDoc comments.

@see http://jquery.com/
@name jQuery
@namespace jQuery Library
 */


/*
OJ IIFE definition to anchor JsDoc comments.

@namespace internalNameSpace
@internal
@param {string} nameSpaceName
@param {jQuery} domVendor
 */

(function() {
  var NsTree, domVendor, makeTheJuice, nameSpaceName, thisGlobal;

  thisGlobal = this;

  domVendor = thisGlobal.jQuery;

  nameSpaceName = "OJ";


  /*
  boot strap name method into Object prototype
  @function
  @return {string} Name of the Object
  @memberOf {object}
   */

  Object.defineProperties(Object.prototype, {
    getInstanceName: {
      value: function() {
        var funcNameRegex, results;
        funcNameRegex = /function (.{1,})\(/;
        results = funcNameRegex.exec(this.constructor.toString());
        if (results && results.length > 1) {
          return results[1];
        } else {
          return "";
        }
      }
    }
  });


  /*
  An internal representation of the namespace tree
  @internal
  @memberOf internalNameSpace
   */

  NsTree = {};

  makeTheJuice = function() {

    /*
    Internal nameSpaceName method to create new "sub" namespaces on arbitrary child objects.
    @internal
    @param spacename {string} the namespace name
    @param tree {object} the internal tree representation of the current level of the namespace
    @extends OJ
    @memberOf internalNameSpace
     */
    var NsOut, dependsOn, makeNameSpace, nsInternal;
    makeNameSpace = function(spacename, tree) {

      /*
      The derived instance to be constructed
      @constructor
      @internal
      @memberOf makeNameSpace
      @return {object}
       */
      var Base, Class;
      Base = function(nsName) {
        var nsTree, proto;
        proto = this;
        tree[nsName] = tree[nsName] || {};
        nsTree = tree[nsName];

        /*
        Register (e.g. "Lift") an Object into the prototype of the namespace.
        This Object will be readable/executable but is otherwise immutable.
        @name register
        @param {string} name The name of the object to lift
        @param {object} obj Any, arbitrary Object to use as the value.
        @return {object} The value of the new property.
        @memberOf OJ
         */
        Object.defineProperty(this, "register", {
          value: function(name, obj, enumerable) {
            "use strict";
            if ((typeof name !== "string") || name === "") {
              throw new Error("Cannot lift a new property without a valid name.");
            }
            if (!obj) {
              throw new Error("Cannot lift a new property without a valid property instance.");
            }
            if (proto[name]) {
              throw new Error("Property named " + name + " is already defined on " + spacename + ".");
            }
            nsTree[name] = nsTree[name] || {
              name: name,
              type: typeof obj,
              instance: (obj.getInstanceName ? obj.getInstanceName() : "unknown")
            };
            Object.defineProperty(proto, name, {
              value: obj,
              enumerable: false !== enumerable
            });
            nsInternal.alertDependents(nsName + "." + spacename + "." + name);
            return obj;
          }
        });

        /*
        Create a new, static namespace on the current parent (e.g. nsName.to... || nsName.is...)
        @name makeSubNameSpace
        @param {string} subNameSpace The name of the new namespace.
        @return {object} The new namespace.
        @memberOf OJ
         */
        proto.register("makeSubNameSpace", (function(subNameSpace) {
          "use strict";
          var newNameSpace;
          if ((typeof subNameSpace !== "string") || subNameSpace === "") {
            throw new Error("Cannot create a new sub namespace without a valid name.");
          }
          if (proto.subNameSpace) {
            throw new Error("Sub namespace named " + subNameSpace + " is already defined on " + spacename + ".");
          }
          nsInternal.alertDependents(nsName + "." + subNameSpace);
          newNameSpace = makeNameSpace(subNameSpace, nsTree);
          if (subNameSpace !== "constants") {
            newNameSpace.register("constants", makeNameSpace("constants", nsTree), false);
          }
          proto.register(subNameSpace, newNameSpace, false);
          return newNameSpace;
        }), false);
      };

      /*
      An internal mechanism to represent the instance of this namespace
      @constructor
      @internal
      @memberOf makeNameSpace
       */
      Class = new Function("return function " + spacename + "(){}")();
      Class.prototype = new Base(spacename);
      return new Class(spacename);
    };

    /*
    "Depend" an Object upon another member of this namespace, upon another namespace,
    or upon a member of another namespace
    @param (array) array of dependencies for this method
    @param (function) obj Any, arbitrary Object to use as the value
    @memberOf OJ
     */
    dependsOn = function(dependencies, callBack, imports) {
      "use strict";
      var missing, nsMembers, ret;
      ret = false;
      nsMembers = nsInternal.getNsMembers();
      if (dependencies && dependencies.length > 0 && callBack) {
        missing = dependencies.filter(function(depen) {
          return nsMembers.indexOf(depen) === -1 && (!imports || imports !== depen);
        });
        if (missing.length === 0) {
          ret = true;
          callBack();
        } else {
          nsInternal.dependents.push(function(imports) {
            return dependsOn(missing, callBack, imports);
          });
        }
      }
      return ret;
    };
    nsInternal = {
      dependents: []
    };

    /*
    Fetches the registered properties and methods on the namespace and its child namespaces
    @interal
    @return {Array} An array of members defined as strings (e.g. 'namespace.constants.astringcnst')
    @memberOf internalNameSpace
     */
    Object.defineProperty(nsInternal, "getNsMembers", {
      value: function() {
        var members, recurseTree;
        recurseTree = function(key, lastKey) {
          if (typeof key === "string") {
            members.push(lastKey + "." + key);
          }
          if (domVendor.isPlainObject(key)) {
            Object.keys(key).forEach(function(k) {
              if (typeof k === "string") {
                members.push(lastKey + "." + k);
              }
              if (domVendor.isPlainObject(key[k])) {
                recurseTree(key[k], lastKey + "." + k);
              }
            });
          }
        };
        members = [];
        Object.keys(NsTree[nameSpaceName]).forEach(function(key) {
          if (domVendor.isPlainObject(NsTree[nameSpaceName][key])) {
            recurseTree(NsTree[nameSpaceName][key], nameSpaceName);
          }
        });
        return members;
      }
    });

    /*
    To support dependency management, when a property is lifted onto the namespace, notify dependents to initialize
    @internal
    @memberOf internalNameSpace
     */
    Object.defineProperty(nsInternal, "alertDependents", {
      value: function(imports) {
        var deps;
        deps = nsInternal.dependents.filter(function(depOn) {
          return false === depOn(imports);
        });
        if (Array.isArray(deps)) {
          nsInternal.dependents = deps;
        }
      }
    });
    NsTree[nameSpaceName] = {};
    NsOut = makeNameSpace(nameSpaceName, NsTree[nameSpaceName]);
    Object.defineProperties(thisGlobal, {
      $nameSpace$: {
        value: NsOut
      }
    });

    /*
    Cache a handle on the vendor (probably jQuery) on the root namespace
    @name '?'
    @return {jQuery}
    @memberOf OJ
     */
    NsOut.register("?", domVendor, false);

    /*
    Cache the tree (useful for documentation/visualization/debugging)
    @name 'tree'
    @return {NsTree}
    @memberOf OJ
     */
    NsOut.register("tree", NsTree[nameSpaceName], false);

    /*
    Cache the name space name
    @name 'name'
    @return {nameSpaceName}
    @memberOf OJ
     */
    NsOut.register("name", nameSpaceName, false);
    NsOut.register("dependsOn", dependsOn, false);
    return NsOut;
  };


  /*
  OJ NameSpace
  
  @namespace OJ
   */

  Object.defineProperty(thisGlobal, nameSpaceName, {
    value: makeTheJuice()
  });

}).call(this);

(function() {
  var OJ;

  OJ = this.$nameSpace$;

  OJ.makeSubNameSpace("errors");


  /*
  To check assigned type
   */

  OJ.makeSubNameSpace("is");


  /*
  To instance check classes
   */

  OJ.makeSubNameSpace("instanceOf");


  /*
  Type conversion
   */

  OJ.makeSubNameSpace("to");


  /*
  Actions
   */

  OJ.makeSubNameSpace("actions");


  /*
  Query Builder
   */

  OJ.actions.makeSubNameSpace("querybuilder");


  /*
  SQL
   */

  OJ.actions.makeSubNameSpace("sql");


  /*
  The MetaData namespace. Represents the structures of nameSpaceName nodes, elements and properties.
   */

  OJ.makeSubNameSpace("metadata");


  /*
  The node namespace. Represents an nameSpaceName Node and its properties.
  [1]: This class is responsible for constructing the DOM getters (properties on this object which reference Nodes in the DOM tree)
  [2]: This class exposes helper methods which can get/set properties on this instance of the node.
  [3]: This class validates the execution of these methods (e.g. Is the node still in the DOM; has it been GC'd behind our backs)
  [4]: Maintaining an im-memory representation of tree with children/parents
   */

  OJ.makeSubNameSpace("node");


  /*
  Models
   */

  OJ.makeSubNameSpace("dataModels");


  /*
  Grids
   */

  OJ.makeSubNameSpace("grids");


  /*
  Grids Columns
   */

  OJ.grids.makeSubNameSpace("columns");


  /*
  Grids Subscribers
   */

  OJ.grids.makeSubNameSpace("subscribers");


  /*
  Stores
   */

  OJ.makeSubNameSpace("stores");


  /*
  Panels
   */

  OJ.makeSubNameSpace("panels");


  /*
  Panel Subscribers
   */

  OJ.panels.makeSubNameSpace("subscribers");


  /*
  Trees
   */

  OJ.makeSubNameSpace("trees");


  /*
  Tree Subscribers
   */

  OJ.trees.makeSubNameSpace("subscribers");


  /*
  Windows.
  Aside: Since 'window' cannot be used _and_ since few synonyms of the word conjurre the same meaning, use the Russian: sheet (window), sheets (windows)
   */

  OJ.makeSubNameSpace("sheets");


  /*
  Window subscribers
   */

  OJ.sheets.makeSubNameSpace("subscribers");

}).call(this);

(function() {
  var OJ, method, tryExec;

  OJ = this.$nameSpace$;

  OJ.register("tryExec", tryExec = function(tryFunc) {
    "use strict";
    var exception, ret, that;
    ret = false;
    that = this;
    try {
      if (OJ.is.func(tryFunc)) {
        ret = tryFunc.apply(that, Array.prototype.slice.call(arguments_, 1));
      }
    } catch (_error) {
      exception = _error;
      if ((exception.name === "TypeError" || exception.type === "called_non_callable") && exception.type === "non_object_property_load") {
        OJ.console.info("Ignoring exception: ", exception);
      } else {
        OJ.console.error(exception);
      }
    } finally {

    }
    return ret;
  });

  OJ.register("method", method = function(tryFunc) {
    "use strict";
    var that;
    that = this;
    return function() {
      var args;
      args = Array.prototype.slice.call(arguments_, 0);
      args.unshift(tryFunc);
      return OJ.tryExec.apply(that, args);
    };
  });

  return;

}).call(this);
