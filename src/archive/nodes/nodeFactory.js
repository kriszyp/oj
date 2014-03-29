// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    OJ.makeSubNameSpace("elements");
    OJ.node.register("factory", function(NsNode) {
      'use strict';
      var NsInternal, isChildNodeTypeAllowed, nestableNodeNames, nonNestableNodes, prepId;
      if (!NsNode) {
        throw new Error("Cannot make an OJ factory without an OJ Node!");
      }
      NsInternal = {
        count: 0
      };
      nestableNodeNames = ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6", "p", "fieldset", "select", "ol", "ul", "table"];
      nonNestableNodes = ["li", "legend", "tr", "td", "option", "body", "head", "source", "tbody", "tfoot", "thead", "link", "script"];
      isChildNodeTypeAllowed = (function() {
        return function(tagName) {
          var allowed;
          allowed = false;
          switch (NsNode.tagName) {
            case "body":
              allowed = _.contains(nestableNodeNames(tagName));
              break;
            case "div":
              allowed = false === _.contains(nonNestableNodes(tagName));
              break;
            case "form":
              allowed = false === _.contains(nonNestableNodes(tagName));
              break;
            case "label":
              allowed = false === _.contains(nonNestableNodes(tagName));
              break;
            case "legend":
              allowed = NsNode.parent.tagName === "fieldset";
              break;
            case "fieldset":
              allowed = tagName === "legend" || false === _.contains(nonNestableNodes(tagName));
              break;
            case "ol":
              allowed = tagName === "li";
              break;
            case "ul":
              allowed = tagName === "li";
              break;
            case "li":
              allowed = (NsNode.parent.tagName === "ol" || NsNode.parent.tagName === "ul") && false === _.contains(nonNestableNodes(tagName));
              break;
            case "table":
              allowed = tagName === "td" || tagName === "tr" || tagName === "tbody";
              break;
            case "td":
              allowed = false === _.contains(nonNestableNodes(tagName));
          }
          return allowed;
        };
      })();
      prepId = function(options, childTagName) {
        var id;
        options = options || Object.create(null);
        NsInternal.count += 1;
        id = NsNode.id;
        if (options.name) {
          id += options.name;
        }
        id += NsNode.tagName + OJ.to.string(childTagName) + NsInternal.count;
        Object.defineProperty(options, "id", {
          value: id
        });
        return options;
      };
      if (isChildNodeTypeAllowed("a")) {
        Object.defineProperty(NsNode, "a", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.a(NsNode, prepId(opts, "a"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("b")) {
        Object.defineProperty(NsNode, "b", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.b(NsNode, prepId(opts));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("br")) {
        Object.defineProperty(NsNode, "br", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.br(NsNode, prepId(opts));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("button")) {
        Object.defineProperty(NsNode, "button", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.button(NsNode, prepId(opts, "button"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("div")) {
        Object.defineProperty(NsNode, "div", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.div(NsNode, prepId(opts, "div"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("fieldSet")) {
        Object.defineProperty(NsNode, "fieldSet", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.fieldSet(NsNode, prepId(opts, "fieldSet"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("form")) {
        Object.defineProperty(NsNode, "form", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.form(NsNode, prepId(opts, "form"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("img")) {
        Object.defineProperty(NsNode, "img", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.img(NsNode, prepId(opts, "img"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("input")) {
        Object.defineProperty(NsNode, "input", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.input(NsNode, prepId(opts, "input"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("label")) {
        Object.defineProperty(NsNode, "label", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.label(NsNode, prepId(opts, "label"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("li")) {
        Object.defineProperty(NsNode, "li", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.li(NsNode, prepId(opts, "li"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("ol")) {
        Object.defineProperty(NsNode, "ol", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.ol(NsNode, prepId(opts, "ol"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("option")) {
        Object.defineProperty(NsNode, "option", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.option(NsNode, prepId(opts, "option"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("p")) {
        Object.defineProperty(NsNode, "p", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.p(NsNode, prepId(opts, "p"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("select")) {
        Object.defineProperty(NsNode, "select", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.select(NsNode, prepId(opts, "select"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("span")) {
        Object.defineProperty(NsNode, "span", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.span(NsNode, prepId(opts, "span"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("table")) {
        Object.defineProperty(NsNode, "table", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.table(NsNode, prepId(opts, "table"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("textArea")) {
        Object.defineProperty(NsNode, "textArea", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.textArea(NsNode, prepId(opts, "textArea"));
            return childNode;
          }
        });
      }
      if (isChildNodeTypeAllowed("ul")) {
        Object.defineProperty(NsNode, "ul", {
          value: function(opts) {
            var childNode;
            childNode = OJ.elements.ul(NsNode, prepId(opts, "ul"));
            return childNode;
          }
        });
      }
      return NsNode;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=nodeFactory.map
