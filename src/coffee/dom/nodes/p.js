(function() {
  (function(OJ) {
    'use strict';    OJ.nodes.register('p', function(options, owner, calledFromFactory) {
      var defaults, ret;

      if (owner == null) {
        owner = OJ.body;
      }
      if (calledFromFactory == null) {
        calledFromFactory = false;
      }
      defaults = {
        props: {},
        styles: {},
        events: {
          click: _.noop
        }
      };
      OJ.extend(defaults, options);
      ret = OJ.element('p', defaults.props, defaults.styles, defaults.events);
      if (owner) {
        owner.append(ret);
      }
      if (false === calledFromFactory) {
        OJ.nodes.factory(ret, owner);
      }
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);
//@ sourceMappingURL=p.js.map