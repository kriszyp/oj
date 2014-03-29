// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    'use strict';
    OJ.nodes.register('br', function(options, owner, calledFromFactory) {
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
        },
        number: 1
      };
      OJ.extend(defaults, options);
      while (i < OJ.number(defaults.number)) {
        ret = OJ.element('br', defaults.props, defaults.styles, defaults.events);
        if (owner) {
          owner.append(ret);
        }
        i += 1;
      }
      if (false === calledFromFactory) {
        OJ.nodes.factory(ret, owner);
      }
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=br.map
